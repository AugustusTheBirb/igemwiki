import React from "react";
import { navigationData } from "./navigationData.js"
import { Link } from "gatsby"
import { useState } from "react";
import logo from "../../images/juodas.svg"


function Navigation() {
    
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (index) => {
    if (activeDropdown === index) {
        setActiveDropdown(null);
    } else {
        setActiveDropdown(index);
    }}
    
    return (
        <nav className="sticky bg-igem-blue flex justify-between w-screen h-16 items-center pr-8 w-screen">
            <Link to="/" className="flex align-center">
                <img src={logo} alt="igem logo" className="h-16 w-16" />
            </Link>
            <ul className="flex justify-around gap-8">
          {navigationData.map((item, index) => (
            <li 
            key={index} 
            className={`relative ${activeDropdown === index ? 'active' : ''}`}
                > 
              <div className="bg-igem-dblue p-2 border-2 rounded-md text-igem-white">
                <button 
                  className="dropdown-toggle" 
                  onClick={() => toggleDropdown(index)}
                  aria-expanded={activeDropdown === index}
                >
                  {activeDropdown === index ? item.category + '▲' : item.category + '▼'}
                </button>
              </div>
              {activeDropdown === index && (
                <ul className="left-1/2 absolute -translate-x-1/2 center-top translate-y-2 bg-igem-dblue text-igem-white p-2 border-2 border-igem-white rounded-md">
                  {item.items.map((dropdownItem, dropIndex) => (
                    <li className="my-2" key={dropIndex}>
                      <Link to={dropdownItem.route}>{dropdownItem.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        </nav>
    )
}


export default Navigation