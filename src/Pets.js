import React, { Component } from 'react';
import parrot from './parrot.svg';
import toucan from './toucan.png';
import minecraftParrot from './minecraft-parrot.png';

class Pets extends Component {

    render() {

        console.log( this.props.petId )
        return(
            <div className='Pets'>
                <div className='triangle-isosceles'><p>{this.props.quote}</p></div>

                { this.props.petId === 1 ? <img src={parrot} className='pet' alt='' />
                    : this.props.petId === 2 ? <img src={toucan} className='pet' alt='' />
                    : <img src={minecraftParrot} className='pet' alt='' />
                }

                <button onClick={this.props.getPet} className='button' id='small'>Get new pet</button>

            </div>
        )
    }
}

export default Pets;