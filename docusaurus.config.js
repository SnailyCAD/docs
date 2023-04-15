// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  favicon: "/icons/logo.svg",
  title: "SnailyCAD Documentation",
  tagline: "Documentation provided for SnailyCAD",
  url: "https://docs.snailycad.org",
  baseUrl: "/",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "warn",
  organizationName: "SnailyCAD",
  projectName: "docs",
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {
          changefreq: "daily",
          priority: 0.6,
          filename: "sitemap.xml",
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          path: "changelog",
          editUrl: ({ locale, blogDirPath, blogPath }) =>
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
    ["@docusaurus/plugin-google-gtag", { trackingID: "G-HE45R7EFY2", anonymizeIP: true }],
    ["@docusaurus/plugin-google-tag-manager", { containerId: "GTM-528C8P8" }],
    require.resolve("@cmfcmf/docusaurus-search-local"),
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          { to: "/docs/guides/how-to-translate", from: "/docs/features/translating" },
          { to: "/docs/guides/how-to-add-a-custom-favicon", from: "/docs/features/favicon" },
          { to: "/docs/guides/how-to-install-custom-fonts", from: "/docs/features/custom-fonts" },
          { to: "/docs/guides/how-to-start-with-screen", from: "/docs/features/using-screen" },
        ],
      },
    ],
  ],
  themeConfig: {
    metadata: [
      { name: "og:image", content: "https://docs.snailycad.org/icons/logo.png" },
      { name: "og:image:alt", content: "SnailyCAD" },
      { name: "og:url", content: "https://docs.snailycad.org" },
      { name: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:image", content: "https://docs.snailycad.org/icons/logo.png" },
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
          to: "changelog",
          position: "left",
          label: "Changelog",
        },
        {
          position: "left",
          href: "https://discord.gg/eGnrPqEH7U",
          label: "Discord",
        },
        {
          href: "https://github.com/SnailyCAD/snaily-cadv4",
          label: "GitHub",
          position: "left",
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ["lua"],
    },
  },
};

module.exports = config;
