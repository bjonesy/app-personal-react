import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../core/components/LoadingComponent';
import Hero from './components/HeroComponent';
import SocialIconBar from './components/SocialIconBarComponent';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      home: null
    };
  }

  async componentDidMount() {
    try {
      const response = await this.fetchData();
      if (!response) {
        throw Error(response.statusText);
      }
      const json = await response.data;
      this.setState({ home: json.home });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  async fetchData() {
    return axios.get('http://localhost:3000/data/data.json');
  }

  render() {
    if (!this.state.home) return <Loading />;
    return (
      <main id="main">
        <Hero
          name={this.state.home.name}
          role={this.state.home.role}
          quote={this.state.home.quote}
          primaryBtnLabel="About"
          primaryBtnLink="about"
          secondaryBtnLabel="Contact"
          secondaryBtnLink="contact"
        />
        <SocialIconBar />
      </main>
    );
  }
}

export default Home;
