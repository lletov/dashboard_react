import './source/css/style.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

function App() {
  return (
    <div className="app">
      <Header />
      <Dashboard />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
