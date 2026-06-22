// import { startTransition, StrictMode } from "react";
// import { hydrateRoot } from "react-dom/client";
// import { HydratedRouter } from "react-router/dom";
// import "../index.css";
// import { Provider } from "react-redux";
// import { store } from "../app/store";

// startTransition(() => {
//   hydrateRoot(
//     document,
//     <Provider store={store}>
//       <StrictMode>
//         <HydratedRouter />
//       </StrictMode>
//     </Provider>
//   );
// });

// import { hydrateRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import "../index.css";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { HydratedRouter } from "react-router/dom";

// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

ReactDOM.hydrateRoot(
  document,
  <Provider store={store}>
    <HydratedRouter />
  </Provider>
);
