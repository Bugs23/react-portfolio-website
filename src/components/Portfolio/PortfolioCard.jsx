import { useInView } from "react-intersection-observer";
import { nanoid } from "nanoid";

export default function PortfolioCard(props) {
  // Animation
  const inViewOptions = {
    triggerOnce: true,
    threshold: 0,
  };

  const {
    ref: ref1,
    inView: inView1,
    ref: ref2,
    inView: inView2,
  } = useInView(inViewOptions);

  return (
    <div className={`portfolio-card pt-4 ${props.reverse ? "reverse" : ""}`}>
      <div className="portfolio-card-item-1">
        <div
          className={`project-image-container pb-3 ${
            inView1 ? "bounce-in-right" : "hidden-effect"
          }`}
          ref={ref1}
        >
          <img
            alt={props.title}
            className="img-fluid"
            src={`/images/${props.projectImg}`}
          />
          <img
            alt={props.title}
            className="img-fluid"
            src={`/images/${props.projectImg}`}
          />
          <img
            alt={props.title}
            className="img-fluid"
            data-tilt="true"
            data-tilt-max="3"
            data-tilt-perspective="500"
            data-tilt-speed="400"
            src={`/images/${props.projectImg}`}
          />
        </div>
      </div>
      <div
        className={`portfolio-card-item-2 ${
          inView2 ? "bounce-in-left" : "hidden-effect"
        }`}
        ref={ref2}
      >
        <div className="portfolio-project-text pb-5 center-text">
          {props.tools.map((icon) => (
            <span key={nanoid()} className="me-2">
              <i className={`${icon} portfolio-icon`}></i>
            </span>
          ))}
          <h3 className="about-font-header text-white">{props.title}</h3>
          <p className="about-para">{props.description}</p>
          <div className="portfolio-btn-container">
            {props.repoUrl && (
              <a
                href={props.repoUrl}
                rel="noreferrer"
                target="_blank"
                className="btn-main portfolio-btn"
              >
                Source Code
              </a>
            )}
            {props.demoUrl && (
              <a
                href={props.demoUrl}
                rel="noreferrer"
                target="_blank"
                className="btn-secondary portfolio-btn"
              >
                Website
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
