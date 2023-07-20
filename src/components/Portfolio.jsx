import {useEffect, useState} from "react"
import PortfolioCard from "./PortfolioCard";

export default function Portfolio() {
    
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch("./portfolioData.json")
            .then(res => res.json())
            .then(data => setProjects(data.projects))
    }, [])

    const cards = projects.map((card) => {
        return (
            <PortfolioCard 
                key={card.id}
                {...card}
            />
        )
    })

    return (
        <div id="portfolio" className="portfolio portfolio-wrapper section-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center pb-5">Portfolio</h1>
                {cards}
            </div>
        </div>
    )
}