import React, { useState } from "react";

export default function UseStateDemo(props) {

    const [like, setLike] = useState(1)
    const [imgCar, setImgCar] = useState ('./img/CarBasic/products/red-car.jpg')
//   const [state, setState] = useState({ like: 1 }); // => [pt1, pt2]

    const changeColor = (color) => {
        setImgCar(`./img/CarBasic/products/${color}-car.jpg`);
    }

  return (
    <div className="container">
      <h3>Demo useState</h3>
      <div className="card w-25">
        <img src="https://picsum.photos/200/200" className="w-100" />
        <div className="card-body">
          <p>{like} Like</p>
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              setLike(like+1)
            }}
          >
            Like
          </button>
        </div>
      </div>
      <hr />
      <h3>Bài tập chọn màu xe</h3>
      <div className="col-6">
            <img src={imgCar} className="w-100" />
      </div>
      <div className="col-6">
            <button className="bg-dark text-white col-3" onClick={()=>{
                changeColor('steel')
            }}>Steel</button>
            <button className="bg-dark text-white col-3" onClick={()=>{
                changeColor('black')
            }}>Black</button>
            <button className="bg-dark text-white col-3" onClick={()=>{
                changeColor('red')
            }}>Red</button>
            <button className="bg-dark text-white col-3" onClick={()=>{
                changeColor('silver')
            }}>Silver</button>
      </div>
    </div>
  );
}
