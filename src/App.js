import './App.css';
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage'
import Page2 from './components/Page2/page2'
import Page3 from './components/Page3/page3'
import Page4 from './components/Page4/page4'
import Page5 from './components/Page5/page5'
import Page6 from './components/Page6/page6';
import Footer from './components/Footer/footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 /> 
      <Footer/>
    </div>
  );
}

export default App;
