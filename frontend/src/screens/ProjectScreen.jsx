import React from "react";
import Project from '../components/Project';
import projects from "../projects";
import { Row, Col } from "react-bootstrap";

const ProjectScreen = () => {
  return (
    <>
		  <h1>Projects</h1>
		<Row>
		  {projects.map((project) => (
			  <Col key={project._id} sm={12} md={6} lg={4} xl={3}>
				<Project project={project} />
			 </Col>
		  ))}
		</Row>
    </>
  );
};

export default ProjectScreen;
