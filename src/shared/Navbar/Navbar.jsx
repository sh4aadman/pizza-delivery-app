import React from "react";
import Logo from "/src/shared/Navbar/Logo";
import { VscSignOut } from "react-icons/vsc";
import { NavLink } from "react-router";

export default function Navbar() {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Pizzas",
      link: "/pizzas",
    },
    {
      name: "Orders",
      link: "/orders",
    },
    {
      name: <VscSignOut />,
      link: "/signout",
    },
  ];

  return (
    <div className="md:w-5/6 mx-auto my-11 h-1/4 flex items-center gap-36 font-medium text-xl text-[#00000080]">
      <Logo />
      {links.map((link, idx) => (
        <NavLink key={idx} to={link.link}>
          {link.name}
        </NavLink>
      ))}
    </div>
  );
}
