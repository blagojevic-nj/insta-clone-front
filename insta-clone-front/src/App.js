import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

import MyRouter from "./router/MyRouter";
import "./helpers/interceptors/TokenInterceptor"

function App() {
  return (<>
    <MyRouter/>
  </>
  );
}

export default App;
