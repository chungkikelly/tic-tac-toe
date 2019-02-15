export interface GameState {
    [position: number]: number;
    finished: boolean;
    moves: number;
    player: boolean;
    winner?: boolean;
}

export type StoreState = {
    game: GameState
}