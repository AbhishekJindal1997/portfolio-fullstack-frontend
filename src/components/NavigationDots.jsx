import React from "react";

const NavigationDots = ({ active }) => {
  const navigationItems = [
    "home",
    "about",
    "work",
    "skills",
    "testimonials",
    "contact",
  ];
  return (
    <div className='app__navigation'>
      {navigationItems.map((item, index) => (
        <a
          href={`#${item}`}
          className='app__navigation-dot'
          key={item + index}
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        >
          <span style={{ display: "none" }}>{item}</span>
        </a>
      ))}
    </div>
  );
};

export default NavigationDots;
