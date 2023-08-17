import * as React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from "@docusaurus/Head";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  React.useEffect(() => {
    window.location.href = "/docs/getting-started";
  });

  return (
    <Layout title={siteConfig.title} description="Documentation provided for SnailyCADv4">
      <Head>
        <link rel="icon" href="https://docs.snailycad.org/icons/logo.png" />
      </Head>
    </Layout>
  );
}
