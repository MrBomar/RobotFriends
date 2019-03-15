import React, {Component} from 'react';

class Card extends Component{
    render(){
        let {id,email,name} = this.props; 
        return(
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2' id={id}>
                <img alt='robot' src={`https://robohash.org/${name}?200x200`}/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
    }
}

export default Card;
