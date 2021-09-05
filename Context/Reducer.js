const Reducer = (state,action)=>{
    const act = {
        'ADD':()=>{return {count:state.count+1}},
        // 'ADD_NOTE':()=>{return state.notes,action.payload}
        // 'DEL':()=>{return count-1}

    }
    return act[action.type]();
}
export default Reducer; 