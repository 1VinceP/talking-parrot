import React, { Component } from 'react';
import axios from 'axios';
import Pets from './Pets'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      petId: 0,
      quote: []
    }

    this.getPet = this.getPet.bind(this)
  }

  componentDidMount() {
    
  }

  getPet() {
    let random = Math.floor( ( Math.random() * 3 ) + 1 )
    
    if( random !== this.state.petId ) {
      this.setState({
        petId: random
      })

      axios.get( 'http://ron-swanson-quotes.herokuapp.com/v2/quotes' )
      .then( response => {
        this.setState({
          quote: response.data
        })
      } )

    }
    else
      this.getPet()
  }

  render() {

    console.log( this.state.quotes )
    return (
      <div className="App">


        { !this.state.petId
          ? <button onClick={ this.getPet } className='button'>Click me and receive your pet!</button>
          : <Pets petId={this.state.petId}
                  quote={this.state.quote}
                  getPet={this.getPet} />
        }
        
      </div>
    );
  }
}

export default App;
