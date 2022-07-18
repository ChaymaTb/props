import {HandleMe, Image, Profile,  Welcom } from './profile/profile component/Profile';
import './App.css';
import "./profile/profile component/Profile.css";

function App() {
  const alertMyInput = fullName => alert(fullName);
  return (
    <div className="App">
      <Profile fullName="Chayma Taba" bio="From Gabes" profession="Web Developper"/>
      <Image />
      <HandleMe fullName="Chayma Taba" alertMyInput={alertMyInput}/>
    </div>
  );
}

export default App;
