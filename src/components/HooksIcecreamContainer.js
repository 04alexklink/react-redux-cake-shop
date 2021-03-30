import {useSelector, useDispatch} from 'react-redux'
import {buyIcecream} from '../redux'

const HooksIcecreamContainer = () => {
    const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams)
    const dispatch = useDispatch()
    return (
        <div>
          <h2>Number of icecreams: {numOfIcecreams}</h2>
          <button onClick={() => dispatch(buyIcecream())}>Buy an icecream</button>
        </div>
    )
}

export default HooksIcecreamContainer
