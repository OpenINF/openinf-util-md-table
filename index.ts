// Copyright 2021 The OpenINF Authors. All rights reserved. MIT license.

/**
 * @param {string} mdTbl A markdown table as a string.
 * @param {!(Function | undefined)} cellTransform A function run on contents of each cell.
 * @param {!(Function | undefined)} attribCellTransform A transform only for attribute cells.
 * @returns {Array<Object>}
 */
export function mdTbl2json(mdTbl:string, cellTransform:(Function | undefined),
  attribCellTransform:(Function | undefined)):any[] {
  const allRows = mdTbl
    .split('\n')
    .map((row) => row.trim())
    .filter((row) => row && row.length);

  let allAttributes:string[] = [];
  const jsonTbl:string[] = [];

  allRows.forEach((row, index) => {
    if (index === 0) {
      // These become the keys in each object of the array of objects.
      const cells = row
        .split('|')
        .map((hd) => hd.trim())
        .filter((hd) => hd && hd.length);

      allAttributes = cells.map((value:string) => {
        const cell = cellTransform ? cellTransform(value) : value;
        return attribCellTransform ? attribCellTransform(cell) : cell;
      });
    } else if (index > 1) {
      let cells = row
        .split('|')
        .map((hd) => hd.trim())
        .filter((hd) => hd && hd.length);

      cells = cells.map((value:string) => {
        return cellTransform ? cellTransform(value) : value;
      });

      const cellsMap = new Map();

      allAttributes.forEach((value, index) => {
        cellsMap.set(value, cells[index]);
      });

      jsonTbl.push(Object.fromEntries(cellsMap));
    }
  });

  return jsonTbl;
}
