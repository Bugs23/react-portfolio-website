import { useInView } from "react-intersection-observer"

/* ICONS */
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiBootstrap, DiPhotoshop, DiIllustrator} from "react-icons/di"
import { SiTailwindcss } from "react-icons/si"


export default function Skills() {

    // Animation
    const inViewOptions = {
        triggerOnce: true,
        threshold: 0.2
    }

    const { 
        ref: ref1, inView: inView1, 
        ref: ref2, inView: inView2, 
        ref: ref3, inView: inView3, 
        ref: ref4, inView: inView4,
        ref: ref5, inView: inView5,
        ref: ref6, inView: inView6,
        ref: ref7, inView: inView7,
        ref: ref8, inView: inView8 
    } = useInView(inViewOptions)

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
                        <SiTailwindcss className="skills-icon" />
                        <p className="mb-2">TAILWIND</p>
                    </div>
                    <div className={`skills-tile text-center rounded bg-dark p-2 ${inView5 ? 'bounce-in-right' : 'hidden-effect'}`} ref={ref6}>
                        <DiBootstrap className="skills-icon" />
                        <p className="mb-2">BOOTSTRAP</p>
                    </div>
                    
                    <div className={`skills-tile text-center rounded bg-dark p-2 ${inView6 ? 'bounce-in-left' : 'hidden-effect'}`} ref={ref7}>
                        <DiPhotoshop className="skills-icon" />
                        <p className="mb-2">PHOTOSHOP</p>
                    </div>
                    
                    <div className={`skills-tile text-center rounded bg-dark p-2 ${inView7 ? 'bounce-in-right' : 'hidden-effect'}`} ref={ref8}>
                        <DiIllustrator className="skills-icon" />
                        <p className="mb-2">ILLUSTRATOR</p>
                    </div>
                </div>
            </div>
        </div>
    )
}