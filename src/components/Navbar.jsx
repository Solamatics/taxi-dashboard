import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <Nav>
      <div className="title">
        <h4>Hi Olusola</h4>
        <h1>
          Welcome <span>TAXXIE DASHBOARD</span>
        </h1>
      </div>
      <div className="search">
        <BiSearch />
        <input className="text" placeholder="Search" />
      </div>
    </Nav>
  );
};

export default Navbar;
const Nav = styled.nav``;
