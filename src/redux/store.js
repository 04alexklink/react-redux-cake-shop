import {createStore} from 'redux'
const cakeReducer = require('./cakes/cakeReducer')

const store = createStore(cakeReducer)

export default store