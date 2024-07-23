import { BsHourglassTop, BsBriefcaseFill } from "react-icons/bs"
import { FaHourglassStart } from "react-icons/fa"

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'

export default function Experience() {
    return (
        <div id="experience" className="experience section-wrapper">
            <h1 className="text-center pb-5 text-uppercase">Experience</h1>
            <div className="container">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'var(--primary-white)' }}
                        contentArrowStyle={{ borderRight: '7px solid  var(--primary-white)' }}
                        date="Apr 2022 - Present"
                        iconStyle={{ background: 'var(--primary-blue)', color: 'var(--primary-white)' }}
                        icon={<BsBriefcaseFill className="experience-icon" />}
                    >
                        <h3 className="vertical-timeline-element-title">Web Designer</h3>
                        <h5 className="vertical-timeline-element-subtitle">Healthy Directions</h5>
                        <p>
                            <span>HTML | CSS | Tailwind | Adobe Illustrator | Adobe Photoshop | JobSuite</span>
                        </p>
                        
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'var(--primary-white)' }}
                        contentArrowStyle={{ borderRight: '7px solid  var(--primary-white)' }}
                        date="Jan 2019 - Apr 2022"
                        iconStyle={{ background: 'var(--primary-blue)', color: 'var(--primary-white)' }}
                        icon={<BsBriefcaseFill className="experience-icon" />}
                    >
                        <h3 className="vertical-timeline-element-title">Web Designer</h3>
                        <h5 className="vertical-timeline-element-subtitle">T-Mobile (Sprint)</h5>
                        <p>
                            <span>HTML | CSS | Adobe Illustrator | Adobe Photoshop | Jira | Sketch | Invision</span>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'var(--primary-white)' }}
                        contentArrowStyle={{ borderRight: '7px solid  var(--primary-white)' }}
                        date="Nov 2016 - Dec 2018"
                        iconStyle={{ background: 'var(--primary-blue)', color: 'var(--primary-white)' }}
                        icon={<BsBriefcaseFill className="experience-icon" />}
                    >
                        <h3 className="vertical-timeline-element-title">Web Designer</h3>
                        <h5 className="vertical-timeline-element-subtitle">DealerOn</h5>
                        <p>
                            <span>HTML | CSS | JavaScript | jQuery | Bootstrap | Jira | Adobe Illustrator | Adobe Photoshop</span>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element vertical-timeline-element--no-children"
                        iconStyle={{ background: 'var(--primary-blue)', color: 'var(--primary-white)' }}
                        icon={<FaHourglassStart className="experience-icon" />}
                    >
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    )
}