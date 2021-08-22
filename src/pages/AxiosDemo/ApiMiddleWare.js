import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { TOKEN_CYBERSOFT } from "../../util/setting";

export default function ApiMiddleWare(props) {
  const { mangPhim } = useSelector((state) => state.PhimReducer);

  const dispatch = useDispatch();

  useEffect(() => {

    //2 loại action trong redux
    //Loai1: {type:'Type_name',data:{}}
    //Loại 2: action là function

    const action = () => {

    }
    /**Trong trường hợp action là function thì, thì redux
     * sẽ đợi function thực thi xong => gửi dữ liệu đi
     * 
     */
    dispatch(action)

    // let promise = axios({
    //   url: "http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    //   method: "GET",
    //   headers: {
    //     TokenCybersoft: TOKEN_CYBERSOFT,
    //   },
    // });

    // promise.then((result) => {
    //   console.log("result", result.data);
    //   //Sau khi call api thành công lấy dữ liệu api set vao state mangPhim
    //   dispatch({
    //     type: "LAY_DANH_SACH_PHIM",
    //     mangPhim: result.data.content,
    //   });
    // });

    // promise.catch((error) => {
    //   console.log("error", error.reponse.data);
    // });

  }, []);

  const renderPhim = () => {
    return mangPhim.map((phim, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card">
            <img src={phim.hinhAnh} />
            <div className="card-body">
              <p>{phim.tenPhim}</p>
              <p>{phim.Mota}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <h3 className="text-center">Danh sách phim</h3>

      <div className="row">{renderPhim()}</div>
    </div>
  );
}
