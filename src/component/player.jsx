import React, { useRef } from "react";

const Player = ({ audioElement, isplaying, setisplaying, currentSong, setCurrentSong, songs }) => {

    const clickRef = useRef();

    const PlayPause = () => {
        setisplaying(!isplaying);
    }
    const checkWidth = (e) => {
        let width = clickRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;

        const divprogress = offset / width * 100;
        audioElement.current.currentTime = divprogress / 100 * currentSong.length;

    }

    const skipBack = () => {
        const index = songs.findIndex(x => x.title == currentSong.title);
        if (index == 0) {
            setCurrentSong(songs[songs.length - 1])
        }
        else {
            setCurrentSong(songs[index - 1])
        }
        audioElement.current.currentTime = 0;

    }


    const skiptoNext = () => {
        const index = songs.findIndex(x => x.title == currentSong.title);

        if (index == songs.length - 1) {
            setCurrentSong(songs[0])
        }
        else {
            setCurrentSong(songs[index + 1])
        }
        audioElement.current.currentTime = 0;

    }

    return (
        <>
            <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
                <div className="seek_bar" style={{ width: `${currentSong.progress + "%"}` }}></div>
            </div>
            <div className="timer">
                <div className="duration"></div>
                <div className="controls">
                    <ion-icon name="infinite-outline" className="play-infinite"></ion-icon>
                    <ion-icon onClick={skipBack} name="play-back" className="play-back"></ion-icon>
                    <div className="play">
                        <div onClick={PlayPause} className="player-inner">
                            <ion-icon name="play" className="play-icon"></ion-icon>
                        </div>
                    </div>
                    <ion-icon onClick={skiptoNext} name="play-forward" className="play-forward"></ion-icon>
                    <ion-icon name="repeat-outline" className="play-repeat"></ion-icon>
                </div>
                <div className="remaining"></div>
            </div>
        </>
    )
}

export default Player;