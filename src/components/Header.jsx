import { useInView } from 'react-intersection-observer';
import Typewriter from "typewriter-effect";
import { FaLaptopCode } from "react-icons/fa";

export default function Header() {

    // Animation
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0
    });

    return (
        <div id="home" className="header-wrapper">
            <div className={`main-info text-uppercase ${inView ? 'bounce-in-up' : 'hidden-effect'}`} ref={ref}>
                <FaLaptopCode className="header-icon" />
                <h1>Raymond Urrutia</h1>

                <Typewriter
                    options={{
                        strings: ["Web Development", "Web Design", "UX Design", "Graphic Design"],
                        autoStart: true,
                        loop: true,
                    }}
                />

            </div>
        </div>
    )
}