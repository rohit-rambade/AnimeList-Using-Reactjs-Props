import React from "react"
import ReactDOM from "react-dom/client"
import AnimeList from "./Components/AnimeList"
import AnimeData from "./Components/AnimeData"
import './index.css'


const App = () => {
    return (
        <>

            <h1>Anime List</h1>
            <div className="container">

                {AnimeData.map(values => {
                    return (
                        <>

                            <AnimeList
                                title={values.title}
                                imgsrc={values.imgsrc}
                                desc={values.desc}
                                
                            />

                        </>
                    )
                })}
                

            </div>
            
        </>
    )
}


export default App