import { useInView } from 'react-intersection-observer';

/* ICONS */
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiPhotoshop } from "react-icons/di";
import { DiIllustrator } from "react-icons/di";


export default function Skills() {

    // Animation
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px',
    });

    return (
        <div id="skills" className="skills section-wrapper">
            <h1 className="pb-5 text-uppercase wow slideInRight">skills</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <ul className={`px-0 pb-5 ${inView ? 'bounce-in-up' : 'hidden-effect'}`} ref={ref}>
                            <li className="list-inline-item mx-2 mb-3">
                                <div className="text-center skills-tile rounded bg-dark p-2">
                                    <DiHtml5 className="skills-icon" />
                                    <p className="mb-2">HTML5</p>
                                </div>
                            </li>
                            <li className="list-inline-item mx-2 mb-3">
                                <div className="text-center skills-tile rounded bg-dark p-2">
                                    <DiCss3 className="skills-icon" />
                                    <p className="mb-2">CSS3</p>
                                </div>
                            </li>
                            <li className="list-inline-item mx-2 mb-3">
                                <div className="text-center skills-tile rounded bg-dark p-2">
                                    <DiJavascript className="skills-icon" />
                                    <p className="mb-2">JAVASCRIPT</p>
                                </div>
                            </li>
                            <li className="list-inline-item mx-2 mb-3">
                                <div className="text-center skills-tile rounded bg-dark p-2">
                                    <DiReact className="skills-icon" />
                                    <p className="mb-2">REACT</p>
                                </div>
                            </li>
                            <li className="list-inline-item mx-2 mb-3">
                                <div className="text-center skills-tile rounded bg-dark p-2">
                                    <DiBootstrap className="skills-icon" />
                                    <p className="mb-2">BOOTSTRAP</p>
                                </div>
                            </li>
                            <li className="list-inline-item mx-2 mb-3">
                                <div className="text-center skills-tile rounded bg-dark p-2">
                                    <DiPhotoshop className="skills-icon" />
                                    <p className="mb-2">PHOTOSHOP</p>
                                </div>
                            </li>
                            <li className="list-inline-item mx-2 mb-3">
                                <div className="text-center skills-tile rounded bg-dark p-2">
                                    <DiIllustrator className="skills-icon" />
                                    <p className="mb-2">ILLUSTRATOR</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}