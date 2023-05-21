[![Orange banner indicating a preview software component][release-level-banner--unstable]](##)

<br />

<!-- markdownlint-disable-next-line line-length -->
<a href="##"><img src="https://raw.githubusercontent.com/OpenINF/openinf.github.io/live/assets/img/svg/logogram-color.svg?sanitize=true" alt="OpenINF logo" title="OpenINF" align="right" height="96" width="96" /></a>

<div align="left">

## `@openinf/util-md-table`

> Common Markdown table-related utilities

<br />

[!['View on npm'][npm-badge--shields]][npm-badge-url]
[!['License: MIT/Apache-2.0'][license-badge--shields]][license-badge-url]

</div>

<br />

The high-level goal of `@openinf/util-md-table` is to serve as a Node.js package
containing utilities for **common operations on Markdown tables** allowing users
to make use of them in new ways. We are constantly working to improve this
repository, so please feel free to [contribute](#contributing) if you notice any
omissions or errors.

Thanks!

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
[![Chat on Matrix][matrix-badge--shields]][matrix-url]

</div>

<br /><br />

---

<br />

### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

<br /><br />

---

<br />

<details>
<summary>
	<!-- markdownlint-disable-next-line line-length -->
	<h3 id="installation" align="left">Installation <a href="##"><img src="https://raw.githubusercontent.com/nodejs/corepack/main/icon.svg?sanitize=true" alt="Corepack logo" title="Corepack friendly" align="right" height="24" width="24" /></a></h3>
</summary>

<br />

`@openinf/util-md-table` runs on
[supported versions of Node.js](#platform--node-js-lts) and is available via
**`npm`**, **`pnpm`**, or **`yarn`**.

**Using the npm CLI**

<sup>See the
[official documentation for this command](https://docs.npmjs.com/cli/commands/npm-install)
for more information.</sup>

```shell
npm i @openinf/util-md-table
```

**Using the pnpm CLI**

<sup>See the [official documentation for this command](https://pnpm.io/cli/add)
for more information.</sup>

```shell
pnpm add @openinf/util-md-table
```

**Using the Yarn 1 CLI (Classic)**

<sup>See the
[official documentation for this command](https://classic.yarnpkg.com/en/docs/cli/add)
for more information.</sup>

```shell
yarn add @openinf/util-md-table
```

<br />

</details>

### Usage

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

<br /><br />

### API

<a name="mdTbl2json"></a>

<picture>
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Mqxx/GitHub-Markdown/main/blockquotes/badge/light-theme/tip.svg">
  <img alt="Tip" src="https://raw.githubusercontent.com/Mqxx/GitHub-Markdown/main/blockquotes/badge/dark-theme/tip.svg">
</picture><br>

This API will be deprecated in the next release in favor of one that follows [Web Platform Design Principles](https://github.com/OpenINF/openinf-util-md-table/issues/187).

#### mdTbl2json(mdTbl, cellTransform, attribCellTransform) ⇒ <code>Array&lt;Object&gt;</code>

**Kind**: global function

| Param               | Type                                            | Description                              |
| ------------------- | ----------------------------------------------- | ---------------------------------------- |
| mdTbl               | <code>string</code>                             | A markdown table as a string.            |
| cellTransform       | <code>function</code> \| <code>undefined</code> | A function run on contents of each cell. |
| attribCellTransform | <code>function</code> \| <code>undefined</code> | A transform only for attribute cells.    |

<br /><br />

---

<br />

### Contributing

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change. If for whatever reason you spot something
to fix but cannot patch it yourself, please [open an issue][].

<br />

### License

This project is licensed under either of

- [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0)
- [MIT license](https://opensource.org/licenses/MIT)

at your option.

The [SPDX](https://spdx.dev) license identifier for this project is
`MIT OR Apache-2.0`.

<br /><br />

---

<br />

<div align="center">

### Show Your Support

<br />

If you like the project (or want to bookmark it)&nbsp;&mdash;<br />
&mdash;&nbsp;[give it a star ⭐️][]&nbsp;&mdash;&nbsp;it will greatly encourage
us.

<br /><br />

<a title="The OpenINF website" href="https://open.inf.is" rel="author">
  <img alt="The OpenINF logo" height="32px" width="32px" src="https://raw.githubusercontent.com/openinf/openinf.github.io/live/assets/img/svg/logo.svg?sanitize=true" />
</a>

</div>

<br /><br />

[![Orange banner indicating a preview software component][release-level-banner--unstable]](##)

<!-- BEGIN LINK DEFINITIONS -->
[conventional-commits-badge]: https://img.shields.io/badge/commit%20style-Conventional-%23fa6673?logoColor=white&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggc3R5bGU9ImZpbGw6ICNGRkYiIGQ9Ik0xNSwyQTEzLDEzLDAsMSwxLDIsMTUsMTMsMTMsMCwwLDEsMTUsMm0wLTJBMTUsMTUsMCwxLDAsMzAsMTUsMTUsMTUsMCwwLDAsMTUsMFoiLz48L3N2Zz4K 'Commit Style: Conventional Commits'
[conventional-commits-url]: https://www.conventionalcommits.org 'Commit Style: Conventional Commits'
[give it a star ⭐️]: https://github.com/OpenINF/openinf-util-md-table/stargazers
[license-badge--shields]: https://img.shields.io/badge/license-MIT%2FApache--2.0-blue.svg?logo=github 'License: MIT/Apache 2.0'
[license-badge-url]: #license 'License: MIT/Apache 2.0'
[matrix-badge--shields]: https://img.shields.io/badge/matrix-join%20chat-%2346BC99?logo=matrix 'Chat on Matrix'
[matrix-url]: https://matrix.to/#/#openinf-space:matrix.org 'You&apos;re invited to talk on Matrix'
[npm-badge--shields]: https://img.shields.io/npm/v/@openinf/util-md-table/latest.svg?logo=npm&color=fe7d37 'View on npm'
[npm-badge-url]: https://www.npmjs.com/package/@openinf/util-md-table#top 'View on npm'
[open an issue]: https://github.com/OpenINF/openinf-util-md-table/issues
[prettier-badge]: https://img.shields.io/badge/code_style-Prettier-ff69b4.svg?logo=prettier 'Code Style: Prettier'
[prettier-url]: https://prettier.io/playground 'Code Style: Prettier'
[project-status-badge]: https://img.shields.io/badge/project%20status-under%20construction-orange 'Project Status: Under construction badge'
[release-level-banner--unstable]: https://raw.githubusercontent.com/OpenINF/openinf.github.io/live/assets/img/svg/release-level-banner--unstable.svg?sanitize=true 'Banner for Release Level: Unstable'
<!-- END LINK DEFINITIONS -->
