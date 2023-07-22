import { useInView } from 'react-intersection-observer';

export default function PortfolioCard(props) {

    // Animation
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '400px',
    });

	return (
		<div className="row portfolio-row-flex">
			<div className={`col-lg-6 col-md-6 ${inView ? 'bounce-in-right' : 'hidden-effect'}`} ref={ref}>
				<div className="text-end">
					<div className="portfolio-project-image pb-3">
						<img alt={props.title} className="img-fluid" src={`/images/${props.projectImg}`} />
						<img alt={props.title} className="img-fluid" src={`/images/${props.projectImg}`} />
						<img alt={props.title} className="img-fluid" data-tilt="true" data-tilt-max="3" data-tilt-perspective="500" data-tilt-speed="400" src={`/images/${props.projectImg}`} />
					</div>
				</div>
			</div>
			<div className={`col-lg-6 col-md-6 ${inView ? 'bounce-in-left' : 'hidden-effect'}`} ref={ref}>
				<div className="portfolio-project-text pb-5 center-text">
					<div className="format">
						<div className="format-small-text">
						    {props.tools.map((icon) => 
						    	<span className="me-2">
						    		<i className={`${icon} portfolio-icon`}></i>
						    	</span>
						    )}
						</div>
						<div className="format-head-text">
							<h3 className="about-font-header text-white">{props.title}</h3>
						</div>
						<div className="format-sub-text">
							<p className="about-para">{props.description}</p>
						</div>
						<div className="portfolio-btn-container">
							<a href={props.repoUrl} rel="noreferrer" target="_blank"  className="btn-main portfolio-btn">Source Code</a>
							<a href={props.demoUrl} rel="noreferrer" target="_blank"  className="btn-secondary portfolio-btn">Website</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}