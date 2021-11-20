import "./styles.css"
import {TitleCard} from "../../title-card"
import {Dropdown} from "../../genre-dropdown"
import {Footer} from '../../footer'

export const TVShows = () => {
    return (
        <div className="TV-Shows">
            
            <div className="PageTitle">
                TV Shows
            </div>

            <div className="GenreDropdown">
                <Dropdown/>
            </div>

            <div className="TitleCards">
                <TitleCard title='TV Comedies'/>
                <TitleCard title='Sitcoms'/>
                <TitleCard title='Suspensful TV Shows'/>
                <TitleCard title='Award-Winning TV Shows'/>
                <TitleCard title='Binge worthy TV Shows'/>
            </div>

            <div className="Footer">
                <Footer/>
            </div>
        </div>
    )
}