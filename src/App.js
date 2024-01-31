import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div>
  <div id="nav">
    <h1>Kahlil</h1>
    <div id="nav-items-cont">
      <p className="nav-item">about</p>
      <p className="nav-item">work</p>
      <p className="nav-item">contact</p>
    </div>
  </div>
  <main>
    <div className="section">
      <h3 className="section-title">About</h3>
      <div className="section-content">
        <p>Mollit aliquip id laborum aliquip eu pariatur qui labore nulla. Enim officia labore laborum reprehenderit anim et. Irure elit ullamco et anim commodo. Eiusmod et aliqua qui veniam cillum ut laboris esse tempor incididunt dolor.</p>
      </div>
    </div>
    <div className="section">
      <h3 className="section-title">Work</h3>
      <div className="section-content">
        <div id="work-cont">
          <div className="placeholder"><img src="https://user-images.githubusercontent.com/42008951/268752434-5b7f196f-879c-4af9-b3cc-cb48cbeeb2e0.png" alt /></div>
          <div className="placeholder"><img src="https://user-images.githubusercontent.com/42008951/268752434-5b7f196f-879c-4af9-b3cc-cb48cbeeb2e0.png" alt /></div>
          <div className="placeholder"><img src="https://user-images.githubusercontent.com/42008951/268752434-5b7f196f-879c-4af9-b3cc-cb48cbeeb2e0.png" alt /></div>
          <div className="placeholder"><img src="https://user-images.githubusercontent.com/42008951/268752434-5b7f196f-879c-4af9-b3cc-cb48cbeeb2e0.png" alt /></div>
        </div>
      </div>
    </div>
    <div className="section">
      <h3 className="section-title">Contact</h3>
      <div className="section-content">
        <div id="contact-cont">
          <p className="contact-item">Email: kahlil@example.com</p>
          <p className="contact-item">LinkedIn: mylinkedInn</p>
          <p className="contact-item">Github: www.github.com/kahlil-web-dev</p>
        </div>
      </div>
    </div>
    <footer>
      <a href="#nav">Back to Top!</a>
    </footer>
  </main></div>

    </div>
  );
}

export default App;
