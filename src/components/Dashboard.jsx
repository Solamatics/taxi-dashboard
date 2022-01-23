import React from "react";
import styled from "styled-components";
import Analytics from "./Analytics";
import Earning from "./Earning";
import FAQ from "./FAQ";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Transfers from "./Transfers";

const Dashboard = () => {
  return (
    <Section>
      <Navbar />
      <div className="grid">
        <div className="row__one">
          <Analytics />
          <FAQ />
        </div>
        <div className="row__two">
          <Earning />
          <Transfers />
          <Profile />
        </div>
      </div>
    </Section>
  );
};

export default Dashboard;
const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
`;
