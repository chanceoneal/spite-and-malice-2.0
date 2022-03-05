import { Component, ReactNode } from "react";
import { Deck } from "../deck/Deck";
import { Player } from "../player/Player";

export class Board extends Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div>
                <Deck isSideDeck={false}></Deck>
                <Player name='Chance'></Player>
            </div>
        )
    }
}