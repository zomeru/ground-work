import React from "react";
import type { NextPage } from "next";
import { Container, HomeLayout } from "@/components";
import {
  Clients,
  CompanyBackground,
  Main,
  MissionVision,
  Team,
} from "@/components/about";

const About: NextPage = () => {
  return (
    <HomeLayout
      title="Ground Work | About"
      description="An online B2B platform designed to create and gather networks for business establishments in the country!"
    >
      <div className="flex flex-col mt-8">
        <Container>
          <Main />
          <MissionVision />
        </Container>
      </div>

      <CompanyBackground />

      <Container>
        <Team />
        <Clients />
      </Container>
    </HomeLayout>
  );
};

export default About;
