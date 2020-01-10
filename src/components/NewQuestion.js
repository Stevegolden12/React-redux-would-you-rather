import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { addQuestion } from '../actions/questions'


export default NewQuestion extends Component{
  constructor(props){
    super(props)
    this.state = {
      questionOne: '',
      questionTwo: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitChange = this.submitChange.bind(this)
  }
  handleChange = (e, question) => {
    e.preventDefault()

    this.setState({
      question: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()   

    dispatch(addQuestion(this.state.questionOne, this.state.questionTwo))
       
  }

  render(){
    return (
      <Fragment>
        <h1>New Question</h1>
        <main>
          <h2>Create New Question</h2>
          <div>Complete the Question</div>  
          <form onSubmit={this.handleSubmit}>
            <label>Would you rather</label>
            : <input
                type="text"
                name="optiononequestion"
                placeholder="Enter option one text here"
                onChange={this.handleChange(questionOne)}/><br>
              <div>OR</div>
                <input
                  type="text"
                  name="optiontwoquestion"
                  placeholder="Enter option two text here"
                  onChange={this.handleChange(questionTwo)}/><br>
              <input type="submit" value="Submit">
          </form>
        </main>
      </Fragment>
      )
  }
}

 export default connect()(NewQuestion)
