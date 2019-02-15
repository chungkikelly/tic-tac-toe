import { MAKE_MOVE, RESET_GAME, makeMove, resetGame } from "./gameActions";

describe('Game Actions', () => {
    describe('makeMove', () => {
        it('should create an action to make a move', () => {
            const player = true;
            const position = 1;

            const expectedAction = {
                player,
                position,
                type: MAKE_MOVE,
            };

            expect(makeMove(player, position)).toEqual(expectedAction);
        })
    })

    describe('resetGame', () => {
        it('should create an action to reset the game', () => {
            const expectedAction = {
                type: RESET_GAME
            }

            expect(resetGame()).toEqual(expectedAction);
        })
    })
})