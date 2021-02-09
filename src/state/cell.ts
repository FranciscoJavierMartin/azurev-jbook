export type CellTypes ='code'|'text';
export type CellMovesTypes = 'up'|'down';

export interface Cell {
  id: string;
  type: CellTypes;
  content: string;
}
