import React, { Component } from "react"
import ReactDom from "react-dom"
import { connect, Provider } from "react-redux"
import { createStore, bindActionCreators } from 'redux'
import reducer from "../reducer"
import * as actions from "../actions"

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
        tags.map((tag, i) => {
          return <TagLabel name={tag} key={i} onClose={this.handleClose.bind(this, tag)}/>
        })
      }
    </div>
  }
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
    this.props.actions.appendTag(currentInput)
    this.setState({
      currentInput: ""
    })
  }
  handleClose(tag){
    this.props.actions.removeTag(tag)
  }
  render(){
    const { dispatch, tags } = this.props
    return <div>
      <Tags tags={tags} handleClose={this.handleClose.bind(this)}/>
      <input onChange={this.handleChange.bind(this)} value={this.state.currentInput}/>
      <button onClick={this.handleClick.bind(this)}>Append</button>
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
