import { Component, ReactNode } from "react";
import { Dump } from "./dump/Dump";
import { Hand } from "./hand/Hand";
import { SideDeck } from "./sideDeck/SideDeck";

type Props = {
    name: string
};

type State = {
    name: string,
    hand: Hand,
    dump: Dump,
    sideDeck: SideDeck
};

export class Player extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: props.name,
            hand: new Hand({}),
            dump: new Dump({}),
            sideDeck: new SideDeck({})
        }
    }

    render(): ReactNode {
        return (
            <div>
                <h3>Hello, {this.state.name}!</h3>
                <Dump></Dump>
                <Hand></Hand>
                <SideDeck></SideDeck>
            </div>
        );
    }
}