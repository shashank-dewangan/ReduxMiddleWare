const initialUser = {
  name: "",
  age: 0
};
const userreducer = (state = initialUser, action) => {
  switch (action.type) {
    case "DEFAULTUSER":
      return { ...state, name: "ABC", age: 30 };
    default:
      return state;
  }
};

export default userreducer;
