import { gameReducer } from './gameReducer';
import { MAKE_MOVE } from '../actions/gameActions';

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

const winningXState = {
    0: 1,
    1: 0,
    2: 1,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    finished: false,
    moves: 2,
    player: true,
    winner: false
}

const winningOState = {
    0: -1,
    1: 0,
    2: -1,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    finished: false,
    moves: 2,
    player: false,
    winner: false
}

const drawState = {
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
    moves: 8,
    player: true,
    winner: undefined
}

const exampleAction = {
    player: true,
    position: 1,
    type: MAKE_MOVE as MAKE_MOVE
};

describe('Game Reducer', () => {
    describe('action type MAKE_MOVE', () => {
        it('should make a mark, increment moves for X, and switch players', () => {
            const expected = Object.assign({}, initialState, { 1: 1, moves: 1, player: false });

            expect(gameReducer(undefined, exampleAction)).toEqual(expected);
        })

        it('should make a mark and increment moves for O', () => {
            const expected = Object.assign({}, initialState, { 1: -1, moves: 1, player: true });

            expect(gameReducer(undefined, {
                player: false,
                position: 1,
                type: MAKE_MOVE
            })).toEqual(expected);
        })

        it('should declare a victory for X', () => {
            const expected = Object.assign({}, winningXState, { 1: 1, finished: true, moves: 3, player: false, winner: true });

            expect(gameReducer(winningXState, exampleAction)).toEqual(expected);
        })

        it('should declare a victory for O', () => {
            const expected = Object.assign({}, winningOState, { 1: -1, finished: true, moves: 3, player: true, winner: false });

            expect(gameReducer(winningOState, {
                player: false,
                position: 1,
                type: MAKE_MOVE
            })).toEqual(expected);
        })

        it('should declare a draw', () => {
            const expected = Object.assign({}, drawState, { 1: 1, finished: true, moves: 9, player: false });

            expect(gameReducer(drawState, exampleAction)).toEqual(expected);
        })
    })
})