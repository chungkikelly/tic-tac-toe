// Constants

export const MAKE_MOVE = "MAKE_MOVE";
export type MAKE_MOVE = "MAKE_MOVE";

export const RESET_GAME = "RESET_GAME";
export type RESET_GAME = "RESET_GAME";

// Action Interfaces

export type GameAction = MakeMove | ResetGame;

export interface MakeMove {
    readonly player: boolean;
    readonly position: number;
    readonly type: MAKE_MOVE;
}

export interface ResetGame {
    readonly type: RESET_GAME;
}

// Action Creators 

export const makeMove = (player: boolean, position: number): MakeMove => ({
    player,
    position,
    type: MAKE_MOVE
});

export const resetGame = (): ResetGame => ({
    type: RESET_GAME
});