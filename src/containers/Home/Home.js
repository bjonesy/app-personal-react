import React, { useEffect, useState } from "react";
import { get, isNil } from "lodash/fp";

import Hero from "../../components/Hero";
import Loading from "../../components/Loading";
import SocialIconBar from "../../components/SocialIconBar";
import axios from "axios";

const Home = () => {
  const [homeContent, setHomeContent] = useState(null);

  useEffect(() => {
    axios
      .get("data/data.json")
      .then((response) => {
        console.log(response);
        setHomeContent(get("data.home", response));
      })
      .catch((err) => {
        console.log(err, "error trying to get videos");
      });
  }, []);

  return isNil(homeContent) ? (
    <Loading />
  ) : (
    <main id="main">
      <Hero
        name={homeContent.name}
        role={homeContent.role}
        quote={homeContent.quote}
        primaryBtnLabel="About"
        primaryBtnLink="about"
        secondaryBtnLabel="Contact"
        secondaryBtnLink="contact"
      />
      <SocialIconBar />
    </main>
  );
};

export default Home;
