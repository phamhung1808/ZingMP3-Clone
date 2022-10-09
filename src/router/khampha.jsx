import React from "react";
import styled from "styled-components";
import Navbar from '../views/navbar';
import { imageslider, imagelately } from '../component/imagecomp';
import { listmusic } from '../component/playmusic';
import '../styles/khampha.scss';




const Container = styled.div`
    position: absolute;
    top: 0;
    right:0 ;
    background: #800064;
    width: 83%;
    height: calc(100vh - 89px);
    max-height: calc(100vh - 89px);
`

class Khampha extends React.Component {
    render() {
        return (
            <Container>
                <Navbar />
                <div className="content">
                    <div className="gradient">
                        <div className="slider">
                            {imageslider.map((img) => (
                                <div key={img.id} className="slider-image">
                                    <img src={img.image} alt="" />
                                    <i class="bi bi-play-circle"></i>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lately">
                        <h2>Gần Đây</h2>
                        <div className="lately-list">
                            {imagelately.map((img) => (
                                <div key={img.id} className="list-item">
                                    <img src={img.image} alt="" />
                                    <h5>{img.title}</h5>
                                    <i class="bi bi-play-circle"></i>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="newrelease">
                        <h2>Mới Phát Hành</h2>
                        <div className="btn">
                            <button>Bài Hát</button>
                            <button>ALBUM</button>
                        </div>
                        <div className="newsongs">
                            <div className="songs">
                                {listmusic.map(item => (
                                    <>
                                        <div className="song">
                                            <div className="flex">
                                                <img src={item.image} alt="" />
                                                <div className="song-info">
                                                    <div className="name">{item.name}</div>
                                                    <div className="singer">{item.singer}</div>
                                                    <p className="date">Hôm nay</p>
                                                </div>
                                            </div>
                                            <i className="bi bi-play-fill"></i>
                                        </div>
                                    </>
                                ))}
                            </div>
                            <div className="songs">
                                {listmusic.map(item => (
                                    <>
                                        <div className="song">
                                            <div className="flex">
                                                <img src={item.image} alt="" />
                                                <div className="song-info">
                                                    <div className="name">{item.name}</div>
                                                    <div className="singer">{item.singer}</div>
                                                    <p className="date">Hôm nay</p>
                                                </div>
                                            </div>
                                            <i className="bi bi-play-fill"></i>
                                        </div>
                                    </>
                                ))}
                            </div>
                            <div className="songs">
                                {listmusic.map(item => (
                                    <>
                                        <div className="song">
                                            <div className="flex">
                                                <img src={item.image} alt="" />
                                                <div className="song-info">
                                                    <div className="name">{item.name}</div>
                                                    <div className="singer">{item.singer}</div>
                                                    <p className="date">Hôm nay</p>
                                                </div>
                                            </div>
                                            <i className="bi bi-play-fill"></i>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}
export default Khampha;