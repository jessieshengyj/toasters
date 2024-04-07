import logo from './logo.svg';
import './App.css';
import SidePanel from "./components/SidePanel";
import sendSMS from './sms';

function App() {

  const handleSendMessage = () => {
       const to = '+12269736916';
       const body = 'Hi';
    sendSMS(to, body)
        .then(() => {
          console.log('SMS sent successfully!');
        })
        .catch((error) => {
          console.error('Error sending SMS:', error);
        });
  };

  return (
    <div className="App">
      <SidePanel />
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
