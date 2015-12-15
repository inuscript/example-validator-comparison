const React = require("react")
const ReactDom = require("react-dom")
const { Component } = React
const fs = require("fs")
const path = require("path")

class SendButton extends Component{
  render(){
    const {onClick} = this.props
    return <button onClick={onClick}>Send</button>
  }
}

class App extends Component{
  handleSend(){
    console.log("this is " + this.constructor.name)
  }
  render(){
    return <div>
      <input/>
      <SendButton onClick={this.handleSend.bind(this)} />  { /* A: (this is App) */}
      <SendButton onClick={this.handleSend} /> {/* B: (Error) */}
    </div>
  }
}

var container = document.querySelector("#container")

ReactDom.render(<App />, container)
