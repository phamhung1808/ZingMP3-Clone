import React from 'react'
import styled from 'styled-components'
import '../styles/sidebar.scss'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 17%;
    height: calc(100vh - 89px);
    background: #840d6a;
    z-index: 1000;
    position: relative;
`

export default function sidebar() {

    return (
        <Container>
            <div className="logo">
                <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg" alt="" />
            </div>
            <div className="list-menu">
                <Link to='/'>
                    <div className="menu-item">
                        <i class="bi bi-music-note-list"></i>
                        <span>Cá Nhân</span>
                    </div>
                </Link>
                <Link to='/khampha'>
                    <div className="menu-item">
                        <i class="bi bi-vinyl-fill"></i>
                        <span>Khám Phá</span>
                    </div>
                </Link>
                <Link to='/zingchart'>
                    <div className="menu-item">
                        <i class="bi bi-soundwave"></i>
                        <span>#zingchart</span>
                    </div>
                </Link>
                <Link to='/radio'>
                    <div className="menu-item">
                        <i class="bi bi-ui-radios"></i>
                        <span>Radio<span className='live'>LIVE</span></span>
                    </div>
                </Link>
                <Link to='/theodoi'>
                    <div className="menu-item">
                        <i class="bi bi-boombox"></i>
                        <span>Theo Dõi</span>
                    </div>
                </Link>
                <div className="line"></div>
                <div className="child-menu">
                    <div className="menu-item">
                        <i class="bi bi-music-note-beamed"></i>
                        <span>Nhạc Mới</span>
                    </div>
                    <div className="menu-item">
                        <i class="bi bi-columns-gap"></i>
                        <span>Thể Loại</span>
                    </div>
                    <div className="menu-item">
                        <i class="bi bi-stars"></i>
                        <span>Top 100</span>
                    </div>
                    <div className="menu-item">
                        <i class="bi bi-badge-hd-fill"></i>
                        <span>MV</span>
                    </div>
                    <div className="QC">
                        <h5>Nghe nhạc không quảng cáo cùng kho nhạc vip</h5>
                        <div className="upvip">Nâng VIP</div>
                    </div>
                </div>
                <div className="addplaylist">
                    <i class="bi bi-plus-circle"></i>
                    <span>Tạo Playlist Mới</span>
                </div>
            </div>
        </Container >
    )
}
