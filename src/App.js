import "./App.css";
import React, { useEffect, useState } from "react";
import { getData } from "./ApiCalls/getData";
import { useUserData } from "./context/userContext";
import { Card } from "./Compnents/Card/Card";
import { TouchBallLoading } from "react-loadingg";

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
        <div className="responsive-grid">
          {!show_loading &&
            user_data.map((ele) => <Card key={ele.id} user={ele} />)}
        </div>
      }
    </div>
  );
}

export default App;
