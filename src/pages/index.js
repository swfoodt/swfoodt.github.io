import React from "react";
import clsx from "clsx";
import { Parallax } from "react-parallax";
// import Parallax from "react-rellax";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
// import backimg from "../../static/img/background/";
import styles from "./index.module.css";
// var rellax = new Rellax(".rellax");

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  var backNum = Math.ceil(Math.random() * 10);
  var backs =
    'url("https://swfoodt-blog.oss-cn-beijing.aliyuncs.com/img/bg/indexbackground' +
    backNum +
    '.png")';
  const divstyle = {
    height: "100vh",
    width: "100%",
    // background: backs,
    // background: `url(${
    //   require("../../static/img/background/indexbackground" + backNum + ".png")
    //     .default
    // })`,
    background: backs,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <header
      className={clsx("hero hero--primary", styles.heroBanner)}
      style={divstyle}
    >
      <div className="container">
        <div className={clsx("mask", styles.mask)}></div>
        <Helo />
        {/* <img
          src={
            require("../../static/img/background/indexbackground" +
              bckpic +
              ".png").default
          }
          alt="back"
          className={clsx(styles.backimg)}
        /> */}
        {/* <div className={styles.tagline}>{siteConfig.tagline}</div>
        <div className={styles.buttons}d style={{ zIndex: "1000" }}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

function Helo() {
  return (
    <div className={clsx("mask ", styles.firstsawTitle)}>
      <p className={clsx("Title", styles.Title)}>swfoodt</p>
    </div>
  );
}

function Satrs() {
  return (
    <div class="liuxin" style={{ width: "100vh", overflow: "hidden" }}>
      <div class="meteor-1"></div>
      <div class="meteor-2"></div>
      <div class="meteor-3"></div>
      <div class="meteor-4"></div>
      <div class="meteor-5"></div>
      <div class="meteor-6"></div>
      <div class="meteor-7"></div>
      <div class="meteor-8"></div>
      <div class="meteor-9"></div>
      <div class="meteor-10"></div>
      <div class="meteor-11"></div>
      <div class="meteor-12"></div>
      <div class="meteor-13"></div>
      <div class="meteor-14"></div>
      <div class="meteor-15"></div>
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

        <Satrs />
      </main>
    </Layout>
  );
}
