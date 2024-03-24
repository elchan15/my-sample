import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Links = [
  { id: 1, to: "/", text: "Home" },
  { id: 2, to: "/calculator", text: "Calculator" },
  { id: 3, to: "/signup", text: "SignUp" },
  { id: 4, to: "/listx", text: "UserList" },
];

const Layout = () => {
    return (
        <>
          <nav>
            <ul>
              {Links.map((x) => (
                <li key={x.id}>
                  <Link key={x.id} to={x.to}>
                    {x.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
    
          <Outlet />
        </>
      );
}

export default Layout

