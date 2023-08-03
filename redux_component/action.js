import {STATE_NAME} from './constants'

export const StateName=(item)=>{
    return{
        type:STATE_NAME,
        data:item
    }
}