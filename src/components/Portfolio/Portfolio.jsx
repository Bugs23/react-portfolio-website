import { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import projectData from "./projectData";
import Button from "../Button";
import "./Portfolio.css";

import { nanoid } from "nanoid";

export default function Portfolio() {
  // State for keeping track of the selected project category
  const [selectedCategory, setSelectedCategory] = useState("all");

  // State for keeping track of whether the screen size is mobile or not
  const [isMobile, setIsMobile] = useState(false);

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  useEffect(() => {
    // Check if the window width is less than or equal to 768px
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check the initial window width
    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // Filter projects
  const filteredProjects =
    selectedCategory === "all"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  const cardElements = filteredProjects.map((card, index) => (
    <PortfolioCard
      key={nanoid()}
      reverse={!isMobile && index % 2 !== 0}
      {...card}
    />
  ));

  return (
    <div id="portfolio" className="portfolio portfolio-wrapper section-wrapper">
      <div className="container">
        <h1 className="text-center pb-5 text-uppercase">Portfolio</h1>
        <div className="category-btn-container">
          {/* Buttons for switching between categories */}
          <Button onClick={() => handleCategoryChange("all")}>All</Button>
          <Button
            onClick={() => handleCategoryChange("development")}
            className="category-btn portfolio-btn btn-main"
          >
            Development
          </Button>
          <Button
            onClick={() => handleCategoryChange("design")}
            className="category-btn portfolio-btn btn-main"
          >
            Design
          </Button>
        </div>
        <div className="portfolio-project-container">{cardElements}</div>
      </div>
    </div>
  );
}
