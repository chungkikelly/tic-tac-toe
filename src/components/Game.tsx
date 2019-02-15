import * as React from 'react';

import { CellContainer } from '../containers/CellContainer';
import { GameProps } from '../containers/GameContainer';

import './Game.css';

export default class Game extends React.Component<GameProps> {
    public render = () => {
        return (
            <div className={'game-container'}>
                <div className={'ending-message'}>
                    {this.renderMessage()}
                </div>
                <div className={'grid'}>
                    {this.renderCells()}
                </div>
                <div className={'ending-message'}>
                    {this.renderBottom()}
                </div>
            </div>
        )
    }

    private renderBottom = () => {
        const { finished, resetGame } = this.props;

        if (finished) {
            return (
                <button className={'button'} onClick={resetGame}>
                    Reset
                </ button>
            )
        } else {
            return ''
        }
    }

    private renderCells = () => {
        const result = [];

        for (let i = 0; i < 9; i++) {
            result.push(
                <CellContainer key={`cell-${i}`} pos={i} />
            );
        }

        return result;
    }

    private renderMessage = () => {
        const { finished, winner } = this.props;

        if (finished && winner !== undefined) {
            const player = winner ? 'Player X' : 'Player O';
            return `${player} WINS!`;
        } else if (finished) {
            return 'DRAW!';
        } else {
            return '';
        }
    }
}