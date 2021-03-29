import {BUY_CAKE} from './cakeActions'


// action object if were not going to use action creator function to create it for me
// const action = {
//   type: BUY_CAKE
// }

//action creator
export const buyCakes = () => {
  return {
    type: BUY_CAKE
  }
}