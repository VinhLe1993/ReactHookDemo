import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

export default function ReduxHookDemo(props) {
    const [userComment, setUserComment] = useState({
        name: "",
        comment: "",
    });

    //useDispatch giống với this.props.dispatch bên rcc
    const dispatch = useDispatch();

    console.log('userComment', userComment);
    //useSelector là hook tuong đương với hàm mapStateToProps
    const { arrComment } = useSelector((state) => state.FakeBookReducer);

    const handleChangeInput = (event) => {
        let { value, name } = event.target;
        setUserComment({
            ...userComment,
            [name]: value
        })
    }


    const renderComment = () => {
        return arrComment.map((comment, index) => {
            return (
                <div className="row" key={index}>
                    <div className="col-1">
                        <img src={comment.image} width="50" height="50" />
                    </div>
                    <div className="col-10">
                        <h3 className="text-danger">{comment.name}</h3>
                        <p>{comment.content}</p>
                    </div>
                </div>
            );
        });
    };

    const handleSubmit = (event) => {
        //Chặn sự kiện submit browser
        event.preventDefault();
        const action = {
            type: 'ADD_COMMENT',
            userComment: { ...userComment, image:`https://i.pravatar.cc/50?u=${userComment.name}`}
        }
        dispatch(action)
    }



    return (
        <div className="container">
            <h3>Fakebook app</h3>
            <div className="card">
                <div className="card-header">{renderComment()}</div>
            </div>
            <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-group">
                    <p>Name</p>
                    <input className="form-control" name="name" onChange={handleChangeInput} />
                </div>
                <div className="form-group">
                    <p>Content</p>
                    <input className="form-control" name="content" onChange={handleChangeInput} />
                </div>
                <div className="form-group">
                    <button className="btn btn-outline-success" type="submit">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         arrComment: state.FakeBookReducer.arrComment
//     }
// }

// export default connect(mapStateToProps) (ReduxHookDemo)
