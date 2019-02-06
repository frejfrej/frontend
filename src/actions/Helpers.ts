import { Action } from "redux";

export enum ActionType {
    OPEN_DRAWER,
    CLOSE_DRAWER,
    GROUP_EVALUATION_ON_LOAD,
    PERFORMER_SELECTED,
    EXERCISE_SELECTED,
    NEXT,
    SAVE_EXERCISE_RESULT,
    SAVE_CRITERIA_RESULT,
    SAVE_NEW_EVALUATION,
    SAVE_NEW_RANK,
}

export interface IAppAction extends Action<ActionType> {
    payload?: any;
}