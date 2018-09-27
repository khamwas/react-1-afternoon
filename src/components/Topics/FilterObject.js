import React, {Component} from 'react';

class FilterObject extends Component{
    constructor(){
        super();
        this.state = {
            unfilteredArray: [{"dog":"Bulbabunny","CP":156},{"monster":"Bulbabunny","CP":135},
            {"monster":"Bulbabunny","CP":250},{"cat":"Ponylopse","CP":277},{"monster":"Ponylopse","CP":184},
            {"monster":"Pikadoughnet","CP":207},{"cat":"Bulbabunny","CP":139}],
            userInput: '',
            filteredArray: []
        };
    }
    inputChange(e){
        this.setState({userInput: e.target.value});

    }

    filterArray(){
        var newArray = this.state.unfilteredArray.filter(e=>e[this.state.userInput]);
        this.setState({filteredArray: newArray})
    }

    

    render(){
        return (
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">{JSON.stringify(this.state.unfilteredArray)}</span>
            <input className="inputLine" onChange={e=>this.inputChange(e)}></input>
            <button className="confirmationButton" onClick={()=>this.filterArray()}>Submit</button>
            <span className="resultsBox">{JSON.stringify(this.state.filteredArray)}</span>
        </div>
        )
    }}

export default FilterObject