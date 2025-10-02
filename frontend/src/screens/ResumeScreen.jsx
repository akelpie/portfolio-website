import React from "react";
import { Container, Button } from "react-bootstrap";

const ResumeScreen = () => {
  return (
    <Container>
      <h1>My Resume</h1>
      <iframe
        src="pdfs/Jasmine_Masopeh_CV.pdf"
        width="100%"
        height="600px"
        title="Resume"
      ></iframe>
      <div className="mt-3">
        <Button variant="primary" href="/resume.pdf" download>
          Download Resume
        </Button>
      </div>
    </Container>
  );
};

export default ResumeScreen;
