import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const Accordian = () => {
    const [isActive, setIsActive] = useState(false);
  const accordionData = {
    title: 'Section 1',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
  };

  const { title, content } = accordionData;

  return (
    <React.Fragment>
      <h1>React Accordion Demo</h1>
      <div className="accordion">
  <div className="accordion-item">
    <div
      className="accordion-title"
      onClick={() => setIsActive(!isActive)}
    >
    <div className='justify-content-center'>
      <div>{title}</div>
      <button className='btn btn-success w-10'>{isActive ? '-' : '+'}</button>
    </div>
    {isActive && <div className="accordion-content">{content}</div>}
  </div>
  </div>
</div>
    </React.Fragment>
  );
};

export default Accordian;