import { combineReducers } from 'redux';
import AuthReducer from './auth-reducer';
import ModalReducer from './modal-reducer';
import ProfileReducer from './profile-reducer';
import StaticReducer from './static-reducer';
import CategoryReducer from './category-reducer';

const appReducer = combineReducers({
  AuthReducer: AuthReducer,
  ModalReducer: ModalReducer,
  ProfileReducer: ProfileReducer,
  StaticReducer: StaticReducer,
  CategoryReducer: CategoryReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
