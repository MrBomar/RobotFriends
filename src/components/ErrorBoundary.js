import React, {Component} from 'react';

class ErrorBoundary extends Component{
    constructor(props){
        super();
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error, info){
        this.setState({hasError: true});
    }
    render(){
        if(this.state.hasError){
            return <h1>Ooop. We have an error.</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;