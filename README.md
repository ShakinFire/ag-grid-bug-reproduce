Reproduce steps:

Ag grid version: 30.0.0
Angular version: 15.1.0

1. Dynamically set state of the columns and filters with `setFilterModel()` and `applyColumnState()` where one of the columns should be pinned (doesn't matter left or right).
2. Add `[animatedRows]="true"` input to the grid.
3. Have your `rowData` assigned after an api call (or after any async operation, did it with `setTimeout()` for the example).
4. Examine 2 separate issues
   - Cannot read properties of null (reading 'toString') at RowNode.getRowIndexString (ag-grid-community.auto.esm.js:16970:30)
   - AG Grid: cannot get grid to draw rows when it is in the middle of drawing rows at RowRenderer.getLockOnRefresh (ag-grid-community.auto.esm.js:37501:19)
