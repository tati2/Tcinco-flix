import React from "react"
import axios from "axios"
import styled from "styled-components"
import Carousel from "react-elastic-carousel"

const Img = styled.img`
width: 60%;
`

const CarouselMovies = styled(Carousel)`
background-color:#2d3142;
`



const apiFilmes = axios.create({
    baseURL:
      'https://api.themoviedb.org/3/movie/popular?api_key=674e056a0305570de7e7dea12691bb59',
  });
  

  export default class MovieSlides extends React.Component{

    state = {
        movies: []
    }

    componentDidMount(){
        this.getMovies()
    }

    getMovies = async () => {
        const response = await apiFilmes.get()

        const filmes = response.data.results.map((item) => {
            return {
              ...item,
              poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            };
          });
         
          this.setState({
              movies: filmes
          })

    }

      render(){
          return(
              <CarouselMovies itemsToShow={3}>
                 {this.state.movies.map((item) => (
                   <Img src={item.poster_path} alt={item.title}/>                   
                 ))}                 
              </CarouselMovies>
          )
      }
  } 