const CounterReducer = (state, action)=> {
    switch (action) {
        case 'Increment':
            return state + 1
    }
}

export default CounterReducer;