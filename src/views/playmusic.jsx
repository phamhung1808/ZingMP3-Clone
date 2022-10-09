import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import '../styles/playmusic.scss';
import Player from '../component/player';
import { songsdata } from '../component/music';


const Container = styled.div`
z-index: 3000;
position: fixed;
height: 89px;
background: #63004e;
padding: 0 20px;
bottom: 0;
left: 0;
right: 0;
display: flex;
justify-content: space-between;
align-items: center;
`


const Playmusic = () => {

    const [songs, setSongs] = useState(songsdata);
    const [isplaying, setisplaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(songsdata[1]);

    const audioElement = useRef();

    useEffect(() => {
        if (isplaying) {
            audioElement.current.play();
        }
        else {
            audioElement.current.pause();
        }
    }, [isplaying])

    const onPlaying = () => {
        const duration = audioElement.current.duration;
        const ct = audioElement.current.currentTime;

        setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })

    }


    return (
        <Container>
            <div className="left music">
                <div className="thumb">
                    <div className="music-thumb">
                        <img src={currentSong.image} alt="" />
                    </div>
                    <div className="singer">
                        <h3 className="music-name">{currentSong.title}</h3>
                        <div className="singer-name">{currentSong.singer}</div>
                    </div>
                </div>
            </div>
            <div className="midle">
                {/* <input type="range" name="range" id="range" className="range" /> */}
                <audio src={currentSong.path} ref={audioElement} onTimeUpdate={onPlaying}></audio>
                <Player songs={songs}
                    setSongs={setSongs}
                    isplaying={isplaying}
                    setisplaying={setisplaying}
                    audioElement={audioElement}
                    currentSong={currentSong}
                    setCurrentSong={setCurrentSong} />
            </div>
            <div className="right">
                <i name='MV' className="bi bi-badge-hd-fill"></i>
                <i name='Micro' className="bi bi-mic"></i>
                <i className="bi bi-window-stack"></i>
                <i name='volume' className="bi bi-volume-up"></i>
                <input max="100" type="range" name="range" className='volume' />
            </div>
        </Container>
    )
}

export default Playmusic;