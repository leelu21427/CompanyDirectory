import './App.css';
import Company from './Components/Company/Company.js';
import Footer from './Components/Footer/Footer.js';
import Navbar from './Components/Navbar/Navbar.js';
import TopCompanies from './Components/TopCompanies/TopCompanies.js';
function App() {
  return (
    <div className="App">
      {/* Navbar at the top */}
      <Navbar />
      {/* <h1 className="text-center">The Easiest Way to get your Dream Job</h1> */}
      {/* Company list / grid */}
      <Company />
      {/*List of top companies*/}
      <TopCompanies/>
      {/*Footer*/}
      <Footer/>
    </div>
  );
}

export default App;
