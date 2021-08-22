import { Route } from "react-router-dom";
import Header from "../components/HomePage/Headers";
//Fragment giống thẻ div mà không hiển thị chỉ dùng để bao bọc trang
import { Fragment } from "react";

export const UserTemplate = (props) => {
  return (
    <Route exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <Fragment>
           <div className="d-flex">
               <div className="w-50">
                <img className="w-100 vh-100" src="https://picsum.photos/2000/2000" alt="..." />
               </div>
               <div>
                    <props.component {...propsRoute} />
               </div>
           </div>
          </Fragment>
        );
      }}
    />
  );
};
