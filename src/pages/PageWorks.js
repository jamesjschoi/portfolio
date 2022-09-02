import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Projects } from "../components/Projects";
import Card from '../components/Card';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const allCategories = ['All', ...new Set(Projects.map(project => project.category))];

function PageWorks() {
  const [cardItem, setCardItem] = useState(Projects);
  const [button, setButton] = useState(allCategories);

  // Start from the Top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  //Filter Function
  const filter = (button) => {
    if (button === "All") {
      setCardItem(Projects);
      return;
    }
    const filteredData = Projects.filter(project => project.category === button);
    setCardItem(filteredData);

  };

  return (
    <section className="page-works">
      <div className="page-works-wrapper">
        <ul className="ul">
          <Link to="/"><li className="first-li">JsChoi Main</li></Link>
          <li className="second-li"><FontAwesomeIcon icon={faCaretRight} /> Works </li>
        </ul>
      </div>

      <Button button={button} filter={filter} />
      <Card cardItem={cardItem} />
    </section>
  );
}

export default PageWorks;