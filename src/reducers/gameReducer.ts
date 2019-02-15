import { GameAction, MAKE_MOVE, RESET_GAME } from '../actions/gameActions';
import { GameState } from '../state';

const initialState = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    finished: false,
    moves: 0,
    player: true,
    winner: undefined
}

export const gameReducer = (state: GameState = initialState, action: GameAction): GameState => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case MAKE_MOVE:
            newState[action.position] = action.player ? 1 : -1;

            winningCombos[action.position].map((combo: string) => {
                if (checkCombo(combo, newState)) {
                    newState.finished = true;
                    newState.winner = action.player;
                }
            })

            newState.moves += 1;
            if (newState.moves === 9) {
                newState.finished = true;
            }
            newState.player = !action.player;

            return newState;

        case RESET_GAME:
            return initialState;

        default:
            return state;
    }
};

const checkCombo = (combo: string, state: GameState): boolean => {
    return Math.abs(state[combo[0]] + state[combo[1]] + state[combo[2]]) === 3
}

const winningCombos: Record<number, string[]> = {
    0: ['012', '036', '048'],
    1: ['012', '147'],
    2: ['012', '258', '246'],
    3: ['345', '036'],
    4: ['345', '147', '048', '246'],
    5: ['345', '258'],
    6: ['678', '036', '246'],
    7: ['678', '147'],
    8: ['678', '258', '048']
};