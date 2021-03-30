import {connect} from 'react-redux'
import {useState} from 'react'
import { buyCake } from '../redux'

const NewCakeContainer = ({numOfCakes, buyCake}) => {
    const [number, setNumber] = useState(1)
    return (
        <div>
        <h1>Number of cakes: {numOfCakes} </h1>
        <input type='text' placeholder='Add amount to buy' value={number} onChange={(e) => setNumber(e.target.value)}></input>
        <button onClick={() => {buyCake(number)}}>Confirm purchase</button>
        </div>
    )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: (number) => dispatch(buyCake(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
