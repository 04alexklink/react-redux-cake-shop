import {useSelector, useDispatch} from 'react-redux'
import {buyCake} from '../redux/cakes/cakeActions'

const HooksCakeContainer = () => {
    const dispatch = useDispatch()
    const numOfCakes = useSelector(state => state.numOfCakes)
    return (
        <div>
          <h2>Number of cakes: {numOfCakes}</h2>
          <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
