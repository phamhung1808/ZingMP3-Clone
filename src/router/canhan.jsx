import React from 'react';
import styled from 'styled-components';
import Navbar from '../views/navbar';
import '../styles/canhan.scss';
import { listmusic } from '../component/playmusic';



const Container = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background: #800064;
    width: 83%;
    height: calc(100vh - 89px);
    max-height: calc(100vh - 89px);
`

class Canhan extends React.Component {
    render() {

        return (
            <Container>
                <Navbar />
                <div className="content">
                    {/* thư viện */}
                    <div className="library">
                        <h1>Thư viện</h1>
                        <i class="bi bi-play-fill"></i>
                    </div>
                    {/* playlist */}
                    <div className="playlist">
                        <div className="addlist">
                            <h3>PLAYLIST</h3>
                            <i class="bi bi-plus-circle"></i>
                        </div>
                        <div className="listconnect">
                            <div className="list-item">
                                <div className="image">
                                    <img src="https://photo-playlist-zmp3.zmdcdn.me/s3/mixtape?src=HavwqN7EYmrDGr6VBegUMHOLKPiyqPe401LHqMp6cG9M7L7KEyFFL51AMO0zaC5I04nPscoVnrDM4JRIEyAlKbOPDTG-tF4K01LpXZMNirqp3dIA0f7u07aR8D5KaVmI8a9zmrJ8_14Y6pF06SVyG7CKP9HEngaM8qy-bXl0yqLtJZl0JvAjGI9NQO4SdkiJCH0zrqh1iJJLYt6asADcUkPeXUVhqmag&cv=1&size=thumb/240_240" alt="" />
                                    <i class="bi bi-play-circle"></i>
                                </div>
                                <h4>Night of the Piano</h4>
                                <p>Phạm Anh Hưng</p>
                            </div>
                            <div className="list-item">
                                <div className="image">
                                    <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/covers/e/b/ebeb3aefdd11c0e8ac2a753881ad5c98_1378315547.jpg' },
                                        { id: 4, title: 'Mixtape Cheer Up', image: 'https://photo-playlist-zmp3.zmdcdn.me/s1/mixtape?src=HavwqN7EYmrDGr6VBegSG044GDyym8z0LGGKtsYEYbfI01tUFTo430K56emwYjPUKmT9tZ-9Xbu7MnpOSDh23miTJjCxc8iy41f2v3tJrdO7LmwZB9ENF4nN3wCaavOgIqa0goR4otz87rpzASR0AK0S3VWipySh5nnV-IsLtoC46LE_VuQOTr9F3EL8pCSmOmSyy29z&cv=1&size=thumb/240_240" alt="" />
                                    <i class="bi bi-play-circle"></i>
                                </div>
                                <h4>Night of the Piano</h4>
                                <p>Phạm Anh Hưng</p>
                            </div>
                            <div className="list-item">
                                <div className="image">
                                    <img src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/4/1/41f229e867c3787ed1ddee90a4bd2bbb_1506073807.jpg" alt="" />
                                    <i class="bi bi-play-circle"></i>
                                </div>
                                <h4>Night of the Piano</h4>
                                <p>Phạm Anh Hưng</p>
                            </div>
                            <div className="list-item">
                                <div className="image">
                                    <img src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/8/4/84ffbc3c35a04d698f157a129e68d51a_1499686528.jpg" alt="" />
                                    <i class="bi bi-play-circle"></i>
                                </div>
                                <h4>Night of the Piano</h4>
                                <p>Phạm Anh Hưng</p>
                            </div>
                            <div className="list-item">
                                <div className="image">
                                    <img src="https://source.unsplash.com/random" alt="" />
                                    <i class="bi bi-play-circle"></i>
                                </div>
                                <h4>Night of the Piano</h4>
                                <p>Phạm Anh Hưng</p>
                            </div>

                        </div>
                    </div>

                    <div className="col">
                        <h2>Bài hát</h2>
                        {listmusic.map((music, index) => (
                            <>
                                <div className="listmusic">
                                    <div className="thumb">
                                        <div className="music-thumb">
                                            <img src={music.image} alt="" />
                                        </div>
                                        <div className="singer">
                                            <h3 className="music-name">{music.name}</h3>
                                            <div className="singer-name">{music.singer}</div>
                                        </div>
                                    </div>
                                    <div className="play">
                                        <i className="bi bi-play-fill"></i>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </Container>
        )
    }
}

export default Canhan;