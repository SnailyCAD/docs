import * as React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  React.useEffect(() => {
    window.location.href = "/docs/intro"
  })

  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    />
  );
}
