<div align="center">

# @openinf/util-md-table

Common Markdown table-related utilities

<br />

[!['View on npm'][npm-badge--shields]][npm-badge-url]
!['TypeScript types: included'][types-included-badge]
[!['DeepScan grade'][deepscan-badge]][deepscan-url]
[!['License: MIT'][license-badge--shields]][license-badge-url]
[!['FOSSA Status'][fossa-badge]][fossa-url]

</div>

<br />

_The high-level goal of `@openinf/util-md-table` is to serve as a Node.js
package containing utilities for **common operations on Markdown tables**
allowing users to make use of them in new ways. As is the case with any software
project in continuous development, omissions and errors may exist, for which
contributions are welcome._

<br />

<details id="platform--node-js-lts">
	<summary>
		<a
			href="#platform--node-js-lts"
			title="Platform: Node.js LTS"
		>
			<img
				src="https://img.shields.io/badge/Node.js-LTS-black?logo=Node.js&logoColor=lightgreen&color=2a2a2a&labelColor=black"
				alt="Platform: Node.js LTS"
			/>
		</a>
	</summary>
	<div align="left"><br />
		<a
			target="_blank"
			title="Node.js release schedule"
			href="https://github.com/nodejs/release#release-schedule"
		>
			<strong>Supported Node.js Environments</strong>
		</a><br /><br />

- [ ] v4：Argon (Ar)
- [ ] v6：Boron (B)
- [ ] v8：Carbon (C)
- [ ] v10：Dubnium (Db)
- [ ] v12：Erbium (Er)
- [x] v14：Fermium (Fm)
- [x] v16：Gallium (Ga)
- [x] v18：Hydrogen (H)
<!-- TODO
- [x] v20: Iron (Fe) -->

</div></details>

<br />

<div align="center">

[![Code Style: Prettier][prettier-badge]][prettier-url]
[![Commit Style: Conventional Commits][conventional-commits-badge]][conventional-commits-url]
[![Active Issues: DeepSource][deepsource-badge]][deepsource-url]
[![Chat on Matrix][matrix-badge--shields]][matrix-url]

</div>

<br />

---

<br />

## Installation

`@openinf/util-md-table` runs on supported versions of Node.js and is available
via **`npm`**, **`pnpm`**, or **`yarn`**.

**Using the npm CLI**

<sup>See the
[official documentation for this command](https://docs.npmjs.com/cli/commands/npm-install)
for more information.</sup>

```shell
npm i @openinf/util-md-table
```

**Using the pnpm CLI**

<sup>See the
[official documentation for this command](https://pnpm.io/cli/install) for more
information.</sup>

```shell
pnpm i @openinf/util-md-table
```

**Using the Yarn 1 CLI (Classic)**

<sup>See the
[official documentation for this command](https://classic.yarnpkg.com/en/docs/cli/add)
for more information.</sup>

```shell
yarn add @openinf/util-md-table
```

## Usage

```ts
import { mdTbl2json } from '@openinf/util-md-table';

const sampleTable = [
  '| Col1  | Col2  | Col3  | Col4  |',
  '|:-----:|:-----:|:-----:|:-----:|',
  '| one   | two   | three | four  |',
  '| Fee   | Fie   | Foe   | Fum   |',
].join('\n');

const sampleTblObject = mdTbl2json(sampleTable, (v) => v.toLowerCase());

console.log(sampleTblObject);
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

<br /><br />

---

<br />

<div align="center">

## Show Your Support

<!-- Give a ⭐️ if this project helped you! -->

If you like the project, [give it a star ⭐️], it will be a great encouragement
to us.

<br /><br />

&copy; The OpenINF Authors

<br />

<a title="The OpenINF website" href="https://open.inf.is" rel="author">
  <img alt="The OpenINF logo" height="32px" width="32px" src="https://raw.githubusercontent.com/openinf/openinf.github.io/live/logo.svg?sanitize=true" />
</a>

</div>

<!-- prettier-ignore-start -->
<!-- PRESERVE LINK DEFINITION LABEL CASE - START -->

[give it a star ⭐️]: https://github.com/openinf/util-md-table/stargazers

[deepscan-badge]: https://badgen.net/deepscan/grade/team/18447/project/21801/branch/634012?icon=deepscan
[deepscan-url]: https://deepscan.io/dashboard#view=project&tid=18447&pid=21801&bid=634012
[deepsource-badge]: https://deepsource.io/gh/openinf/openinf-util-md-table.svg/?label=active+issues&show_trend=true&token=l5A9MkZiKP1kWI8AWvY98Hd-
[deepsource-url]: https://deepsource.io/gh/openinf/openinf-util-md-table/?ref=repository-badge 'Active Issues: DeepSource'
[conventional-commits-badge]: https://img.shields.io/badge/commit%20style-Conventional-%23fa6673?logoColor=white&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggc3R5bGU9ImZpbGw6ICNGRkYiIGQ9Ik0xNSwyQTEzLDEzLDAsMSwxLDIsMTUsMTMsMTMsMCwwLDEsMTUsMm0wLTJBMTUsMTUsMCwxLDAsMzAsMTUsMTUsMTUsMCwwLDAsMTUsMFoiLz48L3N2Zz4K 'Commit Style: Conventional Commits'
[conventional-commits-url]: https://www.conventionalcommits.org 'Commit Style: Conventional Commits'
[fossa-badge]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Fopeninf%2Futil-md-table.svg?type=small 'FOSSA Status'
[fossa-url]: https://app.fossa.com/projects/git%2Bgithub.com%2Fopeninf%2Futil-md-table?ref=badge_small 'FOSSA Status'
[license-badge--shields]: https://img.shields.io/badge/license-MIT-blue.svg?logo=github 'License: MIT'
[license-badge-url]: https://spdx.org/licenses/MIT.html 'License: MIT'
[matrix-badge--shields]: https://img.shields.io/badge/matrix-join%20chat-%2346BC99?logo=matrix 'Chat on Matrix'
[matrix-url]: https://matrix.to/#/#openinf:matrix.org 'You&apos;re invited to talk on Matrix'
[npm-badge--shields]: https://img.shields.io/npm/v/@openinf/util-md-table/latest.svg?logo=npm&color=fe7d37 'View on npm'
[npm-badge-url]: https://www.npmjs.com/package/@openinf/util-md-table#top 'View on npm'
[prettier-badge]: https://img.shields.io/badge/code_style-Prettier-ff69b4.svg?logo=prettier 'Code Style: Prettier'
[prettier-url]: https://prettier.io/playground 'Code Style: Prettier'
[types-included-badge]: https://badgen.net/npm/types/@openinf/util-md-table?icon=typescript 'TypeScript types: included'

<!-- PRESERVE LINK DEFINITION LABEL CASE - END -->
<!-- prettier-ignore-end -->
