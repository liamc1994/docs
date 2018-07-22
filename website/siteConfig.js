/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

const siteConfig = {
  title: 'SHOUTca.st Docs' /* title for your website */,
  tagline: '',
  url: 'https://docs-staging.shoutca.st' /* your website url */,
  baseUrl: '/' /* base url for your project */,

  noIndex: false,

  // Used for publishing and more
  projectName: 'docs',
  organizationName: 'innovate-technologies',
  editUrl: 'https://github.com/innovate-technologies/docs/edit/master/docs/',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {href: 'https://shoutca.st', label: 'Home'},
    {doc: 'general-Getting-Started-with-Internet-Radio', label: 'General'},
    {doc: 'cast-About', label: 'Cast'},
    {doc: 'cc-Centova-FAQ', label: 'Centova Cast'},
  ],

  stylesheets: ["/css/custom.css"],

  /* colors for website */
  colors: {
    primaryColor: '#232a31',
    secondaryColor: '#2ADF7A',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' SHOUTca.st',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
