import React,{useEffect, useState} from 'react'
import { Card, Carousel } from "antd";
import { useSearchParams } from "react-router-dom";

const Slideshow = (props) => {
    const {contentStyle} = props;
    const [searchParams, setSearchParams] = useSearchParams();
    const live = searchParams?.get("live") ?? false;
    const [content, setContent] = useState("");

    const imgStyle = {
        height:"400px",maxWidth:"auto",width: "expression(this.width > 500 ? 500: true)"
    };

    useEffect(() => {
        setContent(getCardImages((!live)));
    },[live]);

    const getCardImages = (isTest) => {
        const imageLoc = '../assets/sampleimgs/*.{png,jpg,jpeg,svg}';
        console.log(imageLoc);
        const images = import.meta.glob('../assets/memories/*.{png,jpg,jpeg,svg}', { eager: true });
        const sampleimgs = import.meta.glob('../assets/sampleimgs/*.{png,jpg,jpeg,svg}', { eager: true });

        return  Object.values((isTest ? sampleimgs : images )).map((image, index) => (
            <div>
                <Card className='cardSlide'
                    key={index} 
                    alt={`Image ${index + 1}`}
                    style={{
                        backgroundColor: "blue",
                        // backgroundSize: "cover",
                        backgroundImage: `url(${image.default})`,
                        width: "900px",
                        height: "600px",
                        placeSelf: "center"
                    }}
                    // cover = {
                    //     <div style={contentStyle}>test</div>
                    // }
                >
                </Card>
            </div>
        ));
    }

  return (
    <Carousel 
        style={{width:"80%", placeSelf: "center"}} 
        autoplay={{ dotDuration: true }} 
        autoplaySpeed={5000} 
        waitForAnimate={false} 
        effect='fade' 
        speed={4000}
        draggable
        arrows
        >
            {content}
    </Carousel>
  )
}

export default Slideshow