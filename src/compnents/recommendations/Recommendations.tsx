import { Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { recommendations, responsive } from "./recommendationsData";
import "./Recommendations.css";

export function Recommendations() {
  return (
    <section className="recommendations" id="recommendations">
      <Container>
        <Row className="align-items-center">
          <h2 className="recommendations-header">Recommendations</h2>
          <p className="recommendations-p">My co-workers would say that...</p>
        </Row>
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={5000}
          removeArrowOnDeviceType={["mobile"]}
          className="mx-auto recommendations-carousel"
        >
          {recommendations.map((rec) => (
            <div key={rec.name} className="p-4 text-center">
              <h3 className="rec-text">"{rec.text}"</h3>
              <p className="mt-3">{rec.name}</p>
              <p>{rec.role}</p>
              <img
                src={rec.img}
                alt={rec.name}
                className="co-workers-image"
                width={100}
                height={100}
                loading="lazy"
                decoding="async"
              />{" "}
              <br />
              {/* A real link styled as a button (a link nested inside a button is invalid HTML) */}
              <a href={rec.letter} target="_blank" rel="noopener noreferrer" className="btn btn-primary recommendation-letter">
                Full Letter & Contact Info
                <span className="screen-reader-element"> &nbsp; {rec.hiddenText}</span>
              </a>
            </div>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
