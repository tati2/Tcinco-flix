import React from 'react';
import axios from 'axios';

const apiFilmes = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/movie/popular?api_key=674e056a0305570de7e7dea12691bb59',
});

export default class Movies extends React.Component {
  state = {
    listFilmes: [],
    resultfilms: []
  };

  componentDidMount() {
    this.getFilmes()
  }

  getFilmes = async () => {
    const response = await apiFilmes.get();  
    const filmes = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
      };
    });

    this.setState({
      listFilmes: filmes,
      resultfilms: filmes
    });
  }


  buscarFilmes = (event) => {
    let {listFilmes} = this.state

    const filmesFiltrados = listFilmes.filter((item) => {
      if(item.title.toLowerCase().includes(event.target.value.toLowerCase())){
        return true
      }
    })
    //console.log(event.target.value)

    this.setState({
      resultfilms: filmesFiltrados
    })
  }

  render() {
    return (
      <div>
        <h1>Filmes</h1> 
        <input 
        type="text"
        placeholder="buscar filme..."
        onChange={this.buscarFilmes}
        />       
        {this.state.resultfilms.map((item) => (
          <div>
            <p>{item.title}</p>
            <img src={item.poster_path} alt="" />
          </div>
        ))}
      </div>
    );
  }
}
