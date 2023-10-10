import logo from './logo.svg';
import './App.css';
import Header from './_components/header/header';
function App() {
  const onLogoutClick = () => {
    alert("Logout");
  }
  const onSettingsClick = () => {
    alert("Settings");
  }
  return (
    <div className="App">
      <header className="App-header">
        <Header
        name="Sachin"
        onSettingsClick={onSettingsClick}
        onLogoutClick={onLogoutClick}></Header>
      </header>
    </div>
  );
}

export default App;
