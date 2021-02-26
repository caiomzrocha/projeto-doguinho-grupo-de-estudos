import { combineReducer } from 'redux';
import dogReducer from './dogReducer';

const rootReducer = combineReducer( { dogReducer } );

export default rootReducer;
