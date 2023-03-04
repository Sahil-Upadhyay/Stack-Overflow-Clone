import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './AskQuestion.css'
import { askQuestion } from '../../actions/question'

const AskQuestion = () => {
    const [ questionTitle, setQuestionTitle ] = useState('')
    const [ questionBody, setQuestionBody ] = useState('')
    const [ questionTags, setQuestionTags ] = useState('')

    const dispatch= useDispatch()
    const User= useSelector((state) => (state.currentUserReducer))
    const navigate= useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(User){
            if(questionTitle && questionBody && questionTags){
                dispatch(askQuestion({ questionTitle, questionBody, questionTags, userPosted: User.result.name, userId: User?.result?._id }, navigate))
            }
            else alert("Please enter all the fields")
        }
        else alert("Login to ask question");
        // console.log({ questionTitle, questionBody, questionTags})
        // dispatch(askQuestion({ questionTitle, questionBody, questionTags, userPosted: User.result.name }, navigate))
    }
    const handleEnter= (e) => {
        if(e.key==='Enter'){
            setQuestionBody(questionBody + '\n')
        }
    }
  
  return (
       
    <div className='ask-question'>
        <div className='ask-ques-container'>
            <h1>Ask Public Question</h1>
            <form onSubmit={handleSubmit}>
                <div className='ask-form-container'>
                    <label htmlFor='ask-ques-title'>
                        <h4>Title</h4>
                        <p>Be specific and imagine that you're asking a question to another person</p>
                        <input type='text'  id='ask-ques-title' onChange={(e) => {setQuestionTitle(e.target.value)}} placeholder='e.g. Is there Python function to print number of arrays in descending order ?'/>
                    </label>
                    <label htmlFor='ask-ques-body'>
                        <h4>Body</h4>
                        <p>Include all information required for someone to need to answer the question</p>
                        <textarea name='' id='ask-ques-body'onChange={(e) => {setQuestionBody(e.target.value)}} cols='30'rows='10' onKeyPress={handleEnter}></textarea>
                    </label>
                    <label htmlFor='ask-ques-tags'>
                        <h4>Tags</h4>
                        <p>Add atleast 1 tag to describe what the question is about </p>
                        <input type='text'  id='ask-ques-tags' onChange={(e) => {setQuestionTags(e.target.value.split(' '))}} placeholder='e.g.(Python,XML,R)' />
                    </label>
                </div>
                <input type='submit' value='Review your question' className='review-btn'/>
            </form>

        </div>

    </div>
      
  )
}

export default AskQuestion