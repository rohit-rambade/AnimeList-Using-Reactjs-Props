import React from "react"
import ReactDOM from "react-dom/client"


const AnimeList = (props) => {
    console.log(props)
    return (
        <>

            <div className="cards">
                <div className="anime-title">
                <h2>{props.title}</h2>
                </div>
                <img src={props.imgsrc} alt="img"></img>
                <div className="para">
                <p>{props.desc}</p>
                </div>

            </div>
            







        </>
    )
}











export default AnimeList