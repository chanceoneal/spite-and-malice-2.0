import { Component, ReactNode } from "react";
import { Card } from "../../deck/card/Card";

export class Hand extends Component<{}, {}> {

    render(): ReactNode {
        return (
            <div>
                <h4>Here's the Hand</h4>
                <Card number={1} suit="Hearts" isFaceUp={true} />
            </div>
        )
    }
}