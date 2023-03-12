import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import {
  personal_info,
  work_experience,
  education_details,
  key_skills,
} from "./Dummy";

const Coriana = () => {
  const {
    first_name,
    last_name,
    email,
    mobile,
    address,
    city,
    state,
    postal_code,
    objective,
  } = personal_info;
  return (
    <>
      <Container sx={{ minHeight: "100vh", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            height: "300px",
            width: "330px",
            top: "35%",
            left: "30%",
            zIndex: "-1",
            borderRadius: "81% 19% 100% 0% / 83% 3% 97% 17%",
            backgroundImage: "linear-gradient(135deg, #a605e6,#ff0000)",
          }}
        ></div>
        <Box
          style={{
            minHeight: "100px",
            width: "100%",
            backgroundImage: "linear-gradient(60deg, pink,skyblue)",
          }}
        >
          <Typography sx={{ margin: "4px" }} variant="h5">
            {first_name} {last_name}
          </Typography>
          <Typography sx={{ margin: "4px" }} variant="h6">
            {email}
          </Typography>
          <Typography sx={{ margin: "4px" }} variant="h6">
            {mobile}
          </Typography>
          <Typography sx={{ margin: "4px" }} variant="h6">
            {address},{city},{state},{postal_code}{" "}
          </Typography>
          <Typography variant="h6">{objective}</Typography>
        </Box>
        <Container
          sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        >
          {/* Left Side */}
          <Box sx={{ width: "50%", marginTop: "20px" }}>
            <Typography variant="h4">Skills</Typography>
            {key_skills.map((skill, index) => (
              <Typography variant="h6" key={index}>
                {skill}
              </Typography>
            ))}
          </Box>
          {/* Right Side  */}
          <Box sx={{ width: "50%", marginTop: "20px" }}>
            <Typography variant="h4">Education</Typography>
            {education_details.map(
              ({ type, university, degree, start_year, end_year }, index) => (
                <Box key={index}>
                  <Typography>{type}</Typography>
                  <Typography>{university}</Typography>
                  <Typography>{degree}</Typography>
                  <Typography>{start_year}</Typography>
                  <Typography>{end_year}</Typography>
                </Box>
              )
            )}

            <Typography variant="h4">Work Experience</Typography>
            {work_experience.map(
              ({ id, job_title, organization_name, start_year, end_year }) => (
                <Box key={id}>
                  <Typography>{job_title}</Typography>
                  <Typography>{organization_name}</Typography>
                  <Typography>{start_year}</Typography>
                  <Typography>{end_year}</Typography>
                </Box>
              )
            )}
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default Coriana;
