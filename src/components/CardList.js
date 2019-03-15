import React, {Component} from 'react';
import Card from './Card';

class CardList extends Component{
    createList(){
        return this.props.robots.map(robot=>{return <Card key={robot.id} name={robot.name} email={robot.email}/>})
    }
    render(){
        return (
            <div>
                {this.createList()}
            </div>
        )
    }
}

export default CardList;