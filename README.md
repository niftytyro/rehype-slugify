# rehype-slugify

(`rehype`)[https://github.com/rehypejs/rehype] plugin to add ids to headings with a custom slugify function.

## Installation

```
npm install rehype-slugify
```

## Usage

Given the `html`:

```html
<h1>HELLO</h1>
<p>world!</p>
```

And our `js` script:

```javascript
import fs from 'node:fs'
import {rehype} from 'rehype'
import slugify from 'rehype-slug'

const buf = fs.readFileSync('fragment.html')

rehype()
  .data('settings', {fragment: true})
  .use(slugify, {slugify: (content) => {
    return content.toLowerCase();
  }})
  .process(buf)
  .then((file) => {
    console.log(String(file))
  })
```

It will print out:

```html
<h1 id="hello">HELLO</h1>
<p>world!</p>
```

## API

Default export is `rehypeSlugify`.
It requires the a `slugify` function in options, and throws an error if not provided.


