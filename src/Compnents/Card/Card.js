import "./Card.css";
import { useUserData } from "../../context/userContext";
import React, { useState } from "react";
import { Modal } from "../Modal/Modal";

export const Card = ({ user }) => {
  const [show_modal, setShowModal] = useState(false);
  const { setUserData } = useUserData();
  return (
    <div className="card">
      {show_modal && <Modal user={user} setShowModal={setShowModal} />}
      <div className="img-bg">
        <img src={user.imgSrc} alt="avatar" />
      </div>
      <div className="user-info">
        <p>{user.name}</p>
        <div className="flex grey">
          <i className="fnt-1-2 fas fa-envelope"></i>
          <p>{user.email}</p>
        </div>
        <div className="flex grey">
          <i className="fnt-1-2 fas fa-phone"></i>
          <p>{user.phone}</p>
        </div>
        <div className="flex grey">
          <i className="fnt-1-2 fas fa-globe"></i>
          <p>http://{user.website}</p>
        </div>
      </div>
      <ul className="user-option">
        <li
          onClick={() => {
            setUserData({ type: "LIKE_BUTTON", payload: user.id });
          }}
        >
          {user.isLiked ? (
            <i className="fnt-1-2 fas fa-heart red"></i>
          ) : (
            <i className="fnt-1-2 far fa-heart red"></i>
          )}
        </li>
        <li
          onClick={() => {
            setShowModal(!show_modal);
          }}
        >
          <i className="fnt-1-2 grey far fa-edit"></i>
        </li>
        <li
          onClick={() => {
            setUserData({ type: "DELETE", payload: user.id });
          }}
        >
          <i className="fnt-1-2 grey fas fa-trash"></i>
        </li>
      </ul>
    </div>
  );
};
