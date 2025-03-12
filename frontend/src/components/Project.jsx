import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <Link to={`../project/${project._id}`} style={{ textDecoration: "none" }}>
      <Card className="my-3 p-3 rounded">
        <Card.Img src={project.image} variant="top" />
        <Card.Body>
          <Card.Title as="div">
            <strong>{project.name}</strong>
          </Card.Title>
          <Card.Text as="div">{project.technologies}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Project;
