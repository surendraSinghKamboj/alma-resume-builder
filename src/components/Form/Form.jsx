import { Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import Education from "./Education";
import Personal from "./Personal";
import Skills from "./Skills";
import Work from "./Work";

const Form = () => {
  const [active, setActive] = useState("Personal");
  return (
    <Container sx={{ display: "flex" }}>
      <Box
        sx={{
          height: "100vh",
          padding: "2rem",
          boxShadow: "5px 5px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Button
          variant={active === "Personal" ? "outlined" : "string"}
          sx={{ textAlign: "left", display: "block", width: "100%" }}
          onClick={() => setActive("Personal")}
        >
          Personal info
        </Button>
        <Button
          variant={active === "Work" ? "outlined" : "string"}
          sx={{ textAlign: "left", display: "block", width: "100%" }}
          onClick={() => setActive("Work")}
        >
          Work Experiance
        </Button>
        <Button
          variant={active === "Education" ? "outlined" : "string"}
          sx={{ textAlign: "left", display: "block", width: "100%" }}
          onClick={() => setActive("Education")}
        >
          Education
        </Button>
        <Button
          variant={active === "Skills" ? "outlined" : "string"}
          sx={{ textAlign: "left", display: "block", width: "100%" }}
          onClick={() => setActive("Skills")}
        >
          Key Skills
        </Button>
      </Box>
      <Box>
        {active === "Personal" ? (
          <Personal />
        ) : active === "Work" ? (
          <Work />
        ) : active === "Education" ? (
          <Education />
        ) : (
          <Skills />
        )}
      </Box>
    </Container>
  );
};

export default Form;
