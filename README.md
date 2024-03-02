
A [rehype](https://github.com/rehypejs/rehype) [MDX](https://mdxjs.com) plugin for adding metadata to code elements.

## Table of Contents

- [Why](#why)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [`rehypeAddCodeMetaData`](#rehypeAddCodeMetaData)
- [Compatibility](#compatibility)
- [License](#license)


## Why

With the latest version of mdx-js, random props could not be fetched if they were in format below -

````
```mdx path=google.com src=no-src
# Heading 1
```
````
This was working in mdx v1. This package adds a new prop named `metaData` for the fenced code blocks of the format `path=google.com src=no-src` which can be parsed using a regex and accessed in your custom code component.

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
    const metaDataObject = props.metaData.split(' ').reduce((obj, item) => {
        const [key, value] = item.split('=');
        obj[key] = value;
        return obj;
      }, {});

    return <Code {...props} path={metaDataObject.path} src={metaDataObject.src} />;
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
