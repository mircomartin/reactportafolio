import { LOGIN, LOGOUT } from './types'

export const authReducer = ( state = {}, action ) => {
    switch (action.type) {
        case LOGIN:
            return {
                name: action.payload.name,
                uid: action.payload.uid,
            }
        case LOGOUT:
            return {
                
            }
        default:
            return state
    }
}