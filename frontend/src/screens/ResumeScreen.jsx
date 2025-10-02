import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Accordion,
  Badge,
  Button,
} from "react-bootstrap";

const ResumeScreen = () => {
  const skills = [
    "HTML/CSS",
    "Python",
    "C/C++",
    "React.js",
    "Kotlin",
    "JavaScript",
    "Git/GitHub",
    "Linux",
    "Docker",
    "AWS",
    "Machine Learning",
    "MongoDB",
    "SQL",
    "Kubernetes",
    "UI/UX",
    "Artificial Intelligence",
    "Nignx",
    "Drupal",
    "jekyll"
  ];

  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "AeroVironment",
      location: "Simi Valley, CA",
      date: "June 2025 - August 2025",
      bullets: [
        "Built a dynamic website using Jekyll and JavaScript to automatically render files from remote GitLab repositories.",
        "Integrated GitLab API and OAuth2 authentication to securely display private repository content.",
        "Designed a scalable system to fetch and present repository files without manual page creation.",
      ],
    },
    {
      role: "Learning Assistant",
      company: "Florida State University",
      location: "Tallahassee, FL",
      date: "Aug 2024 - Dec 2024",
      bullets: [
        "Led weekly recitation sessions for an Intro to Computer Science course.",
        "Held office hours to support students with programming assignments.",
        "Collaborated with instructors to improve teaching strategies.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "AeroVironment",
      location: "Simi Valley, CA",
      date: "June 2025 - August 2025",
      bullets: [
        "Built a dynamic website using Jekyll and JavaScript to automatically render files from remote GitLab repositories.",
        "Integrated GitLab API and OAuth2 authentication to securely display private repository content.",
        "Designed a scalable system to fetch and present repository files without manual page creation.",
      ],
    },
  ];

  return (
    <Container className="mt-4">
      {/* Summary */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title>Professional Summary</Card.Title>
          <Card.Text>
            Detail-oriented software engineer intern with 2+ years in embedded
            systems, web development, data science, and digital infrastructure.
            Skilled in C++, Python, and data analysis with proven results in
            improving system efficiency and reliability.
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Education */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title>Education</Card.Title>
          <ul>
            <li>
              <strong>Florida State University</strong> - MS Computer Science
              (Estimated Graduation: May 2026)
            </li>
            <li>
              <strong>Florida State University</strong> - BS Computer Science
              (Graduated: Dec 2024)
            </li>
          </ul>
        </Card.Body>
      </Card>

      {/* Skills */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title>Skills</Card.Title>
          <div>
            {skills.map((skill, idx) => (
              <Badge key={idx} bg="secondary" className="m-1 p-2">
                {skill}
              </Badge>
            ))}
          </div>
        </Card.Body>
      </Card>

      {/* Experience */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title>Professional Experience</Card.Title>
          <Accordion>
            {experiences.map((exp, idx) => (
              <Accordion.Item eventKey={idx.toString()} key={idx}>
                <Accordion.Header>
                  {exp.role} – {exp.company} ({exp.date})
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Card.Body>
      </Card>

      {/* Resume Embed */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title>Resume</Card.Title>
          <iframe
            src="pdfs/Jasmine_Masopeh_CV.pdf"
            style={{ backgroundColor: "white" }}
            width="100%"
            height="600px"
            title="Resume"
          ></iframe>
          <div className="mt-3">
            <Button variant="primary" href="/resume.pdf" download>
              Download Resume
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ResumeScreen;
