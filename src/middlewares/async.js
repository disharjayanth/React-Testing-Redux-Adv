export default ({ dispatch }) => ( next ) => ( action ) => {
    //check to see if a action has promise on it's payload property
    //If it does, then wait for it to resolve
    //If it doesn't, then send the action to next middleware
    if(!action.payload || !action.payload.then) {
        return next(action)
    }

    //We want to wait for promise to resolve
    //(get its data) and then create a new action
    //with that data and dispatch it

    action.payload.then(function(response) {
        const newAction = { ...action, payload: response }
        return dispatch(newAction)
    })
}
    
