# Inner Source Docs Site Theme

This is the Flutter Inner source documentation site theme.

## To Run Locally

1. Install [Ruby](https://www.ruby-lang.org/en/documentation/installation/) and [jekyll](https://jekyllrb.com/)
2. Clone the repo and `cd` to the root directory
3. Install required Ruby Gems via `bundle install`
4. Run `bundle exec jekyll serve`
5. Navigate to the server address using your web browser (e.g. `http://127.0.0.1:4000`)

## Our Documentation Principles

1. We write plain, simple English.
2. We use an informal & inclusive tone.
3. We are concise. No extra words.
4. We prefer a few long scrollable pages over many short pages.
5. We prefer to use markdown, and avoid embedded HTML.

## Tips

### Table of contents

If you want to add a Table of contents to your documentation page, you've to add the key **toc** with the value `true` in the front matter section at the top of the file.

Example:

```
---
title: Beautiful page title
toc: true
---
```

### Removing logical meaning when using chars from HTML

If you want to write something like this, `<ADD_THIS_VALUE>`, you have to remove the logical meaning of **`<`** and **`>`** by adding a **`\`** before the symbol.

Example: `\<ADD_THIS_VALUE\>`

### Removing logical meaning when using chars from Liquid

When using code snippets, commonly GitHub actions workflows yaml, in the Docs you might see that the content isn't rendered correctly. This is because the code inside is has `${{ <SOME_VALUE> }}` in the snippet.

To correct this you've to surround the code snippet like the example below:

````
{% raw %}
    ```yaml

    APP_PEM: ${{ secrets.APP_PRIVATE_KEY }}
    APP_ID: ${{ secrets.APP_ID }}

    ```
{% endraw %}

````
