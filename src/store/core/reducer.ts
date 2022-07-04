import { ICoreState } from '~/models';
import * as actions from './actions';

export const initialState: ICoreState = {
  loading: false
};

const reducer =  (
  state: ICoreState = initialState,
  action: actions.Action,
): ICoreState => {
  switch (action.type) {
    
    case actions.ActionTypes.CORE_LOADING: {
        return {
          ...state,
          loading: action.payload
        };
    }
    default:
      return state;
  }
};
export default reducer;
