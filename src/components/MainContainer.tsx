import { useState } from 'react'
import './MainContainer.css'
import TopBar from './TopBar'
import Content from './main_pages/Content'
import BottomBar from './BottomBar'

function MainContainer() {
    return (
        <>
            <div className="main-container">
                <TopBar></TopBar>
                <Content></Content>
                <BottomBar></BottomBar>
            </div>
        </>
    )
}

export default MainContainer