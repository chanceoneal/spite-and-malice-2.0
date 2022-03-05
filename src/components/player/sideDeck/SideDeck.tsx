import React, { Component, ReactNode } from "react";
import { Deck } from "../../deck/Deck";

export class SideDeck extends Component<{}, {}> {
    render(): ReactNode {
        return (
            <div>
                <h5>This is the Side Deck. Play all cards to win.</h5>
                <Deck isSideDeck={true}></Deck>
            </div>
        )
    }
}