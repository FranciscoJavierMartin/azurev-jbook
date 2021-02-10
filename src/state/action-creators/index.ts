import { ActionType } from '../action-types';
import {
  DeleteCellAction,
  InsertCellBeforeAction,
  MoveCellAction,
  UpdateCellAction,
} from '../actions';
import { CellMovesTypes, CellTypes } from '../cell';

export const updateCell = (id: string, content: string): UpdateCellAction => ({
  type: ActionType.UPDATE_CELL,
  payload: {
    id,
    content,
  },
});

export const deleteCell = (id: string): DeleteCellAction => ({
  type: ActionType.DELETE_CELL,
  payload: id,
});

export const moveCell = (
  id: string,
  direction: CellMovesTypes
): MoveCellAction => ({
  type: ActionType.MOVE_CELL,
  payload: {
    id,
    direction,
  },
});

export const insertCellBefore = (
  id: string | null,
  cellType: CellTypes
): InsertCellBeforeAction => ({
  type: ActionType.INSERT_CELL_BEFORE,
  payload: {
    id,
    type: cellType,
  },
});
