 import React, {Component} from 'react';

class EvenAndOdd extends Component{
       constructor(){
           super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }};

    inputChange(e){
        this.setState({userInput: e.target.value});
    }
   
    

    assignEvensAndOdds(content){
       var holderArray1 = this.state.userInput.split(',');
       var holderArray = holderArray1.map(e=>parseInt(e));
        this.setState({evenArray: (holderArray.filter(e=>e%2===0))});
        this.setState({oddArray: (holderArray.filter(e=>e%2===1))});
        

    }

    render(){

        return (
        <div className='puzzleBox evenAndOddPB'>
            <h4>Even and Odds</h4>
            <input className="inputLine" onChange={(e)=>this.inputChange(e)}/>
            <button className="confirmationButton" onClick={()=> {this.assignEvensAndOdds(this.state.userInput)}}>Split</button>
            <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
            <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
            )
    }
}

export default EvenAndOdd