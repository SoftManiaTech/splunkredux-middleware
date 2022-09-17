const splunkReduxMiddleware = customProps => (store) => (next) => (action) => {
    console.log("This is inside splunkReduxMiddleware")
    console.log(customProps, store, next, action)
}

export default splunkReduxMiddleware