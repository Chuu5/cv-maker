import { Component } from "react";
import Education from "./components/Education/Education";
import Experience from "./components/experience/Experience";
import FirstSection from "./components/General/FirstSection";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <header>
          <h2>MY CV</h2>
        </header>
        <FirstSection />
        <Experience />
        <Education />

      </div>
    )
  }
}

export default App
