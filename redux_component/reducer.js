import {STATE_NAME} from './constants'
import {StateName} from './action'
import { State } from 'react-native-gesture-handler'

const initialState=[]
export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case STATE_NAME:
            return[
                action.data
            ]

        default :
            return "Andhra Pradesh"
    }
}