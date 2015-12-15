import React, { Component } from "react"
import ReactDom from "react-dom"
import { connect, Provider } from "react-redux"
import { createStore, bindActionCreators } from 'redux'
import reducer from "../reducer"
import * as actions from "../actions"

let store = createStore(reducer)

const TagLabel = ({name}) => {
  return <span className="tag-label">{name}</span>
}

const Tags = ({tags}) => {
  return <div>
    {
      tags.map((tag, i) => {
        return <TagLabel name={tag} key={i}/>
      })
    }
  </div>
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
  render(){
    const { dispatch, tags } = this.props
    return <div>
      <Tags tags={tags}/>
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
