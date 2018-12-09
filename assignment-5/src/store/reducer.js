import * as actions from "./actions";

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_PERSON:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: "Fvaco",
        age: Math.floor(Math.random() * 40)
      };

      return {
        ...state,
        persons: state.persons.concat(newPerson)
      };
    case actions.DELETE_PERSON:
      return {
        persons: state.persons.filter(person => person.id !== action.payload.personID)
      };

    default:
      return state;
  }
};

export default reducer;
