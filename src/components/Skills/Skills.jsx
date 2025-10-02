import {icons} from "./skillsData"
import { useInView } from "react-intersection-observer"

export default function Skills() {

    // Animation
    const inViewOptions = {
        triggerOnce: true,
        threshold: 0.2
    }

    const { ref, inView } = useInView(inViewOptions);

    return (
        <div id="skills" className="skills section-wrapper">
            <h1 className="text-center pb-5 text-uppercase">skills</h1>
            <div className="container">
                <div className="skills-container">
                    {
                        icons.map((icon, index) => {

                            const Icon = icon.icon

                            return (
                                <div key={index} className={`skills-tile text-center rounded bg-dark p-2 ${inView ? index % 2 === 0 ? 'bounce-in-left' : 'bounce-in-right' : 'hidden-effect'}`} ref={ref}>
                                    <Icon className="skills-icon" />
                                    <p className="mb-2">{icon.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}