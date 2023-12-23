import React from "react";

import { Provider } from "react-redux";

import Navigation from "./src/navigation/root";
import { store } from "./src/store/store";

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
