import React from "react";
const Meme = () => {
    return <main>
        <div className="form">
            <input
                type={"text"}
                placeholder="Top Text"
                className="form--input"
            />
            <input
                type={"text"}
                placeholder="Bottom Text"
                className="form--input"
            />
            <button className="form--button">
                Get a new meme image  🖼
            </button>
        </div>
    </main>
}
export default Meme;