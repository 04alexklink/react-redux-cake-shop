import {buyCake} from '../redux'
import {connect} from 'react-redux'

const CakeContainer = ({numOfCakes, buyCake}) => {
    return (
        <div>
          <h1>Number of Cakes: {numOfCakes}</h1>
          <button onClick={() => buyCake()}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)

