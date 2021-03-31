import {connect} from 'react-redux'
import { buyIcecream, buyCake } from '../redux'

const ItemContainer = (props) => {
    return (
        <div>
          <h2>Item Quantity: {props.item}</h2>
          <button onClick={() => props.buyItem()}>Buy Item</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake ? state.cake.numOfCakes : state.icecream.numOfIcecreams
  return {
    item: itemState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const functionToDispatch = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIcecream())
  return {
    buyItem : functionToDispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
