import { useInView } from 'react-intersection-observer';

export default function Footer() {

    // Animation
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });

    return (
        <footer className="footer">
            <div className="container">
                <div className={`footer-icon-container align-center ${inView ? 'bounce-in-up' : 'hidden-effect'}`} ref={ref}>
                    <div className="text-center footer-icon-tile p-2">
                        <a href="https://linkedin.com/in/raymondurrutia" target="_blank" rel="noreferrer">
                            <i className="devicon-linkedin-plain footer-icon hvr-grow"></i>
                        </a>
                    </div>
                    <div className="text-center footer-icon-tile p-2">
                        <a href="https://github.com/Bugs23" target="_blank" rel="noreferrer">
                            <i className="devicon-github-original footer-icon hvr-grow"></i>
                        </a>
                    </div>
                </div>
                <p className="pt-3 text-center">
                    <small className="muted">&copy;&nbsp;
                    { new Date().getFullYear() }
                    &nbsp;Raymond Urrutia
                    </small>
                </p>
            </div>
        </footer>
    )
}