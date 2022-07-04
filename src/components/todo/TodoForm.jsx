import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/features/todoRedux";
import { Toast, ToastContainer } from "react-bootstrap";
const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState(false);
  const dispatch = useDispatch();

  const addTodo = (task) => {
    dispatch(addTask(task));
  };
  const handleSubmission = (e) => {
    e.preventDefault();
    if (title != "" && content != "") {
      addTodo({ title, content });
      setTitle("");
      setContent("");
    } else {
      setMessage(!message);
    }
  };

  return (
    <div className="row container mx-auto">
      <figure className="col-6">
        <img className="img-fluid" src="./assets/note.png" alt="" />
      </figure>
      <div className="m-auto col-6">
        <form action="" className="border border-3" onSubmit={handleSubmission}>
          <div className="m-3">
            <div className="form-group row">
              <h3 className="mb-4">Add todo task</h3>
              <label for="title" className="col-sm-3 col-form-label">
                <h5>Title: </h5>
              </label>
              <div className="col-8">
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                  id="text"
                  placeholder="Task title"
                />
              </div>
            </div>
          </div>
          <div className="m-3">
            <div className="form-group row">
              <label for="content" className="col-sm-3 col-form-label">
                <h5>Content: </h5>
              </label>
              <div className="col-8">
                <input
                  type="text"
                  name="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="form-control"
                  id="text"
                  aria-describedby="emailHelp"
                  placeholder="Task content"
                />
              </div>
            </div>
          </div>

          <button className="btn btn-success btn-md w-25 mb-3" type="submit">
            Add Todo
          </button>
          <ToastContainer className="p-3" position="top-end">
            <Toast
              bg="danger"
              show={message}
              onClose={() => {
                setMessage(!message);
              }}
            >
              <Toast.Header closeButton={true}>
                <strong>Warning</strong>
              </Toast.Header>

              <Toast.Body className="text-white">
                Please add title and content!
              </Toast.Body>
            </Toast>
          </ToastContainer>
        </form>
      </div>

      {/* <h3 className="text-muted mb-4">Todo App</h3>
      <form onSubmit={handleSubmission}>
        Title <br />
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        Content <br />
        <textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <button className="my-4 btn btn-primary btn-sm px-4" type="submit">
          Add Todo
        </button>
      </form> */}
    </div>
  );
};

export default TodoForm;
