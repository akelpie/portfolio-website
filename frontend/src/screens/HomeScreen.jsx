import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <div>
      <Row>
        <Col md={6}>
          <Image
            // src={`${process.env.PUBLIC_URL}/images/my-notion-face-portrait.png`}
            src={`${process.env.PUBLIC_URL}/images/ProfilePic.jpg`}
            alt="Jasmine Masopeh"
            fluid
          />
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <div>
            <h2>About Me</h2>
            <p>
              Hello! I'm Jasmine Masopeh, a current Masters student at Florida
              State University studying computer science. I have valuable
              experience in my field, including embedded programming and
              building software applications with C++ and Python. I also have
              experience with web development, especially HTML, CSS, Javascript,
              React-JS, bootstrap, and more. Lastly, I have also done several
              projects involving SQL and PHP, which has shown my knowledge of
              data science.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeScreen;
