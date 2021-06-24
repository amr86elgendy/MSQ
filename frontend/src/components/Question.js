import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { shuffle } from '../functions';
import FinalModal from './FinalModal';

const Question = () => {
  const dispatch = useDispatch();
  const { answers, correctAnswer, loading, queNum, questions, showModal } =
    useSelector((state) => state);

  useEffect(() => {
    // Load All Questions
    const loadQuestions = async () => {
      const { data } = await axios.get('/api/questions');
      // Set Five Question Randomly
      dispatch({ type: 'SET_QUESTIONS', payload: shuffle(data).splice(0, 5) });
    };
    loadQuestions();
  }, [dispatch]);

  useEffect(() => {
    if (questions.length) {
      // Set Answers Randomly
      dispatch({
        type: 'SET_ANSWERS',
        payload: shuffle([
          ...questions[queNum].options,
          questions[queNum].correctAnswer,
        ]),
      });
      dispatch({
        type: 'SET_CORRECT_ANSWER',
        payload: questions[queNum].correctAnswer,
      });
    }
  }, [questions, queNum, dispatch]);

  function nextQuestion() {
    if (queNum === questions.length - 1) {
      return dispatch({ type: 'SHOW_MODAL' });
    }
    dispatch({ type: 'NEXT_QUESTION' });
  }

  function checkAnswer(value) {
    if (value) {
      dispatch({ type: 'CORRECT' });
    }
    nextQuestion();
  }

  if (loading) return <h1 className='text-center mt-20'>Loading...</h1>;
  return (
    <>
      <FinalModal show={showModal} />
      <Card className='text-center mt-5'>
        <Card.Header>M C Q</Card.Header>
        <Card.Body>
          <article className='container'>
            <h2>
              {questions.length &&
                `Question ${queNum + 1} : ${questions[queNum].title}`}
            </h2>
            <div>
              {answers.length &&
                answers.map((ans, i) => (
                  <Button
                    block
                    key={i}
                    className='my-3'
                    onClick={() => checkAnswer(correctAnswer === ans)}
                  >
                    {ans}
                  </Button>
                ))}
            </div>
          </article>
          <Button variant='primary' onClick={nextQuestion}>
            Next Question
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Question;
