import React, { Component } from "react"
import ReactDom from "react-dom"
import { connect, Provider } from "react-redux"
import { createStore, bindActionCreators } from 'redux'
import reducer from "../reducer"
import * as actions from "../actions"
import { isValidTag } from "../validator"

let store = createStore(reducer)

const TagLabel = ({name, onClose}) => {
  let style = {
    background: "rgb(185, 190, 200)",
    padding: 5,
    margin: "0 5",
    borderRadius: 5,
    display: "inline-block"
  }
  return <div className="tag-label" style={style}>
    <span onClick={onClose}>×</span>
    <span>{name}</span>
  </div>
}

class Tags extends Component{
  handleClose(tag){
    this.props.handleClose(tag)
  }
  render(){
    let {tags} = this.props
    return <div style={{padding: "10px 0"}}>
      {
        tags.map( (tag, i) => (
          <TagLabel name={tag} key={i} 
            onClose={this.handleClose.bind(this, tag)}
          /> 
        ))
      }
    </div>
  }
}

const Form = ({tags}) => {
  return (
    <form>
      {
        tags.map((tag, i) => (
          <input type="hidden" name="tag[]" value={tag} key={i} />
        ))
      }
    </form>
  )
}

class TagInput extends Component{
  handleKeydown(e){
    if(e.key == "Enter"){
      this.props.onSend(e)
      return
    }
  }
  render(){
    const {onChange, onSend, value} = this.props
    return (
      <div>
        <input onChange={onChange} value={value} onKeyPress={this.handleKeydown.bind(this)}/>
        <button onClick={onSend} >Append</button>
      </div>
    )
  }
}

const Error = ({msg}) => {
  let style = {
      background: "red",
      color: "white"
  }
  if(msg === null){
    return <noscript />
  }
  return <div style={style}>{msg}</div>
}

// components
class App extends Component{
  constructor(){
    super()
    this.state = {
      currentInput : ""
    }
  }
  handleChange(e){
    this.setState({
      currentInput: e.target.value
    })
  }
  handleClick(e){
    let currentInput = this.state.currentInput
    // Component Validate Pattern
    // if(!isValidTag(currentInput)){
    //   return
    // }
    this.props.actions.appendTag(currentInput)
    this.setState({
      currentInput: ""
    })
  }
  handleClose(tag){
    this.props.actions.removeTag(tag)
  }
  render(){
    const { dispatch, tags, errorMessage } = this.props
    return <div>
      <Error message={errorMessage}/>
      <Tags tags={tags} handleClose={this.handleClose.bind(this)}/>
      <TagInput
        onChange={this.handleChange.bind(this)} 
        onSend={this.handleClick.bind(this)} 
        value={this.state.currentInput}
        />
      <Form tags={tags} />
    </div>
  }
}

function mapStateToProps(state) {
  return state
}
function mapDispatchToProps(dispatch){
  return { actions: bindActionCreators(actions, dispatch) }
}

let ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
var container = document.querySelector("#container")

ReactDom.render(
  <Provider store={store} >
    <ConnectedApp />
  </Provider>
, container)
