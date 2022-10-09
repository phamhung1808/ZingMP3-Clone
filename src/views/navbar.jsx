import React from 'react'
import styled from 'styled-components'
import '../styles/navbar.scss'
import avatar from '../images/phamanhhung.png'

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    background: #800064;
    align-items: center;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #b973aa;
`

export default function navbar() {
    return (
        <Container>
            <div className="search-bar">
                <button className='search-btn'><i class="fa-solid fa-magnifying-glass"></i></button>
                <input type="text" placeholder="Tìm kiếm bài hát, nghệ sĩ..." />
            </div>
            <div className="option">
                <i class="fa-solid fa-shirt"></i>
                <i class="fa-regular fa-gem"></i>
                <i class="fa-solid fa-download"></i>
                <i class="fa-sharp fa-solid fa-gear"></i>
                <img src={avatar} alt="" />
            </div>
        </Container>
    )
}
