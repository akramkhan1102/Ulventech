
export enum ActionTypes {
    CORE_LOADING = 'CORE_LOADING',
}

export interface IActionLoading {
    type: ActionTypes.CORE_LOADING,
    payload: boolean
}

export function setLoading (payload: boolean): IActionLoading {
    return {
        type: ActionTypes.CORE_LOADING,
        payload
    }
}


export type Action =
IActionLoading