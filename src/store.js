import { createStore} from 'redux';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';
export const history = createBrowserHistory();

const initialState = {};
const store = createStore(
  rootReducer,
  initialState,  
);
export default store;
