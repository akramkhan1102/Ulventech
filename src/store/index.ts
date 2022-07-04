import auth from "./auth";
import configureStore from './store';
import core from "./core";

const store = {
    auth,
    core
}




export const configure = configureStore;
export default store;

