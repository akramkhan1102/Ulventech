import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';

const auth = {
    actions,
    reducer,
    saga
}

export default auth;