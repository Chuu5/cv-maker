import { Component } from "react";
import EducationForm from "./EducationForm";

class Education extends Component {
    constructor(props) {
        super(props)

        this.state = {
            formation: [],
            display: false
        }

        this.setDisplay = this.setDisplay.bind(this)
        this.setEducation = this.setEducation.bind(this)
        this.removeEducation = this.removeEducation.bind(this)
    }

    setDisplay() {
        this.setState({
            display: !this.state.display
        })
    }

    setEducation(values) {
        this.setState({
            formation: [...this.state.formation, values]
        })
    }

    removeEducation(education) {
        let newEducations = this.state.formation.filter((educations) => {
            return educations !== education
        }) 

        if(newEducations) {
            this.setState({
                formation: newEducations
            })
        } else {
            this.setState({
                formation: []
            })
        }
    }
    
    render() {
        return (
            <section className="education">
                <h1>Education/Formation</h1>
                {this.state.display && <EducationForm setEducation={this.setEducation} setDisplay={this.setDisplay}/>}

                <div className="formations">
                    {this.state.formation.length > 0 ? this.state.formation.map( (formation, index) => {
                        return <div key={index} className="formation">
                            <div className="formation-text">

                                <h3>{formation.school}</h3>

                                <h3>{formation.degree}</h3>

                                <h4>{formation.startedDate}-{formation.endedDate}</h4>
                            </div>
                            <button className="remove"
                            onClick={() => this.removeEducation(formation)}>
                                <img src="../../../public/assets/trash.png" />
                            </button>
                        </div>
                    } ) : <h4>No Education added yet</h4>}
                </div>

                
                <button className="btn" onClick={this.setDisplay}>
                    <img src="../../../public/assets/pen.png" />
                </button>

            </section>
        )
    }
}

export default Education