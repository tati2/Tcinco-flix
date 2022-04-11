import React from "react"
import * as S from "./Style"
import MovieSlides from "../slides/movieSlides"


const Home = () => {
    return(
        <div>
            <S.Title>T-CINCO FLIX</S.Title>
            <MovieSlides/>        
        </div>
    )
}
export default Home