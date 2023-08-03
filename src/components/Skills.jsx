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
            <h1 className="text-center pb-5 text-uppercase">skills</h1>
            <div className="container">
                <div className="skills-container">
                    <div className={`skills-tile text-center rounded bg-dark p-2 ${inView1 ? 'bounce-in-left' : 'hidden-effect'}`} ref={ref1}>
                        <DiHtml5 className="skills-icon" />
                        <p className="mb-2">HTML5</p>
                    </div>
                    
                    <div className={`skills-tile text-center rounded bg-dark p-2 ${inView2 ? 'bounce-in-right' : 'hidden-effect'}`} ref={ref2}>
                        <DiCss3 className="skills-icon" />
                        <p className="mb-2">CSS3</p>
                    </div>
                    
                    <div className={`skills-tile text-center rounded bg-dark p-2 ${inView3 ? 'bounce-in-left' : 'hidden-effect'}`} ref={ref3}>
                        <DiJavascript className="skills-icon" />
                        <p className="mb-2">JAVASCRIPT</p>
                    </div>
                    
                    <div className={`skills-tile text-center rounded bg-dark p-2 ${inView4 ? 'bounce-in-right' : 'hidden-effect'}`} ref={ref4}>
                        <DiReact className="skills-icon" />
                        <p className="mb-2">REACT</p>
                    </div>
                    
                    <div className={`skills-tile text-center rounded bg-dark p-2 ${inView5 ? 'bounce-in-left' : 'hidden-effect'}`} ref={ref5}>
                        <DiBootstrap className="skills-icon" />
                        <p className="mb-2">BOOTSTRAP</p>
                    </div>
                    
                    <div className={`skills-tile text-center rounded bg-dark p-2 ${inView6 ? 'bounce-in-right' : 'hidden-effect'}`} ref={ref6}>
                        <DiPhotoshop className="skills-icon" />
                        <p className="mb-2">PHOTOSHOP</p>
                    </div>
                    
                    <div className={`skills-tile text-center rounded bg-dark p-2 ${inView7 ? 'bounce-in-left' : 'hidden-effect'}`} ref={ref7}>
                        <DiIllustrator className="skills-icon" />
                        <p className="mb-2">ILLUSTRATOR</p>
                    </div>
                </div></div>
            </div>
    )
}