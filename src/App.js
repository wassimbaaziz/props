import './App.css';
import Profile from './Profile/Component/Profile';

function App() {
  const user={
    FullName:"Will Smith",
    Bio:"Willard Christopher Smith Jr. was born on 25 September 1968 in Philadelphia in the united states.",
    Profession:"Actor",
    image:"https://upload.wikimedia.org/wikipedia/commons/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg",  
  };
  const HandelName = ()=>{
    alert(`this the name of ${user.FullName}`)
  }
    return (
    <div className="App">
      <Profile user={user} HandelName={HandelName} />
    </div>
)}

export default App;
