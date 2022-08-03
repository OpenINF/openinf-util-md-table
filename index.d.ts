/**
 * @param {string} mdTbl A markdown table as a string.
 * @param {!(Function | undefined)} cellTransform A function run on contents of each cell.
 * @param {!(Function | undefined)} attribCellTransform A transform only for attribute cells.
 * @returns {Array<Object>}
 */
export declare function mdTbl2json(
  mdTbl: string,
  cellTransform: Function | undefined,
  attribCellTransform: Function | undefined
): any[];
