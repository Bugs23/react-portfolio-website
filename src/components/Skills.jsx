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
    const inViewOptions = {
        triggerOnce: true,
        threshold: 0.2
    }

    const { ref: ref1, inView: inView1 } = useInView(inViewOptions);

    const { ref: ref2, inView: inView2 } = useInView(inViewOptions);

    const { ref: ref3, inView: inView3 } = useInView(inViewOptions);

    const { ref: ref4, inView: inView4 } = useInView(inViewOptions);

    const { ref: ref5, inView: inView5 } = useInView(inViewOptions);

    const { ref: ref6, inView: inView6 } = useInView(inViewOptions);
    
    const { ref: ref7, inView: inView7 } = useInView(inViewOptions);

    return (
        <div id="skills" className="skills section-wrapper">
            <h1 className="pb-5 text-uppercase wow slideInRight">skills</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <ul className="px-0 pb-5">
                            <li className={`list-inline-item mx-2 mb-3 ${inView1 ? 'bounce-in-left' : 'hidden-effect'}`} ref={ref1}>
                                <div className="text-center skills-tile rounded bg-dark p-2">
                                    <DiHtml5 className="skills-icon" />
                                    <p className="mb-2">HTML5</p>
                                </div>
                            </li>
                            <li className={`list-inline-item mx-2 mb-3 ${inView2 ? 'bounce-in-right' : 'hidden-effect'}`} ref={ref2}>
                                <div className="text-center skills-tile rounded bg-dark p-2">
                                    <DiCss3 className="skills-icon" />
                                    <p className="mb-2">CSS3</p>
                                </div>
                            </li>
                            <li className={`list-inline-item mx-2 mb-3 ${inView3 ? 'bounce-in-left' : 'hidden-effect'}`} ref={ref3}>
                                <div className="text-center skills-tile rounded bg-dark p-2">
                                    <DiJavascript className="skills-icon" />
                                    <p className="mb-2">JAVASCRIPT</p>
                                </div>
                            </li>
                            <li className={`list-inline-item mx-2 mb-3 ${inView4 ? 'bounce-in-right' : 'hidden-effect'}`} ref={ref4}>
                                <div className="text-center skills-tile rounded bg-dark p-2">
                                    <DiReact className="skills-icon" />
                                    <p className="mb-2">REACT</p>
                                </div>
                            </li>
                            <li className={`list-inline-item mx-2 mb-3 ${inView5 ? 'bounce-in-left' : 'hidden-effect'}`} ref={ref5}>
                                <div className="text-center skills-tile rounded bg-dark p-2">
                                    <DiBootstrap className="skills-icon" />
                                    <p className="mb-2">BOOTSTRAP</p>
                                </div>
                            </li>
                            <li className={`list-inline-item mx-2 mb-3 ${inView6 ? 'bounce-in-right' : 'hidden-effect'}`} ref={ref6}>
                                <div className="text-center skills-tile rounded bg-dark p-2">
                                    <DiPhotoshop className="skills-icon" />
                                    <p className="mb-2">PHOTOSHOP</p>
                                </div>
                            </li>
                            <li className={`list-inline-item mx-2 mb-3 ${inView7 ? 'bounce-in-left' : 'hidden-effect'}`} ref={ref7}>
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