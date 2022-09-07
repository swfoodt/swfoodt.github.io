import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={clsx("mask", styles.mask)}></div>
        {/* <div className="loader"><p></p>{siteConfig.title}</div> */}
        <Helo />
        <div className={styles.tagline}>{siteConfig.tagline}</div>
        <div className={styles.buttons} style={{ zIndex: "1000" }}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function Helo() {
  return (
    <div>
      <div className={clsx("scanner", styles.scanner)}>
        <div className={clsx("s1", styles.s1)}>Loading...</div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Helo />
      </main>
    </Layout>
  );
}
