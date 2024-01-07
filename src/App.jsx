import Count from './components/Count';
import {useDispatch} from 'react-redux';
function App(){
    const dispatch=useDispatch();
    return(
        <div>
            {/* <h1>ji</h1> */}
            <button onClick={(e)=>dispatch({type:"add"})}>add</button>
            <Count/>
            <button onClick={(e)=>dispatch({type:"dec"})}>dec</button>
        </div>
    )
}
export default App;