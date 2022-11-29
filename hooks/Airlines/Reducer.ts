export const initialState = {//we can give any name
    loading: true,// for loading
    error: '',//in case error idre we can pass here
    post: []//action.data add or assign madake
}
export const reducer = (state = initialState, action) => {//just we are creating a function.
    switch (action.type) {//it is just as switch case ,where the dispatched data will 
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: [],
                error: action.error,
            }
        default:
            return state;
    }
}