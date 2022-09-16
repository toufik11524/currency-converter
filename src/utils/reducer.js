const reducer = (state, action) => {
    if (action.type === 'TAKA_TO_DOLLAR') {
        console.log("taka reducer", action.payload.currency);
        return {
            currencyTaka: action.payload.currency,
            currencyDollar: (action.payload.currency * 0.0096).toFixed(4),

        };
    }

    if (action.type === 'DOLLAR_TO_TAKA') {
        console.log("dollar reducer", action.payload.currency);
        return {
            currencyDollar: action.payload.currency,
            currencyTaka: (action.payload.currency * 104.21).toFixed(4)
        };
    }

    return state;
} 

export default reducer;