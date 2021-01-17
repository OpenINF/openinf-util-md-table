<h1 align="center">@openinf/util-md-table</h1>

<p align="center">Common Markdown table-related utilities</p>

<br />

<p align="center">
  <a href="https://www.npmjs.com/package/@openinf/util-md-table"><img src="https://img.shields.io/npm/v/@openinf/util-md-table?style=plastic" alt="view on npm" /></a>
  <img src="https://img.shields.io/github/languages/top/openinf/util-md-table?color=blue&style=plastic" />
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/github/license/openinf/openinf.github.io?color=blue&style=plastic" alt="License: MIT" /></a>
</p>

<br />

_The high-level goal of `@openinf/util-md-table` is to serve as a Node.js
package containing utilities for **common operations on Markdown tables**
allowing users to make use of them in new ways. As is the case with any
software project in continuous development, omissions and errors may exist, for
which contributions are welcome._

<br />

---

<br />

## Installation

`@openinf/util-md-table` runs on Node.js and is available via `npm`.

```shell
npm install @openinf/util-md-table
```

## Usage

To get started using the class provided by `@openinf/util-md-table`, all
that needs to be done is either import/require (depending on the module format)
the default export of the module or destructure individual named exports.

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

<br />

---

<br />

<a name="mdTbl2json"></a>

## mdTbl2json(mdTbl, cellTransform, attribCellTransform) ⇒ <code>Object</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| mdTbl | <code>string</code> | A markdown table as a string. |
| cellTransform | <code>function</code> | A function run on contents of each cell. |
| attribCellTransform | <code>function</code> | A transform only for attribute cells. |


<br />

---

<br />

&copy; OpenINF
