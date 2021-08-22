import logo from "./logo.svg";
import "./App.css";
import Headers from "./components/HomePage/Headers"

//Cấu hình routing
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import UseStateDemo from "./pages/Hooks/UseStateDemo/UseStateDemo";
import UseEffectDemo from "./pages/Hooks/UseEffectDemo/UseEffectDemo";
// import ReduxHookDemo from "./pages/Hooks/ReduxHookDemo/ReduxHookDemo";
import AxiosDemo from './pages/AxiosDemo/AxiosDemo';
import AxiosDemoRFC from './pages/AxiosDemo/AxiosDemoRFC';
import ApiMiddleWare from "./pages/AxiosDemo/ApiMiddleWare";
import Detail from "./pages/Detail/Detail";
import HOC from "./pages/HOC/HOC";
import {HomeTemplate } from './templates/HomeTemplate'
import { UserTemplate } from "./templates/UserTemplate";
import AntDemo from "./pages/AntDemo/AntDemo";
import { AdminTemplate } from "./templates/AdminTemplate";
function App() {
  return (
    <BrowserRouter>
    <Headers />
      <Switch>
        <HomeTemplate path="/home" component={Home} />
          <HomeTemplate exact path="/home" component={Home} />
          <UserTemplate exact path="/login" component={Login} />
          <HomeTemplate exact path="/about" component={About} />
          <UserTemplate exact path="/register" component={Register} />
          {/* <HomeTemplate exact path="/antd" component={AntDemo} /> */}
          <HomeTemplate exact path="/usestate" component={UseStateDemo} />
          <HomeTemplate exact path="/useeffect" component={UseEffectDemo} />
          {/* <Route exact path="/reduxhook" component={ReduxHookDemo} /> */}
          <HomeTemplate exact path="/ajaxrcc" component={AxiosDemo} />
          <HomeTemplate exact path="/ajaxrfc" component={AxiosDemoRFC} />
          <HomeTemplate exact path="/apimiddleware" component={ApiMiddleWare} />
          <HomeTemplate exact path="/detail/:id" component={Detail} />
          <HomeTemplate exact path="/" component={Home} />
          <HomeTemplate exact path="/hoc" component={HOC} />

          <AdminTemplate path="/antd" component={AntDemo} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
