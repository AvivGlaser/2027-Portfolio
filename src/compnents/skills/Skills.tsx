import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import Carousel, { ButtonGroupProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/img/color-sharp.webp";
import { responsive, techSkills } from "./skillsData";
import "./Skills.css";

// Outside the component so the carousel doesn't get a brand-new button group on every render
function ButtonGroup({ next, previous }: ButtonGroupProps) {
  return (
    <div className="carousel-button-group">
      <button onClick={previous} className="carousel-arrow left" aria-label="Previous slide">
        <ChevronLeft size={28} />
      </button>
      <button onClick={next} className="carousel-arrow right" aria-label="Next slide">
        <ChevronRight size={28} />
      </button>
    </div>
  );
}

export function Skills() {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Technical Skills</h2>
              <p>My tech stack toolbox</p>
              <Carousel
                responsive={responsive}
                infinite
                autoPlay
                autoPlaySpeed={2000}
                customButtonGroup={<ButtonGroup />}
                renderButtonGroupOutside
                arrows={false}
                className="skill-slider"
              >
                {techSkills.map((skill) => (
                  <div className="skill-container" key={skill.alt}>
                    <img
                      src={skill.img}
                      alt={skill.alt}
                      className={skill.className}
                      loading="lazy"
                      decoding="async"
                    />
                    <h3>{skill.title}</h3>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" aria-hidden="true" loading="lazy" />
    </section>
  );
}
