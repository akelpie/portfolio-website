import React from "react";
import { useParams } from "react-router-dom";
import projects from "../projects";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const ProjectDetailsScreen = () => {
  const { id } = useParams();
  const project = projects.find((p) => p._id === id);

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Image src={project.image} alt={project.name} fluid />
        </Col>
        <Col md={6}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>
            <strong>Technologies:</strong> {project.technologies}
          </p>
          <Button
            variant="primary"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
          <Button
            variant="secondary"
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="ms-2"
          >
            Demo
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetailsScreen;
