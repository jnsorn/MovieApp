import React, {Component} from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

class Movie extends Component{


    // we can check data type from parent component and set essential elements using 'isRequired' 
    static propTypes={
        title: propTypes.string.isRequired,
        poster: propTypes.string.isRequired
    }

    render(){
        return(
            <div>
        <MoviePoster poster={this.props.poster}/>
        <h2>{this.props.title}</h2>
        </div>
      )
    }
}

class MoviePoster extends Component{

    static propTypes={
        poster: propTypes.string.isRequired
    }
    render(){
        return(
            <img src={this.props.poster}/>
       )     
    }
}
export default Movie