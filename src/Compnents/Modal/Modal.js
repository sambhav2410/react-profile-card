import "./Modal.css";
import React, { useState } from "react";
import { useUserData } from "../../context/userContext";

export const Modal = ({ user, setShowModal }) => {
  const [currUser, setCurrUser] = useState({ ...user });
  const { setUserData } = useUserData();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCurrUser((pre_user) => ({ ...pre_user, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      type: "EDIT",
      payload: { ...currUser },
    });
    setShowModal((pre_state) => !pre_state);
  };
  return (
    <div>
      <div
        onClick={() => {
          setShowModal((pre_state) => !pre_state);
        }}
        className="modal_background"
      ></div>
      <div className="modal_input">
        <div className="top_header">
          <p>Basic Model</p>
          <p
            onClick={(e) => {
              e.stopPropagation();
              setShowModal((pre_state) => !pre_state);
            }}
            className="cross"
          >
            &times;
          </p>
        </div>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-input flex">
            <p>
              <span className="red">*</span>Name:
            </p>
            <input
              onChange={handleChange}
              value={currUser.name}
              name="name"
              className="input"
              required
            />
          </div>
          <div className="form-input flex">
            <p>
              <span className="red">*</span>Email:
            </p>
            <input
              onChange={handleChange}
              value={currUser.email}
              name="email"
              className="input"
              required
              type="email"
            />
          </div>
          <div className="form-input flex">
            <p>
              <span className="red">*</span>Phone:
            </p>
            <input
              onChange={handleChange}
              value={currUser.phone}
              name="phone"
              className="input"
              required
            />
          </div>
          <div className="form-input flex">
            <p>
              <span className="red">*</span>Website:
            </p>
            <input
              onChange={handleChange}
              value={currUser.website}
              name="website"
              className="input"
              required
            />
          </div>
          <div className="modal-button flex jst-end">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowModal((pre_state) => !pre_state);
              }}
            >
              Cancel
            </button>
            <button type="submit" className="submit">
              OK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
