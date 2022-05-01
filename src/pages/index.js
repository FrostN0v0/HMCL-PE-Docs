import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import 'APlayer/dist/APlayer.min.css';
import APlayer from 'APlayer';
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
const ap = new APlayer({
  container: document.getElementById('player'),
  mini: false,
  autoplay: false,
  theme: '#FADFA3',
  loop: 'all',
  order: 'random',
  preload: 'auto',
  volume: 0.7,
  mutex: true,
  listFolded: false,
  listMaxHeight: 90,
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
});
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
