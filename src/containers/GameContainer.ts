import { connect } from 'react-redux';

import { ResetGame, resetGame } from '../actions/gameActions';
import Game from '../components/Game';
import { StoreState } from '../state';

type StateProps = {
    cells: Record<number, number>;
    finished: boolean;
    moves: number;
    player: boolean;
    winner?: boolean;
};

type DispatchProps = {
    resetGame: () => ResetGame
};

export type GameProps = StateProps & DispatchProps;

const mapStateToProps = (state: StoreState): StateProps => {
    const { finished, moves, player, winner, ...cells } = state.game;

    return {
        cells,
        finished,
        moves,
        player,
        winner
    }
};

const mapDispatchToProps = {
    resetGame
};

export const GameContainer = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(Game);
