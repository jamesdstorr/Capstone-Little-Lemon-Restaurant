const availableTimesReducer = (state, action) => {
    switch (action.type) {
      case 'setAvailableTimes':
        return { ...state, date: action.payload.date, availableTimes: action.payload.availableTimes };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };

export default availableTimesReducer;