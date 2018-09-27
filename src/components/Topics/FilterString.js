import React, {Component} from 'react';

class FilterString extends Component{
    constructor(){
        super();
        this.state={
            userInput: '',
            unfilteredArray: ["string","dogs","cats","humans","clams","supermen","aliens"],
            filteredArray: []
        }
    }

    updateInput(e){
        this.setState({userInput:e.target.value})
    }
    filterString(){
        var newStrings= this.state.unfilteredArray.filter(e=>e.includes(this.state.userInput));
        this.setState({filteredArray:newStrings})
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unfilteredArray)}</span>
                <input className="inputLine" onChange={e=>this.updateInput(e)}></input>
                <button className="confirmationButton" onClick={()=>this.filterString()}>Submit</button>
                <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray)}</span>

            </div>
            )
    }
}

export default FilterString