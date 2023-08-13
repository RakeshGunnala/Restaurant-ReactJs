const initialState = {
    filter_name: "All Items"
  };
  
  const filterreducer = (state = initialState, action) => {
    switch (action.type) {
      case "SETFILTER":
        return {
          ...state,
          filter_name: action.payload
        };
      case "RESETFILTER":
        return {
          ...state,
          filter_name: "All Items"
        };
      default:
        return state;
    }
  };
  
  export default filterreducer;
  