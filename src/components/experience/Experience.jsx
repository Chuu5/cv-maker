import { Component } from "react";
import "../../styles/Experience.css"
import ExperienceForm from "./ExperienceForm";

class Experience extends Component {
    constructor(props) {
        super(props)

        this.state = {
            jobs: [],
            display: false
        }

        this.setDisplay = this.setDisplay.bind(this)
        this.setJobs = this.setJobs.bind(this)
        this.removeJob = this.removeJob.bind(this)
    }

    setDisplay() {
        this.setState({
            display: !this.state.display
        })
    }

    setJobs(values) {
        this.setState({
            jobs: [...this.state.jobs, values]
        })
    }

    removeJob(job) {
        let newJobs = this.state.jobs.filter((jobs) => {
            return jobs !== job
        }) 

        if(newJobs) {
            this.setState({
                jobs: newJobs
            })
        } else {
            this.setState({
                jobs: []
            })
        }
    }
    
    render() {
        return (
            <section className="experience">
                <h1>Work Experience</h1>
                {this.state.display && <ExperienceForm setJobs={this.setJobs} setDisplay={this.setDisplay}/>}

                <div className="jobs">
                    {this.state.jobs.length > 0 ? this.state.jobs.map( (job, index) => {
                        return <div key={index} className="job">
                            <div className="job-text">
                                <h3>{job.company} - {job.role}</h3>
                                <h4>{job.startedDate}-{job.endedDate}</h4>
                            </div>
                            <button className="remove"
                            onClick={() => this.removeJob(job)}>
                                <img src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" />
                            </button>
                        </div>
                    } ) : <h4>No work experience yet</h4>}
                </div>

                
                <button className="btn" onClick={this.setDisplay}>
                    <img src="https://cdn-icons-png.flaticon.com/512/84/84380.png" />
                </button>

            </section>
        )
    }
}

export default Experience