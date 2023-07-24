"use client";
import { useEffect } from "react";
import "chessboardjs";

export default function Chessboard() {
    useEffect(() => {
        const board = ChessBoard("board1");
    }, []);

    return <div id="board1" style={{ width: 400 + "px" }}></div>;
}
