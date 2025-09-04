import './navbar.css'
import { Search, Settings, Notifications, SettingsOutlined, NotificationsOutlined } from '@mui/icons-material';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='companylogo'>
        <img src='/Icons/logo-main.svg' alt='company' />
        <h1>BankDash.</h1>
      </div>
      <div className="rightSideWrapper">
        <div className="searchBox">
          <Search className='searchIcon' />
          <input className='searchInput' type='search' placeholder='Search for something' />
        </div>
        <div className="iconWrapper">
          <SettingsOutlined className='settingsIcon' />
        </div>
        <div className="iconWrapper">
          <NotificationsOutlined className='notificationsIcon' />
        </div>
        <img className='userProfileIcon' src='https://i.pinimg.com/736x/12/05/9c/12059cfc3ebd75a318de3c257aca5971.jpg' alt='userProfile' />
      </div>
    </div>
  )
}
