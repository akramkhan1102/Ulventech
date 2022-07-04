import { IAuthState } from '~/models';
import * as actions from './actions';

export const initialState: IAuthState = {
  token: '',
  form: [],
};

const reducer =  (
  state: IAuthState = initialState,
  action: actions.Action,
): IAuthState => {
  switch (action.type) {
    
    case actions.ActionTypes.AUTH_FORM_SET: {
        return {
          ...state,
          form: action.payload
        };
    }
    default:
      return state;
  }
};
export default reducer;
