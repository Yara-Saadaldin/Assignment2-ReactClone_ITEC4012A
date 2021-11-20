import "./styles.css"
import Carousel from "react-elastic-carousel";
import placeholderImage1 from "./assets/image1.webp";
import placeholderImage2 from "./assets/image2.jpg";
import placeholderImage3 from "./assets/image3.jpg";
import placeholderImage4 from "./assets/image4.webp";
import placeholderImage5 from "./assets/image5.webp";
import placeholderImage6 from "./assets/image6.jpg";
import placeholderImage7 from "./assets/image7.jpg";
import placeholderImage8 from "./assets/image8.jpg";
import placeholderImage9 from "./assets/image9.webp";
import placeholderImage10 from "./assets/image10.jpg";

export const TitleCard = ({title}) => {

    const breakPoints = [
        {
            width: 1,
            itemsToShow: 2
        }, {
            width: 500,
            itemsToShow: 4
        }, {
            width: 1000,
            itemsToShow: 6
        }
    ];

    return (
        <div className="titleCard">

            <p>{title}</p>

            <div className="title-images">
                <Carousel breakPoints={breakPoints}>
                    <img src={placeholderImage1}  alt=""/>
                    <img src={placeholderImage2}  alt=""/>
                    <img src={placeholderImage3}  alt=""/>
                    <img src={placeholderImage4}  alt=""/>
                    <img src={placeholderImage5}  alt=""/>
                    <img src={placeholderImage6}  alt=""/>
                    <img src={placeholderImage7}  alt=""/>
                    <img src={placeholderImage8}  alt=""/>
                    <img src={placeholderImage9}  alt=""/>
                    <img src={placeholderImage10} alt=""/>
                    <img src={placeholderImage1}  alt=""/>
                    <img src={placeholderImage2}  alt=""/>
                    <img src={placeholderImage3}  alt=""/>
                    <img src={placeholderImage4}  alt=""/>
                    <img src={placeholderImage5}  alt=""/>
                    <img src={placeholderImage6}  alt=""/>
                    <img src={placeholderImage7}  alt=""/>
                    <img src={placeholderImage8}  alt=""/>
                    <img src={placeholderImage9}  alt=""/>
                    <img src={placeholderImage10} alt=""/>
                    <img src={placeholderImage1}  alt=""/>
                    <img src={placeholderImage2}  alt=""/>
                    <img src={placeholderImage3}  alt=""/>
                    <img src={placeholderImage4}  alt=""/>
                    <img src={placeholderImage5}  alt=""/>
                    <img src={placeholderImage6}  alt=""/>
                    <img src={placeholderImage7}  alt=""/>
                    <img src={placeholderImage8}  alt=""/>
                    <img src={placeholderImage9}  alt=""/>
                    <img src={placeholderImage10} alt=""/>
                </Carousel>
            </div>
        </div>
    )
}