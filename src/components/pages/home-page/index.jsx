import "./styles.css"
import {Billboard} from '../../billboard'
import {TitleCard} from "../../title-card"
import {Footer} from '../../footer'

export const HomePage = () => {
    return (
        <div>
            <div className="wrapper">

                <div className="Billboard">
                    <Billboard/>
                </div>

                <div className="TitleCards">
                    <TitleCard title='Popular on Netflix'/>
                    <TitleCard title='Trending Now'/>
                    <TitleCard title='Continue Watching'/>
                    <TitleCard title='My List'/>
                    <TitleCard title='Recently Added'/>
                </div>
            </div>

            <div className="Footer">
                <div><Footer/></div>
            </div>
        </div>
    )
}