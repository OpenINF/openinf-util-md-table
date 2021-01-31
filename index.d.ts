/**
 * @license
 * Copyright OpenINF All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://open.inf.is/license
 */
/**
 * @param {string} mdTbl A markdown table as a string.
 * @param {Function?} cellTransform A function run on contents of each cell.
 * @param {Function?} attribCellTransform A transform only for attribute cells.
 * @returns {Array<Object>}
 */
export declare function mdTbl2json(mdTbl: string, cellTransform: (Function | undefined), attribCellTransform: (Function | undefined)): string[];
