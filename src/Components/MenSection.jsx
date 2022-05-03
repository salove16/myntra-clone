import { Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MenSection = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios.get("API").then((response) => console.log(response));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <div>Left</div>
      <div>Right</div>
    </Container>
  );
};

export default MenSection;
