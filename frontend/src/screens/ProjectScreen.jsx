import React from "react";
import projects from "../projects";
import { Row, Col } from "react-bootstrap";

const ProjectScreen = () => {
  return (
    <>
		  <h1>Projects</h1>
		<Row>
		  {projects.map((project) => (
			 <Col key={project._id} sm={12} md={6} lg={4} xl={3}>
				<h3>{project.name}</h3>
				<p>{project.description}</p>
				<p>{project.technologies}</p>
				<p>{project.github}</p>
				<p>{project.demo}</p>
			 </Col>
		  ))}
		</Row>
    </>
  );
};

export default ProjectScreen;
