import { useState } from 'react'
import { resultInitialState } from '../../constants'
import './Quiz.scss'
import AnswerTimer from '../AnswerTimer/AnswerTimer'
import Result from '../Result/Result'

//create simple functional components
const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answerIdx, setAnswerIdx] = useState(null)
  const [answer, setAnswer] = useState(null)
  const [result, setResult] = useState(resultInitialState)
  //create a variable to tell us where do we want to show the result or not
  const [showResult, setShowResult] = useState(false)
  const [showAnswerTimer, setShowAnswerTimer] = useState(true)
  const [inputAnswer, setInputAnswer] = useState()

  const { question, choices, correctAnswer, type } = questions[currentQuestion]

  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index)
    if (answer === correctAnswer) {
      setAnswer(true)
    } else {
      setAnswer(false)
    }
  }

  const onClickNext = (finalAnswer) => {
    setAnswerIdx(null)
    setShowAnswerTimer(false)
    setInputAnswer('')
    setResult((prev) =>
      finalAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    )

    //update the score and move to next question
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setCurrentQuestion(0)
      setShowResult(true)
    }

    setTimeout(() => {
      setShowAnswerTimer(true)
    })
  }

  const onTryAgain = () => {
    setResult(resultInitialState)
    setShowResult(false)
  }

  const handleTimeUp = () => {
    setAnswer(false)
    onClickNext(false)
  }

  const handleInputChange = (evt) => {
    setInputAnswer(evt.target.value)

    //check for correctness
    if (evt.target.value === correctAnswer) {
      setAnswer(true)
    } else {
      setAnswer(false)
    }
  }

  const getAnswerUI = () => {
    if (type === 'FIB')
      return <input value={inputAnswer} onChange={handleInputChange} />

    return (
      <ul>
        {choices &&
          choices.map((answer, index) => (
            <li
              onClick={() => onAnswerClick(answer, index)}
              key={answer}
              className={answerIdx === index ? 'selected-answer' : null}
            >
              {answer}
            </li>
          ))}
      </ul>
    )
  }

  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          {showAnswerTimer && (
            <AnswerTimer duration={15} onTimeUp={handleTimeUp} />
          )}
          <span className="active-question-no">{currentQuestion + 1}</span>
          <span className="total-question">/{questions.length}</span>
          <h2>{question}</h2>
          {getAnswerUI()}
          <div className="footer">
            <button
              onClick={() => onClickNext(answer)}
              disabled={answerIdx === null && !inputAnswer}
            >
              {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </>
      ) : (
        <Result
          result={result}
          onTryAgain={onTryAgain}
          totalQuestions={questions.length}
        />
      )}
    </div>
  )
}

export default Quiz
