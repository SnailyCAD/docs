// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer/dist");

/** @type {import('@docusaurus/types').Config} */
const config = {
  favicon: "/icons/logo.svg",
  title: "SnailyCAD Documentation",
  tagline: "Documentation provided for SnailyCAD",
  url: "https://docs.snailycad.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  organizationName: "SnailyCAD",
  projectName: "docs",
  trailingSlash: false,

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {
          changefreq: "daily",
          priority: 0.6,
          filename: "sitemap.xml",
        },
        docs: {
          sidebarPath: require.resolve("./sidebars/docs.js"),
          showLastUpdateTime: true,
          path: "docs",
        },
        blog: {
          path: "changelog",
          editUrl: ({ blogDirPath, blogPath }) =>
            `https://github.com/snailycad/docs/edit/main/${blogDirPath}/${blogPath}`,
          editLocalizedFiles: false,
          blogTitle: "SnailyCAD Changelog",
          blogDescription: "SnailyCAD Changelog",
          blogSidebarCount: 5,
          blogSidebarTitle: "All Versions",
          routeBasePath: "changelog",
          include: ["**/*.{md,mdx}"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          postsPerPage: 10,
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          truncateMarker: /<!--\s*(truncate)\s*-->/,
          showReadingTime: true,
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "user-guide",
        showLastUpdateTime: true,
        path: "user-guide",
        routeBasePath: "user-guide",
        sidebarPath: require.resolve("./sidebars/docs.js"),
      },
    ],
    ["@docusaurus/plugin-google-gtag", { trackingID: "G-HE45R7EFY2", anonymizeIP: true }],
    ["@docusaurus/plugin-google-tag-manager", { containerId: "GTM-528C8P8" }],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/docs/guides/how-to-start-with-screen",
            from: "/docs/features/using-screen",
          },
          {
            to: "/docs/guides/requirements/how-to-install-git-linux",
            from: "/docs/guides/how-to-install-git-linux",
          },
          {
            to: "/docs/guides/requirements/how-to-install-git",
            from: "/docs/guides/how-to-install-git",
          },
          {
            to: "/docs/guides/requirements/how-to-install-node-pnpm-npm-linux",
            from: "/docs/guides/requirements/how-to-install-node-yarn-npm-linux",
          },
          {
            to: "/docs/guides/requirements/how-to-install-node-pnpm-npm",
            from: "/docs/guides/requirements/how-to-install-node-yarn-npm",
          },
          {
            to: "/docs/guides/requirements/how-to-install-postgresql-linux",
            from: "/docs/guides/how-to-install-postgresql-linux",
          },
          {
            to: "/docs/guides/requirements/how-to-install-postgresql",
            from: "/docs/guides/how-to-install-postgresql",
          },
          {
            to: "/docs/guides/product/how-set-custom-sounds",
            from: "/docs/guides/how-set-custom-sounds",
          },
          {
            to: "/docs/guides/product/how-to-add-a-custom-favicon",
            from: "/docs/guides/how-to-add-a-custom-favicon",
          },
          {
            to: "/docs/guides/product/how-to-install-custom-fonts",
            from: "/docs/guides/how-to-install-custom-fonts",
          },
          {
            to: "/docs/guides/product/how-to-translate",
            from: "/docs/guides/how-to-translate",
          },
          {
            to: "/docs/guides/product/how-to-translate",
            from: "/docs/features/translating",
          },
          {
            to: "/docs/guides/product/how-to-add-a-custom-favicon",
            from: "/docs/features/favicon",
          },
          {
            to: "/docs/guides/product/how-to-install-custom-fonts",
            from: "/docs/features/custom-fonts",
          },
          {
            from: "/docs/guides/how-to-properly-update-env",
            to: "/docs/guides/env/how-to-properly-update-env",
          },
        ],
      },
    ],
  ],
  themeConfig: {
    algolia: {
      appId: "PKWSL980WF",
      apiKey: "1a0f0fda665bc995bd8de8d14f5c6eee",
      indexName: "snailycad",
      contextualSearch: true,
    },
    metadata: [
      {
        name: "og:image",
        content: "https://docs.snailycad.org/icons/logo.png",
      },
      { name: "og:image:alt", content: "SnailyCAD" },
      { name: "og:url", content: "https://docs.snailycad.org" },
      { name: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:image",
        content: "https://docs.snailycad.org/icons/logo.png",
      },
    ],
    navbar: {
      title: "SnailyCADv4 Docs",
      items: [
        {
          type: "doc",
          docId: "getting-started/index",
          position: "left",
          label: "Documentation",
        },
        {
          to: "user-guide/getting-started",
          position: "left",
          label: "User Guide",
        },
        {
          to: "changelog",
          position: "left",
          label: "Changelog",
        },
        {
          position: "right",
          href: "https://discord.gg/eGnrPqEH7U",
          label: "Discord",
        },
        {
          href: "https://github.com/SnailyCAD/snaily-cadv4",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: ["lua"],
    },
  },
};

module.exports = config;
