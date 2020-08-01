import React from "react";
import Homepage from "./Homepage"
import {Provider} from "react-redux"
import store from "../store/index"

function App() {

  return (
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
}

export default App;
