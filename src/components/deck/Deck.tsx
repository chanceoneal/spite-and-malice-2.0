import { Component, ReactNode } from 'react';
import { Card } from './card/Card';
import './Deck.css';

interface Props {
    isSideDeck: boolean 
}

interface State extends Props {
    
}
export class Deck extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            isSideDeck: props.isSideDeck
        };
    }
    render(): ReactNode {
        return (
            <div className='deck'>
                <Card number={0} suit='hearts' isFaceUp={this.state.isSideDeck}></Card>
            </div>
        )
    }
}