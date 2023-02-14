import React, { useState, useEffect } from "react";
import { API_URL } from "../config/url";

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        imageUrl: 'http://i.imgflip.com/1bij.jpg'
    });
    const [allMemes, setAllMemes] = useState([])
    useEffect(() => {
        const getAllMemes = async () => {
            fetch(`${API_URL}get_memes`).then(async (res) => {
                if (res.ok) {
                    const data = await res.json()
                    setAllMemes(data.data.memes)
                }
                else {
                    console.log(res.status)
                }
            })
        }
        getAllMemes();

    }, [])


    const getMemeImage = () => {
        // const memesArray = allMemeImages.data.memes;
        const randomIndex = Math.floor(Math.random() * allMemes.length);
        // console.log(randomIndex)
        setMeme(prevData => ({
            ...prevData,
            imageUrl: allMemes[randomIndex].url
        }));

    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setMeme(prevData => ({
            ...prevData,
            [name]: value,
        }));
    }
    return (
        <main>
            <div className="form">
                <input
                    type={"text"}
                    value={meme.topText}
                    placeholder="Top Text"
                    className="form--input"
                    name="topText"
                    onChange={handleChange}
                />
                <input
                    type={"text"}
                    value={meme.bottomText}
                    placeholder="Bottom Text"
                    className="form--input"
                    name="bottomText"
                    onChange={handleChange}
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image  🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}
export default Meme;