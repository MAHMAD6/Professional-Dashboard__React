import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar';
import './app.css'
import Dashboard from './pages/Dashboard/dashboard';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
