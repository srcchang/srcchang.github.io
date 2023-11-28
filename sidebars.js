/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Markdown',
      items: [
        'Markdown/markdown-syntax'
      ],
    },
    {
      type: 'category',
      label: 'Dart',
      items: [
        'Dart/introduction'
      ],
    },
    {
      type: 'category',
      label: 'Flutter',
      items: [
        'Flutter/introduction'
      ],
    },
    {
      type: 'category',
      label: 'Android',
      items: [
        'Android/introduction'
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Tutorial',
    //   items: ['tutorial-basics/create-a-document'],
    // },
  ],
};

export default sidebars;