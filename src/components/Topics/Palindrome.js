import React, {Component} from 'react';

class Palindrome extends Component{
    constructor(){
        super();
        this.state={
            userInput:'',
            palindrome:''
        }
    }

    changeInput(e){
        this.setState({userInput:e.target.value})
    };

    makePalindrome(){
        var holder = this.state.userInput.slice();
        var arr = holder.split('');
        arr.reverse();
        if(arr.join('')===this.state.userInput){
            this.setState({palindrome: 'Yes, this is a palindrome'})
        }else{
            this.setState({palindrome: 'No, this is not a palindrome.'})
        }
       
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange={(e)=>this.changeInput(e)}></input>
            <button className="confirmationButton" onClick={()=>this.makePalindrome()}>Submit</button>
            <span className="resultsBox">{JSON.stringify(this.state.palindrome)}</span>
            </div>
        )
    }
}

export default Palindrome