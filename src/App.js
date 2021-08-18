import './App.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Carousel } from './Carousel';
function App() {
  console.log(window.innerWidth)
  return (
    <div className="App">
      <div className="app-container">
        <div className="heading">
          <div className="left">
            <ul className="live"><li>LIVE</li></ul>
            <h3>Upcoming Live Coaching</h3>
          </div>
          <div className="button-container">
            <button className="button prev-btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev"><NavigateNextIcon />
            </button>
            <button className="button" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"><NavigateNextIcon />
            </button>
          </div>
        </div>
        <Carousel />
      </div>
    </div>
    
  );
}

export default App;
