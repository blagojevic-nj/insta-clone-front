import MyRouter from "./router/MyRouter";
import "./helpers/interceptors/TokenInterceptor"

function App() {
  return (
    <MyRouter/>
  );
}

export default App;
