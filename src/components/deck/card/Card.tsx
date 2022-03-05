import { Component, ReactNode } from 'react';
import './Card.css';

type Props = {
    number: number,
    suit: string,
    isFaceUp: boolean
};
type State = {
    number: number,
    suit: string,
    isFaceUp: boolean
};
export class Card extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            number: props.number,
            suit: props.suit,
            isFaceUp: props.isFaceUp
        }
    }

    render(): ReactNode {
        return (
            <div className='card'>
                {
                    this.state.isFaceUp
                        ? <p>"Face up"</p>
                        : <p>"Face down"</p>
                }
            </div>
        )
    }
}