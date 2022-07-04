import { IAuthState, ICoreState } from './index'

export default interface IRootState {
    auth: IAuthState,
    core: ICoreState
}