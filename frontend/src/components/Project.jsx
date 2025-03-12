import { Card, Button } from "react-bootstrap";

const Project = ({ project }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={project.demo} target="_blank" rel="noopener noreferrer">
        <Card.Img src={project.image} variant="top" />
      </a>

      <Card.Body>
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
          <Card.Title as="div">
            <strong>{project.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">{project.description}</Card.Text>
        <Card.Text as="div">
          <strong>Technologies:</strong> {project.technologies}
        </Card.Text>
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
      </Card.Body>
    </Card>
  );
};

export default Project;
