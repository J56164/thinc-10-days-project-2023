import './TopBar.css'
import UserImage from './UserImage'

function TopBar() {
    return (
        <>
        <div className="top-bar">
            <span className="material-symbols-outlined">
                menu
            </span>
            <UserImage></UserImage>
            <div>
                10000 <span className="material-symbols-outlined">
                    lightbulb
                </span>
            </div>
        </div>
        </>
    )
}

export default TopBar