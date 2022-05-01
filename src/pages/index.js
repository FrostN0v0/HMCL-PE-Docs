import React, { Component } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import ReactAplayer from "react-aplayer";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import APlayer from "aplayer";
import "aplayer/dist/APlayer.min.css";
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            帮助文档 ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
function getElementViewLeft(element) {
  let actualLeft = element.offsetLeft;
  let current = element.offsetParent;
  const elementScrollLeft =
    document.body.scrollLeft + document.documentElement.scrollLeft;
  if (
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement
  ) {
    while (current !== null) {
      actualLeft += current.offsetLeft;
      current = current.offsetParent;
    }
  } else {
    while (current !== null && current !== element) {
      actualLeft += current.offsetLeft;
      current = current.offsetParent;
    }
  }
  return actualLeft - elementScrollLeft;
}

class APlyer extends Component {
  state = {
    left1: 0,
    left2: 0
  };
  initPlayer1 = ($video) => {
    if ($video) {
      this.setState({
        left1: getElementViewLeft($video)
      });
      this.APlayer = new APlayer({
        container: $video,
        audio: [
          {
            name: "Unlasting1",
            artist: "LiSA",
            url: "https://adorable0v0.top/music/unlasting.mp3",
            cover: "https://adorable0v0.top/api/image/37.jpg",
            lrc: "https://adorable0v0.top/music/unlasting.lrc",
            theme: "#ebd0c2"
          }
        ]
      });
    }
  };
  initPlayer2 = ($video) => {
    if ($video) {
      this.setState({
        left2: getElementViewLeft($video)
      });
      this.APlayer = new APlayer({
        container: $video,
        audio: [
          {
            name: "Unlasting",
            artist: "LiSA",
            url: "https://adorable0v0.top/music/unlasting.mp3",
            cover: "https://adorable0v0.top/api/image/37.jpg",
            lrc: "https://adorable0v0.top/music/unlasting.lrc",
            theme: "#ebd0c2"
          }
        ]
      });
    }
  };

  componentWillUnmount() {
    if (this.APlayer) {
      this.APlayer.destroy();
    }
  }

  render() {
    return (
      <div>
        <p>left: {this.state.left1}</p>
        <div
          style={{
            width: "400px"
          }}
          ref={this.initPlayer1}
        />
        <p>left: {this.state.left2}</p>
        <div
          style={{
            width: "400px",
            left: 100,
            transform: "translate(50%, 50%)"
          }}
          ref={this.initPlayer2}
        />
      </div>
    );
  }
}
ReactDOM.render(<APlyer />, document.querySelector("#root"));