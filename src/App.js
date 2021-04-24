import React, { useState } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
  }
}

const initialUser = {
  name: "Manoj",
  age: 23,
  profession: "Javascript Developer"
}

function userReducer(state, action) {
  switch (action.type) {
    case "update-age":
      return { ...state, age: action.age };
    case "update-name":
      return { ...state, name: action.name };
  }
}

// disaptch => reducer => state => component

function useReducer(reducer, initState) {
  const [state, setState] = useState(initState)

  const dispatch = (action) => {
    const newState = reducer(state, action)

    // update the state
    setState(newState)
  }

  return [state, dispatch];
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useReducer(userReducer, initialUser)

  return (
    <React.Fragment>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <h1>Name: {user.name}, Age: {user.age}</h1>
      <button onClick={() => setUser({ type: "update-age", age: 25 })}>+</button>
      <button onClick={() => setUser({ type: "update-name", name: "Manoj Singh Negi"  })}>-</button>
    </React.Fragment>
  );
}

export default App;
