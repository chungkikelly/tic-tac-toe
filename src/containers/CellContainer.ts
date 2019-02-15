import { connect } from 'react-redux';

import { makeMove, MakeMove } from '../actions/gameActions';
import Cell from '../components/Cell';
import { StoreState } from '../state';

type StateProps = {
    cell: number;
    finished: boolean;
    player: boolean;
};

type DispatchProps = {
    makeMove: (player: boolean, position: number) => MakeMove;
};

type OwnProps = {
    pos: number;
};

export type CellProps = StateProps & DispatchProps & OwnProps;

const mapStateToProps = (state: StoreState, ownProps: OwnProps): StateProps => ({
    cell: state.game[ownProps.pos],
    finished: state.game.finished,
    player: state.game.player
});

const mapDispatchToProps: DispatchProps = {
    makeMove
};

export const CellContainer = connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(Cell);