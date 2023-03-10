import { Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";

const Form = () => {
  const [active, setActive] = useState("Personal");
  return (
    <Container sx={{ display: "flex" }}>
      <Box
        sx={{
          height: "100vh",
          padding: "2rem",
          boxShadow: "5px 5px 10px rgba(0,0,0,0.5)",
        }}
      >
        <Button
          sx={{ display: "block" }}
          style={{
            backgroundColor: active === "Personal" ? "red" : null,
            color: active === "Personal" ? "#fff" : null,
          }}
          onClick={() => setActive("Personal")}
        >
          Personal info
        </Button>
        <Button
          sx={{ display: "block" }}
          style={{
            backgroundColor: active === "Work" ? "red" : null,
            color: active === "Work" ? "#fff" : null,
          }}
          onClick={() => setActive("Work")}
        >
          Work Experiance
        </Button>
        <Button
          sx={{ display: "block" }}
          style={{
            backgroundColor: active === "Education" ? "red" : null,
            color: active === "Education" ? "#fff" : null,
          }}
          onClick={() => setActive("Education")}
        >
          Education
        </Button>
        <Button
          sx={{ display: "block" }}
          style={{
            backgroundColor: active === "Skills" ? "red" : null,
            color: active === "Skills" ? "#fff" : null,
          }}
          onClick={() => setActive("Skills")}
        >
          Key Skills
        </Button>
      </Box>
      <Box></Box>
    </Container>
  );
};

export default Form;
