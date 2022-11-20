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
        <meta property="og:image" content="https://cad-docs.caspertheghost.me/icons/logo.svg" />
        <script
          async
          defer
          data-website-id="5d735bf8-9086-43df-9da8-62c2e49401d5"
          src="https://umami-nine-olive.vercel.app/umami.js"
        />
      </Head>
    </Layout>
  );
}
