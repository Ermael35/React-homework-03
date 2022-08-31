// import "./App.css";
// import Router from "./shared/Router";

// function App() {
//   return (
//     <>
//       <Router />
//     </>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "./shared/Router";
import { __getTodos } from "./redux/modules/todo";

const App = () => {
  return (
    <>
      <Router />
    </>
  );
};

export default App;
