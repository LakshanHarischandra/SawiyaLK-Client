import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="bg-light border-end" style={{ width: '320px' }}>
      <ul className="nav flex-column p-3">
        <li className="nav-item mb-2">
          <Link className="nav-link text-dark" to="/">🏯 Temples</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-dark" to="/">🏠 Elderly Homes</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-dark" to="/">👶 Children Homes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/">📦 Other</Link>
        </li>
      </ul>
    </div>
  );
    
};

export default Sidebar;
