import { Component } from "react";

export class WishList extends Component {

  state = {
    userInput: '',
    list: [],
  }

onChangeEvent(e) {
  this.setState({userInput:e});
}

addItem(input) {
  if(input === '') {
    alert('Please enter an item')
  } else {
  let listArray = this.state.list;
  listArray.push(input);
this.setState({list: listArray, userInput: ''})
}
}

deleteItem () {
  let listArray = this.state.list;
  listArray = [] ;
  this.setState({list:listArray})
}

crossedWord(event) {
const li= event.target;
li.classList.toggle('crossed');
}

onFormSubmit(e) {
  e.preventDefault();
}

  render () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
        <div className="container">
          <input type = "text" placeholder="Make a wish..."
          onChange ={(e)=> {this.onChangeEvent(e.target.value)}}
          value = {this.state.userInput}/>
        </div>
        <div className="container">
          <button className="btn_add" onClick={() =>this.addItem(this.state.userInput)}> Add </button>
        </div>
        <div className="container">
        <ul>
          {this.state.list.map((item,index) => (
          <li onClick={this.crossedWord}   key={index}>{item}</li>
          ))}
        </ul>
        </div>
          <div className="container">
        <button className="btn_del" onClick={() => this.deleteItem()}>Delete</button>
         </div>
         </form>
      </div>
    )
  }


}
