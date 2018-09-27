import React, {Component} from 'react';

class Sum extends Component{
    constructor(){
        super();
        this.state={
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    inputChange1(e){
        this.setState({number1: e.target.value})
    }
    inputChange2(e){
        this.setState({number2: e.target.value})
    }
    sumNumbers(){
        var sumHolder= parseInt(this.state.number1) + parseInt(this.state.number2);
        this.setState({sum: sumHolder})
    }

    render(){
        console.log(this.state)
        return (
            <div className="puzzleBox SumPB">
            <h4>Sum</h4>
            <input className="inputLine" onChange={(e)=>this.inputChange1(e)}></input>
            <input className="inputLine" onChange={(e)=>this.inputChange2(e)}></input>
            <button className="confirmationButton" onClick={()=>this.sumNumbers()}>Submit</button>
            <span className="resultsBox">{JSON.stringify(this.state.sum)}</span>


            </div>
        )
    }
}

export default Sum