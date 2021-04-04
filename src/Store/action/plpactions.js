import { COUNT } from '../types'

export const plpCount = (data) => {
    // This action type is used to calculate the product count
    return {
        type: COUNT,
        payload: data
    }

}