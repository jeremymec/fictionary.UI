import * as React from "react";

interface IPlayer {name: string}

const Player = ({ name }: IPlayer) => {
    return <text>{ name }</text>;
};

export default Player