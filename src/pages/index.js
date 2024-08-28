import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container" style={{ textAlign: 'center' }}>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <div className={styles.buttons} style={{margin: '0px 10px'}}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/CAHppe Intro">
              CAHppe Intro
            </Link>
          </div>
          <div className={styles.buttons} style={{margin: '0px 10px'}}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/Installations/Standard">
              Installation
            </Link>
          </div>
          <div className={styles.buttons} style={{margin: '0px 10px'}}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/How To Use/Standard">
              How to use
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="system for creating camera animations in Unity and VRChat/>">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
