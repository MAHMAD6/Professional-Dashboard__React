import './sidebar.css'
import {
  Home, Paid, Person, 
  CreditCard, AccountBalance,
  DesignServices,
  Settings,
  Receipt
} from '@mui/icons-material';

export default function Sidebar() {
  return (
    <div className='sideBar'>
      <ul>
        <li className='tabItem active'>
          <Home className='tabIcom' />
          <p className='tabHeading'>Dashboard</p>
        </li>
        <li className='tabItem'>
          <Receipt className='tabIcom' />
          <p className='tabHeading'>Transactions</p>
        </li>
        <li className='tabItem'>
          <Person className='tabIcom' />
          <p className='tabHeading'>Accounts</p>
        </li>
        <li className='tabItem'>
          <Paid className='tabIcom' />
          <p className='tabHeading'>Investments</p>
        </li>
        <li className='tabItem'>
          <CreditCard className='tabIcom' />
          <p className='tabHeading'>Credit Cards</p>
        </li>
        <li className='tabItem'>
          <AccountBalance className='tabIcom' />
          <p className='tabHeading'>Loans</p>
        </li>
        <li className='tabItem'>
          <DesignServices className='tabIcom' />
          <p className='tabHeading'>Services</p>
        </li>
        <li className='tabItem'>
          <Settings className='tabIcom' />
          <p className='tabHeading'>Settings</p>
        </li>
      </ul>
    </div>
  )
}
