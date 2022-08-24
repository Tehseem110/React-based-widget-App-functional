import React, { useState } from "react";

const Accordian = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <div key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
          <div className={`content ${active}`}>
            <p>{item.content}</p>
          </div>
        </div>
      </div>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordian;
