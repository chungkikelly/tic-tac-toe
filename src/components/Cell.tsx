import * as React from 'react'

import { CellProps } from '../containers/CellContainer';

import './Cell.css'

export default class Cell extends React.Component<CellProps> {
    public render = () => {
        const { cell } = this.props;

        return (
            <div className={'cell'} onClick={this.handleClick}>
                {
                    this.renderMark(cell)
                }
            </div>
        )
    }

    private handleClick = () => {
        const { cell, finished, makeMove, player, pos } = this.props;

        if (cell === 0 && !finished) {
            makeMove(player, pos);
        }
    }

    private renderMark = (cell: number) => {
        if (cell > 0) {
            return (
                <svg className={'x'} strokeWidth="15" viewBox="0 0 128 128">
                    <path d="M16,16L112,112" />
                    <path d="M112,16L16,112" />
                </svg>
            )
        } else if (cell < 0) {
            return (
                <svg className={'circle'} strokeWidth="15" viewBox="0 0 128 128">
                    <path d="M64,16A48,48 0 1,0 64,112A48,48 0 1,0 64,16" />
                </svg>
            )
        } else {
            return ''
        }
    }
}