# rehype-mdx-fenced-code-meta

A [rehype](https://github.com/rehypejs/rehype) [MDX](https://mdxjs.com) plugin for adding metadata to code elements.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [`rehypeAddCodeMetaData`](#rehypeAddCodeMetaData)
- [Compatibility](#compatibility)
- [License](#license)

## Installation

```
npm install rehype-mdx-fenced-code-meta-support
```

OR

```
yarn add rehype-mdx-fenced-code-meta-support
```

## Usage

This plugin adds metadata to code elements in the MDX.

For example, given a file named `example.mdx` with the following content:

````
```mdx path=google.com src=no-src
# Heading 1
```
````

The `<code />` element now has a `metaData` prop containing the `path=google.com src=no-src` of the code block.

We are using this in gatsby with `gatsby-plugin-mdx` plugin like this:
```
...
import rehypeAddCodeMetaData from 'rehype-mdx-fenced-code-meta-support';
...
 {
        resolve: `gatsby-plugin-mdx`,
        options: {
          mdxOptions: {
            rehypePlugins: [rehypeAddCodeMetaData],
          },
        },
},
```

```
import React from 'react';
import { MDXProvider as Provider } from '@mdx-js/react';
const components = {
  code: (props) => {
      console.log("props", props);
      const regex = /^(```\w+) *(path=[^ ]+)? *(src=[^ ]+)?/; // Adjust regex if needed

      // Extract path and src if possible
      const path = match?.[2]?.split('=')[1] || null;
      const src = match?.[3]?.split('=')[1] || null;

      return <Code {...props} path={path} src={src} />;
    },
}

const MDXProvider = ({ components = components, element }) => (
  <Provider components={{ ...components }}>
    {element}
  </Provider>
);

export default MDXProvider;

```

## API

This package has a default export `rehypeAddCodeMetaData`.

### `rehypeAddCodeMetaData`

An MDX rehype plugin for adding metadata to code elements.

## Compatibility

This plugin works with Node.js 16 or greater and MDX 3.

## License

[MIT](LICENSE.md) © [Mudit Juneja](https://github.com/muditjuneja)
