import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar';
import './app.css'


function App() {
  return (
    <div className="App">
      <Navbar className='navBar'/>
      <Sidebar className='sideBar'/>
    </div>
  );
}

export default App;
