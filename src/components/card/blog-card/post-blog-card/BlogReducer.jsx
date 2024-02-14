const BlogReducer = (state, action) => {
    switch (action.type) {
      case "SET_LOADING":
        return {
          ...state,
          isLoading: true,
        };
  
      case "SET_API_DATA":
        const featureData = Array.isArray(action.payload) && action.payload.filter
            ? action.payload.filter((curElem) => curElem.status === 0)
            : [];
            
        return {
          ...state,
          isLoading: false,
          product: action.payload,
          featureProducts: featureData,
        };
  
      case "API_ERROR":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
  
      default:
        return state;
    }
  };
  
  export default BlogReducer;
  