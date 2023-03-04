import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {
  // var questionsList=[{
  //   _id:1,
  //   upVotes:3,
  //   downVotes:2,
  //   noOfAnswers:2,
  //   questionTitle:"What is a function?",
  //   questionBody:"It meant to be?",
  //   questionTags: ["java", "node js", "python", "mongodb"],
  //   userPosted:"Sahil",
  //   userId:1,
  //   askedOn:'Jan 2',
  //   answer:[{
  //       answerBody:"Answer",
  //       userAnswered:"Upadhyay",
  //       answeredOn:"Jan 3",
  //       userId:2,
  //   }]

  // },{
  //   _id:2,
  //   upVotes:3,
  //   downVotes:1,
  //   noOfAnswers:0,
  //   questionTitle:"What is a function?",
  //   questionBody:"It meant to be?",
  //   questionTags: ["R", "python", "javascript"],
  //   userPosted:"Sahil",
  //   userId:1,
  //   askedOn:'Jan 2',
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:"Upadhyay",
  //     answeredOn:"Jan 3",
  //     userId:2,
  // }]

  // },{
  //   _id:3,
  //   upVotes:3,
  //   downVotes:1,
  //   noOfAnswers:0,
  //   questionTitle:"What is a function?",
  //   questionBody:"It meant to be?",
  //   questionTags: ["R", "java", "javascript"],
  //   userPosted:"Sahil",
  //   userId:1,
  //   askedOn:'Jan 2',
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:"Upadhyay",
  //     answeredOn:"Jan 3",
  //     userId:2,
  // }]

  // }]

  const location=useLocation()
  const user=1;
  const navigate=useNavigate();

  const questionsList= useSelector(state => state.questionsReducer)

  const checkAuth = () => {
      if(user === null){
        alert("Login or Signup to ask questions")
        navigate('/Auth')
      }else{
        navigate('/AskQuestion')
      }
  }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList.data === null ?
          <h1>Loading...</h1> :
          <>
              <p> { questionsList.data.length } questions</p>
              <QuestionList questionsList={questionsList.data}/>
          </>

        }
      </div>
      
    </div>
  )
}

export default HomeMainbar
