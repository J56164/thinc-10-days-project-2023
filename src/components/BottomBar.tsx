import './BottomBar.css'
import BottomBarButton from './BottomBarButton'

function BottomBar() {
    return (
        <>
            <div className="bottom-bar">
                <BottomBarButton text="Home"></BottomBarButton>
                <BottomBarButton text="Ate History"></BottomBarButton>
                <BottomBarButton text="User"></BottomBarButton>
            </div>
        </>
    )
}

export default BottomBar