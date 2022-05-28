import "./Card.css";
import "antd/dist/antd.css";
import { Card } from "antd";
import { useUserData } from "../../context/userContext";
import React, { useState } from "react";
import {
  HeartOutlined,
  EditOutlined,
  HeartFilled,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  DeleteFilled,
} from "@ant-design/icons";

import { MyModal } from "../MyModal/MyModal";

const { Meta } = Card;

export const CardComponent = ({ user }) => {
  const [show_modal, setShowModal] = useState(false);
  const { setUserData } = useUserData();

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Card
        className="card"
        cover={
          <div style={{ display: "flex" }} className="CardImageContainer">
            <img src={user.imgSrc} />
          </div>
        }
        actions={[
          user.isLiked ? (
            <HeartFilled
              onClick={() => {
                setUserData({ type: "LIKE_BUTTON", payload: user.id });
              }}
              style={{ color: "red" }}
            />
          ) : (
            <HeartOutlined
              onClick={() => {
                setUserData({ type: "LIKE_BUTTON", payload: user.id });
              }}
              style={{ color: "red" }}
            />
          ),
          <EditOutlined
            onClick={() => {
              setShowModal(!show_modal);
            }}
          />,
          <DeleteFilled
            onClick={() => {
              setUserData({ type: "DELETE", payload: user.id });
            }}
          />,
        ]}
      >
        <Meta title={`${user.name}`}></Meta>
        <p
          style={{ marginTop: "8px", marginBottom: "8px" }}
          className="user-info flex "
        >
          <MailOutlined className="fnt-18" />
          <p style={{ margin: 0 }}>{user.email}</p>
        </p>
        <p style={{ marginBottom: "8px" }} className="user-info flex ">
          <PhoneOutlined className="fnt-18" />
          <p style={{ margin: 0 }}>{user.phone}</p>
        </p>
        <p className="user-info flex ">
          <GlobalOutlined className="fnt-18" />
          <p style={{ margin: 0 }}>{user.website}</p>
        </p>
      </Card>
      <MyModal
        user={user}
        visible={show_modal}
        hideModal={hideModal}
       
      />
    </>
  );
};
