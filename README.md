# gitbook-plugin-ellipsize

Replace blocks of code by ellipsis

## Installation:

`$ npm install artcom/gitbook-plugin-ellipsize --save`

Add this to `book.json`:
```
{
    "plugins": ["ellipsize"]
}
```

## Usage

Define blocks of code that should be omitted with:

```
/* begin ellipsize */

[code that should not be shown on a gitbook page]

/* end ellipsize */
```

This code will be replaced by `// ...` when rendered inside a gitbook page.
