import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_NAME':
      return { ...state, username: action.payload };
    case 'SET_QUESTIONS':
      return { ...state, questions: action.payload, loading: false };
    case 'SET_ANSWERS':
      return { ...state, answers: action.payload };
    case 'SET_CORRECT_ANSWER':
      return { ...state, correctAnswer: action.payload };
    case 'CORRECT':
      return { ...state, score: state.score + 1 };
    case 'NEXT_QUESTION':
      return {
        ...state,
        queNum:
          state.queNum === state.questions.length - 1 ? 0 : state.queNum + 1,
      };
    case 'SHOW_MODAL':
      return { ...state, showModal: true };
    default:
      return state;
  }
};

const initialState = {
  username: '',
  loading: true,
  queNum: 0,
  questions: [],
  answers: [],
  correctAnswer: null,
  total: 5,
  score: 0,
  showModal: false,
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
