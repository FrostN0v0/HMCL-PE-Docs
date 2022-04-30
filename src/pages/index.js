import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ReactAplayer from 'react-aplayer';

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
  export default class App extends React.Component {

  // event binding example

  onPlay = () => {

    console.log('on play');

  };

  onPause = () => {

    console.log('on pause');

  };

  // example of access aplayer instance

  onInit = ap => {

    this.ap = ap;

  };

  render() {

    const props = {

      theme: '#F57F17',

      lrcType: 3,

      audio: [

        {

          name: 'Unlasting',

          artist: 'LiSA',

          url: 'https://adorable0v0.top/music/unlasting.mp3',

          cover: 'https://adorable0v0.top/api/image/37.jpg',

          lrc: 'https://adorable0v0.top/music/unlasting.lrc',

          theme: '#ebd0c2'

        }

      ]

    };

    return (

      <div>

        <ReactAplayer

          {...props}

          onInit={this.onInit}

          onPlay={this.onPlay}

          onPause={this.onPause}

        />

        {/* example of access aplayer instance API */}

        <button onClick={() => this.ap.toggle()}>toggle</button>

      </div>

    );

  }

}
}
