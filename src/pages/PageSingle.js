import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectInfo from '../components/ProjectInfo';

function PageSingle() {
  const { id, slug } = useParams();

  // Start from the Top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <section>
      <ProjectInfo id={id} slug={slug} />
    </section>
  );
}

export default PageSingle;