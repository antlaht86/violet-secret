import React from "react";
import { useNavigate } from "react-router-dom";
export default function Ready() {
  let navigate = useNavigate();

  React.useEffect(() => {
    navigate("../success");
  }, []);
  return <div style={{ visibility: "hidden" }}>moi</div>;
}
