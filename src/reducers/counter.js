const initalState = {
    value: 0
}

export default (state = initalState, action) => {
    const type = action.type

    if(type === 'INCREMENT'){
        return {
            ...state,
            value: state.value + 1 
        }
    }else if(type === 'DECREMENT'){
        return {
            ...state,
            value: state.value -1 
        }
    }else {
        return state
    }


    // switch(type){
    //     case 'INCREMENT':
    //         return {
    //             ...state,
    //             value: state.value++
    //         }
    //     case 'DECREMENT':
    //         return {
    //             ...state,
    //             value: state.value--
    //         }
    //     default:
    //         return state
    // }
}