/**
 * @license
 * Copyright OpenINF All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://open.inf.is/license
 */

const { mdTbl2json }  = require('./index.js');

const sampleTable = [
'| Col1  | Col2  | Col3  | Col4  |',
'|:-----:|:-----:|:-----:|:-----:|',
'| one   | two   | three | four  |',
'| Fee   | Fie   | Foe   | Fum   |',
].join('\n');

const sampleTableObject = mdTbl2json(sampleTable, (v) => v.toLowerCase());

console.log(sampleTableObject);
