import React, { useReducer } from 'react';
import counterReducer from './CounterReducer';

const Child2 = () => {
    
    let [state, dispatch] = useReducer(counterReducer, 10)
    console.log(state)

    return(
        <div>
            <h3>Value of Reducer state is: {state}</h3>
            <button onClick ={()=> dispatch('Increment')}>Increment Reducer</button>
        </div>
    )

}

export default Child2;