import {BUY_CAKE} from './cakeTypes'


// action object if were not going to use action creator function to create it for me
// const action = {
//   type: BUY_CAKE
// }

//action creator
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number
  }
}