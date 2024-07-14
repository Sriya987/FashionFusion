import React, { useState } from 'react';
import quizData from './Quizdata';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = selectedOption.answer;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers(Array(quizData.length).fill(null));
    setShowResult(false);
  };

  return (
    <div className="quiz-container" style={styles.container}>
      {!showResult && (
        <>
          <h2 style={styles.heading}>Quiz</h2>
          <p style={styles.questionCount}>
            Question {currentQuestion + 1} of {quizData.length}
          </p>
          <h3 style={styles.question}>{quizData[currentQuestion].question}</h3>
          <ul style={styles.options}>
            {quizData[currentQuestion].options.map((option, index) => (
              <li key={index} style={styles.option}>
                <label style={styles.label}>
                  <input
                    type="radio"
                    value={option.answer}
                    onChange={() => handleAnswerClick(option)}
                    checked={userAnswers[currentQuestion] === option.answer}
                    style={styles.radio}
                  />
                  {option.answer}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={handleSubmit} style={styles.button}>Next</button>
        </>
      )}
      {showResult && (
        <>
          <h2 style={styles.heading}>Results</h2>
          <ul style={styles.resultList}>
            {quizData.map((question, index) => (
              <li key={index} style={styles.resultItem}>
                <strong>{question.question}</strong>
                <br />
                Your Answer: {userAnswers[index]}
                <br />
                Correct Answer: {question.options.find(opt => opt.isCorrect)?.answer}
              </li>
            ))}
          </ul>
          <button onClick={restartQuiz} style={styles.button}>Restart Quiz</button>
        </>
      )}
    </div>
  );
};

// Internal styling using JavaScript objects
const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    background: '#f8f8f860',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #ddd',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
    fontSize: '2rem',
    textTransform: 'uppercase',
    borderBottom: '3px solid #333',
    paddingBottom: '10px',
  },
  questionCount: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '10px',
  },
  question: {
    marginTop: '20px',
    marginBottom: '30px',
    fontSize: '1.2rem',
    color: '#555',
  },
  options: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '20px',
  },
  option: {
    marginBottom: '10px',
  },
  label: {
    cursor: 'pointer',
    fontSize: '1.1rem',
    color: '#444',
  },
  radio: {
    marginRight: '10px',
    verticalAlign: 'middle',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    textTransform: 'uppercase',
  },
  resultList: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '30px',
  },
  resultItem: {
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    borderLeft: '5px solid #555',
  },
};

export default Quiz;
