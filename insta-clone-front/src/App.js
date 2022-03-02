import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

import MyRouter from "./router/MyRouter";
import "./helpers/interceptors/TokenInterceptor"

import * as authHelper from "./helpers/AuthHelper"
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (<>
    {authHelper.isAuthenticated() && <Navbar/>}
    <MyRouter/>
  </>
  );
}

export default App;
