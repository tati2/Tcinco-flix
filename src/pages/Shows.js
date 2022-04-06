import React from 'react';
import axios from 'axios';

const apiSeries = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/tv/popular?api_key=f5e33b7872870b499cdef685aff18b48',
});

export default class Series extends React.Component {
  state = {
    listSeries: [],
    filtroBusca:[]
  };

  componentDidMount() {
    this.getSeries()
  }
  
  getSeries = async () => {
    const responseTv = await apiSeries.get();  
    const series = responseTv.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
      };
    });

    this.setState({
      listSeries: series,
      filtroBusca:series
    });    
  }

  buscarSeries = (event) => {
    let {listSeries} = this.state

    const seriesFiltradas = listSeries.filter((item) => {
      if(item.name.toLowerCase().includes(event.target.value.toLowerCase())){
        return true;
      }
    })

    this.setState({
      filtroBusca: seriesFiltradas
    })   
  }

  render() {
    return (
      <div>
        <h1>Series</h1>
        <input onChange={this.buscarSeries}
        type="text"
        placeholder="Buque um filme..."
        />
        {this.state.filtroBusca.map((item) => (
          <div>
            <p>{item.name}</p>
            <img src={item.poster_path} alt="" />
          </div>
        ))}
      </div>
    );
  }
}
