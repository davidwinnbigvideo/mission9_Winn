import React from 'react';
import './App.css';
// import TeamNames from './CollegeBasketballTeams.json';

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

const TeamNames: TeamProps[] = require('./CollegeBasketballTeams.json').teams;

function Welcome() {
  return (
    <div>
      <h1>
        Here is a list of all the NCAA Basketball teams. Good luck with your
        madness!
      </h1>
      <br></br>
    </div>
  );
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;
    return (
      <div>
        <h2>Name: {oneTeam.school}</h2>
        <h3>Members: {oneTeam.name}</h3>
        <h3>
          Formed: {oneTeam.city}, {oneTeam.state}
        </h3>
        <br></br>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {TeamNames.map((team) => (
        <Team {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
