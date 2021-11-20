import "./styles.css"
import {useState} from "react";
import {IoMdArrowDropdown} from "react-icons/io"

export const Dropdown = () => {
    const [isActive,
        setIsActive] = useState(false);

    const options = [
        "Action",
        "Anime",
        "British",
        "Canadian",
        "Classic & Cult",
        "Comedies",
        "Crime",
        "Docuseries",
        "Dramas",
        "Horror",
        "International",
        "K-dramas",
        "Kids",
        "Miniseries",
        "Mysteries",
        "Reality",
        "Romance",
        "Sci-Fi & Fantasy",
        "Science & Nature",
        "Stand-Up & Talk Shows",
        "Teen",
        "Thriller"
    ];

    return (
        <div className="genre-dropdown">
            <div className="dropdown-button" onClick={(e) => setIsActive(!isActive)}>
                Genres
                <div className="dropdown-icon">
                    <IoMdArrowDropdown/>
                </div>
            </div>

            {isActive && (
                <div className="dropdown-content">
                    {options.map((option) => (
                        <div className="dropdown-item">
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}