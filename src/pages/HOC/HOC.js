import React, { useState } from "react";
import Modal from "./Modal";

import Login from "../Login/Login";
import Register from "../Register/Register";
import { useDispatch } from "react-redux";

export default function HOC(props) {
  // const [component, setComponent] = useState(<Login/>);

  const dispatch = useDispatch();

  return (
    <div>
      <button
        data-toggle="modal"
        data-target="#modelId"
        className="btn btn-danger mr-2"
        onClick={() => {
          dispatch({
            type: "OPEN_LOGIN",
            Component: <Login />,
            handleSubmit: () => {
              alert("Xử lý đăng nhập");
            },
          });
        }}
      >
        Login
      </button>
      <button
        data-toggle="modal"
        data-target="#modelId"
        className="btn btn-success"
        onClick={() => {}}
      >
        Register
      </button>

      <Modal />
    </div>
  );
}
