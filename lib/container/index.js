import React, { Component } from "react"
import ReactDom from "react-dom"
import { connect, Provider } from "react-redux"
import { createStore, bindActionCreators } from 'redux'
import * as actions from "../actions"
import { generateStore } from "../store"

let store = generateStore()

const TodoLabel = ({name, onClose}) => {
  let style = {
    background: "rgb(185, 190, 200)",
    padding: 5,
    margin: "5",
    borderRadius: 5,
    width: "100%"
  }
  return <div className="task-label" style={style}>
    <span style={{paddingRight: "2px", cursor: "pointer" }} onClick={onClose}>×</span>
    <span>{name}</span>
  </div>
}

class Todos extends Component{
  handleClose(task){
    this.props.handleClose(task)
  }
  render(){
    let {tasks} = this.props
    return <div style={{padding: "10px 0"}}>
      {
        tasks.map( (task, i) => (
          <TodoLabel name={task} key={i} 
            onClose={this.handleClose.bind(this, task)}
          /> 
        ))
      }
    </div>
  }
}

const Form = ({tasks}) => {
  return (
    <form>
      {
        tasks.map((task, i) => (
          <input type="hidden" name="task[]" value={task} key={i} />
        ))
      }
    </form>
  )
}

class TodoInput extends Component{
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
    this.props.actions.appendTask(currentInput)
    this.setState({
      currentInput: ""
    })
  }
  handleClose(task){
    this.props.actions.removeTask(task)
  }
  render(){
    const { dispatch, tasks} = this.props
    return <div>
      <Todos tasks={tasks} handleClose={this.handleClose.bind(this)}/>
      <TodoInput
        onChange={this.handleChange.bind(this)} 
        onSend={this.handleClick.bind(this)} 
        value={this.state.currentInput}
        />
      <Form tasks={tasks} />
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
