import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import blogapp from "../../Assets/Projects/blog_app.png";
import find from "../../Assets/Projects/find.png";
import clother from "../../Assets/Projects/colthes.png";
import android from "../../Assets/Projects/androidapp.png";
import film from "../../Assets/Projects/film.png";

import hotel from "../../Assets/Projects/hotel.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogapp}
              isBlog={false}
              title="MERN Blog Application"
              description="Blog application is a personal self-study project. Using Mongodb, react.js, node.js (Express.js) technology. Allows users to log in, create posts and operate like a social network such as like, unlike post, follow, unfollow, subcription, comment, post view counts. In addition, you can see the profit from that post."
              ghLink="https://github.com/Fatitboo/MERN_Blog_Application"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={find}
              isBlog={false}
              title="Project-Team Finder Website"
              description="A Website built by Mongodb, react.js, Spring boot technology. The system has 3 main actors. Seeker will search for jobs, projects, teams and apply for positions attached to the user's CV. Organizations will create job postings and review application requirements. And finally the Admin will control the system."
              ghLink="https://github.com/Fatitboo/SE121.O11_Website_support_find_project"
              demoLink="https://findproject.21522448host.id.vn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clother}
              isBlog={false}
              title="Clothes Retailer Website"
              description="Team project Using technology: Javascript, Bootstrap, MERN Stack(MongoDB, ExpressJs, ReactJS, NodeJs),Cloudinary and managing source code with Git. This is a sales support website for a store. Helps people order and pay through MOMO. In addition, there is an Admin agent that has the function of managing sales products, customers, statistics and issuing vouchers."
              ghLink="https://github.com/nhanlequang/SE347.O12-Cong_Nghe_Web_Va_Ung_Dung"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={android}
              isBlog={false}
              title="E-commerce Shop Android App"
              description="Build and develop an e-commerce platform based on a reliable and attractive mobile application, to meet the needs of shopping and trading on phones and laptops. There are 3 actors. The user places an order and the seller posts the goods and the admin approves the goods posted for sale  Technology stacks: Java (Android Studio), Firebase, Firebase realtime database, Firebase Firestore, Git. "
              ghLink="https://github.com/Fatitboo/ECommerceShop"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={film}
              isBlog={false}
              title="Cinema management application"
              description="Using C# (Visual studio) and MSSQL to create a desktop application to help manage movie theaters. Support ticket booking and payment functions. In addition, you can also manage movies, products, reviews, employees, and incidents."
              ghLink="https://github.com/Fatitboo/Cinema_Management_App"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="Hotel Management App"
              description="Using C# (Visual studio) and MSSQL to create a desktop application to help manage hotels. Supports booking and payment functions. In addition, you can also manage rooms, products, room types, employees, and incidents."
              ghLink="https://github.com/Fatitboo/Hotel_Management_App"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
