<div align="right">

<a href="https://www.npmjs.com/package/@openinf/util-md-table#top"><img src="https://img.shields.io/npm/v/@openinf/util-md-table?style=plastic" alt="view on npm" /></a>
<img src="https://img.shields.io/github/languages/top/openinf/util-md-table?color=blue&style=plastic" />
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/github/license/openinf/util-md-table?color=blue&style=plastic" alt="License: MIT" /></a>

</div>

<h1 align="center">@openinf/util-md-table</h1>

<h3 align="center">Common Markdown table-related utilities</h3>

<br />

_The high-level goal of `@openinf/util-md-table` is to serve as a Node.js
package containing utilities for **common operations on Markdown tables**
allowing users to make use of them in new ways. As is the case with any software
project in continuous development, omissions and errors may exist, for which
contributions are welcome._

<br />

<div align="center">

[![Code Style: Prettier][prettier-badge]][prettier-url]
[![Commit Style: Conventional Commits][conventional-commits-badge]][conventional-commits-url]
[![Active Issues: DeepSource][deepsource-badge]][deepsource-url]

</div>

<br />

---

<br />

## Installation

`@openinf/util-md-table` runs on Node.js and is available via `npm`.

```shell
npm install @openinf/util-md-table
```

## Usage

```ts
import { mdTable2json } from '@openinf/util-md-table';

const sampleTable = [
  '| Col1  | Col2  | Col3  | Col4  |',
  '|:-----:|:-----:|:-----:|:-----:|',
  '| one   | two   | three | four  |',
  '| Fee   | Fie   | Foe   | Fum   |',
].join('\n');

const sampleTableObject = mdTbl2json(sampleTable, (v) => v.toLowerCase());

console.log(sampleTableObject);
```

```console
[
  { col1: 'one', col2: 'two', col3: 'three', col4: 'four' },
  { col1: 'fee', col2: 'fie', col3: 'foe', col4: 'fum' }
]
```

<br />

---

<br />

<a name="mdTbl2json"></a>

## mdTbl2json(mdTbl, cellTransform, attribCellTransform) ⇒ <code>Array.&lt;Object&gt;</code>

**Kind**: global function

| Param               | Type                                            | Description                              |
| ------------------- | ----------------------------------------------- | ---------------------------------------- |
| mdTbl               | <code>string</code>                             | A markdown table as a string.            |
| cellTransform       | <code>function</code> \| <code>undefined</code> | A function run on contents of each cell. |
| attribCellTransform | <code>function</code> \| <code>undefined</code> | A transform only for attribute cells.    |

<br />

---

<br />

<p align="center">&copy; The OpenINF Authors</center></p>
<p align="center"><img height="32px" width="32px" src="https://raw.githubusercontent.com/openinf/openinf.github.io/live/logo.svg" /></p>

<!-- prettier-ignore-start -->
<!-- PRESERVE LINK DEFINITION LABEL CASE - START -->

[deepsource-badge]: https://deepsource.io/gh/openinf/util-md-table.svg/?label=active+issues&show_trend=true&token=l5A9MkZiKP1kWI8AWvY98Hd-
[deepsource-url]: https://deepsource.io/gh/openinf/util-md-table/?ref=repository-badge 'Active Issues: DeepSource'
[conventional-commits-badge]: https://img.shields.io/badge/commit%20style-Conventional-%23fa6673?style=plastic&logoColor=white&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggc3R5bGU9ImZpbGw6ICNGRkYiIGQ9Ik0xNSwyQTEzLDEzLDAsMSwxLDIsMTUsMTMsMTMsMCwwLDEsMTUsMm0wLTJBMTUsMTUsMCwxLDAsMzAsMTUsMTUsMTUsMCwwLDAsMTUsMFoiLz48L3N2Zz4K 'Commit Style: Conventional Commits'
[conventional-commits-url]: https://www.conventionalcommits.org 'Commit Style: Conventional Commits'
[prettier-badge]: https://img.shields.io/badge/code_style-Prettier-ff69b4.svg?style=plastic 'Code Style: Prettier'
[prettier-url]: https://github.com/prettier/prettier 'Code Style: Prettier'

<!-- PRESERVE LINK DEFINITION LABEL CASE - END -->
<!-- prettier-ignore-end -->
