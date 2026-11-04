import { Container, Row, Col } from "react-bootstrap";
import { activities } from "./whatNowData";
import { ActivityCard } from "./ActivityCard";
import "./WhatNow.css";

export default function WhatNow() {
  return (
    <section className="what-now" id="what-now">
      <Container fluid className="what-now py-5">
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h2 className="what-now-title">So what now?</h2>
            <p className="what-now-subtitle">
              what do I do to find a job while working full time?
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={10}>
            <div className="activity-grid">
              {activities.map((activity, index) => (
                <ActivityCard key={activity.id} {...activity} index={index} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
