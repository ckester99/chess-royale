"use client";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        Chessboard("myBoard");
    }, []);

    return (
        <main>
            <h1>hello, world!</h1>
            <div id="myBoard" style={{ width: 400 + "px" }}></div>

            <script src="/scripts/jquery.min.js"></script>
            <script src="/scripts/chessboard-1.0.0.js"></script>
        </main>
    );
}
