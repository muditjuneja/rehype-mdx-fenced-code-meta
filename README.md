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

\`\`\`sh
npm install rehype-mdx-fenced-code-meta
\`\`\`

## Usage

This plugin adds metadata to code elements in the MDX.

For example, given a file named `example.mdx` with the following content:

````
```mdx path=google.com
# Heading 1
```
````

The following script:

```
import { readFile } from 'node:fs/promises'
import { compile } from '@mdx-js/mdx'
import rehypeAddCodeMetaData from 'rehype-mdx-code-props'

const { value } = await compile(await readFile('example.mdx'), {
  jsx: true,
  rehypePlugins: [rehypeAddCodeMetaData]
})
console.log(value)
```

Roughly yields:

\`\`\`jsx
export default function MDXContent(props) {
  return (
    <pre>
      <code className="language-js" metaData={...}>{"console.log('Hello, world!');\n"}</code>
    </pre>
  )
}
\`\`\`

The `<code />` element now has a `metaData` prop containing the metadata of the code block.

## API

This package has a default export `rehypeAddCodeMetaData`.

### `rehypeAddCodeMetaData`

An MDX rehype plugin for adding metadata to code elements.

## Compatibility

This plugin works with Node.js 16 or greater and MDX 3.

## License

[MIT](LICENSE.md) © [Mudit Juneja](https://github.com/muditjuneja)
