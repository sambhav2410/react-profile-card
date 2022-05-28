import "./App.css";
import React, { useEffect, useState } from "react";
import { getData } from "./ApiCalls/getData";
import { useUserData } from "./context/userContext";
import { CardComponent } from "./Compnents/Card/CardComponent";
import { TouchBallLoading } from "react-loadingg";
import { Col, Row } from "antd";

function App() {
  const { user_data, setUserData } = useUserData();
  const [show_loading, setShowLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setShowLoading(true);
      const data = await getData("https://jsonplaceholder.typicode.com/users");
      setUserData({ type: "INITIAL_ADD", payload: data });
      setShowLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      {show_loading && <TouchBallLoading />}
      {
        <Row>
          {!show_loading &&
            user_data.map((ele) => (
              <Col key={ele.id}>
                <CardComponent user={ele}></CardComponent>
              </Col>
            ))}
        </Row>
      }
    </div>
  );
}

export default App;
