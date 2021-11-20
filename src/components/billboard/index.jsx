import "./styles.css"
import billboardImage from "./assets/backgroundImage.webp";
import billboardTitle from "./assets/title.webp"
import {GrPlayFill} from "react-icons/gr"
import {CgInfo} from "react-icons/cg"

export const Billboard = () => {
    return (
        <div className="billboard-content">

            <div className="billboard-image">
                <img src={billboardImage} alt=""/>
            </div>

            <div className="billboard-title">
                <img src={billboardTitle} alt=""/>
            </div>

            <div className="billboard-description">
                Stuck in a vicious cycle of dead-end relationships with two-timing men, Los
                Angeles resident Amanda and Londoner Iris decide to swap homes.
            </div>

            <div className="billboard-buttons">
                <button className="Play-button">
                    <div className="playbtn">
                        <GrPlayFill/>
                    </div>
                    Play
                </button>
                <button className="MoreInfo-button">
                    <div className="infobtn">
                        <CgInfo/>
                    </div>
                    More Info
                </button>
            </div>

        </div>
    )
}