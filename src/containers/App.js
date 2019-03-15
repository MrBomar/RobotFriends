import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from  '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App  extends Component{
    constructor(){
        super();
        this.state = {
            robots: [], 
            searchField: ''};
    }
    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json();
        }).then(users=>{
            this.setState({robots: users});
        })
    }
    onSearchChange = (event) => {
        this.setState({searchField:event.target.value});
    }
    render(){
        let filteredRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1>Loading...</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">Robot Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;