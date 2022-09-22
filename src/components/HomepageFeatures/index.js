import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

// const FeatureList = [
//   {
//     title: "Easy to Use",
//     Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
//     description: (
//       <>Docusaurus was designed from the ground up to be easily installed and</>
//     ),
//   },
//   {
//     title: "Focus on What Matters",
//     Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//       </>
//     ),
//   },
//   {
//     title: "Powered by React",
//     Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.row}>
          {CardsdList.map((props, idx) => (
            <div>
              <Cards key={idx} {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CardsdList = [
  {
    Title: "Document",
    Subtitle: "-->",
    Herf: "docs/intro",
    Description: <>里面有些尽可能严谨的学习记录，还有些不太严谨的菜谱...</>,
  },
  {
    Title: "Blog",
    Subtitle: "-->",
    Herf: "blog",
    Description: <>里面有些暂时不存在的文章，主要是因为肚子里没货可写...</>,
  },
  {
    Title: "Github",
    Subtitle: "-->",
    Herf: "https://github.com/swfoodt",
    Description: <>个人在GitHub暂时没啥贡献，放在这里是为了看起来美观...</>,
  },
];

function Cards({ Title, Subtitle, Herf, Description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.front}>
            <h3 className={styles.title}>{Title}</h3>

            <button className={styles.cardbtm} href={Herf}>
              <a className={styles.subtitle} href={Herf}>
                <p>Check it out</p>
              </a>
              <svg
                stroke-width="4"
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </button>
          </div>

          <div className={styles.back}>
            <p className={styles.description}>{Description}</p>
            <button className={styles.cardbtm}>
              <a className={styles.subtitle} href={Herf}>
                <p>Check it out</p>
              </a>
              <svg
                stroke-width="4"
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
