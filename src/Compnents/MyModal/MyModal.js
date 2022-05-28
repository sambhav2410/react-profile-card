import { Form, Input, Modal } from "antd";
import { useState } from "react";
import { useUserData } from "../../context/userContext";

export const MyModal = ({ user, visible, hideModal }) => {
  const [curr_user, setCurrUSer] = useState({ ...user });
  const { setUserData } = useUserData();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCurrUSer((pre_user) => ({ ...pre_user, [name]: value }));
  };
  const handleOk = () => {
    setUserData({
      type: "EDIT",
      payload: { ...curr_user },
    });
    hideModal();
  };
  return (
    <Modal
      title="Basic Modal"
      visible={visible}
      onOk={handleOk}
      onCancel={hideModal}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
        initialValues={{
          email: curr_user.email,
          name: curr_user.name,
          phone: curr_user.phone,
          website: curr_user.website,
        }}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please input your name!" }]}
          onChange={handleChange}
        >
          <Input name="name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: "email" }]}
          onChange={handleChange}
        >
          <Input name="email" />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "Please Enter Phone No" }]}
          onChange={handleChange}
        >
          <Input name="phone" />
        </Form.Item>
        <Form.Item
          label="Website"
          name="website"
          rules={[{ required: true, message: "Please input your Website" }]}
          onChange={handleChange}
        >
          <Input name="website" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
