// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  favicon: "/icons/logo.svg",
  title: "SnailyCAD Documentation",
  tagline: "Documentation provided for SnailyCAD",
  url: "https://cad-docs.caspertheghost.me",
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
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
      }),
    ],
  ],

  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  themeConfig: {
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
