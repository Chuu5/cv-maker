import { Component } from "react";

class ExperienceForm extends Component {
    constructor(props) {
        super(props)
    }




    render() {
        let jobs = {}

        const {setDisplay, setJobs } = this.props
        
        return (
            <form className="experience-form" onSubmit={(e) => {
                e.preventDefault()
                setDisplay()
                setJobs(jobs)
            }}>
                <input type="text" required placeholder="Company" onChange={(e) => jobs.company = e.target.value}/>
                <input type="text" required placeholder="Role"
                onChange={(e) => jobs.role = e.target.value}/>
                <input type="text" required placeholder="Started Year"
                onChange={(e) => jobs.startedDate = e.target.value}/>
                <input type="text" required placeholder="Year Ended"
                onChange={(e) => jobs.endedDate = e.target.value}/>

                <button className="btn2">
                    <img src="https://cdn-icons-png.flaticon.com/512/983/983901.png" />
                </button>

                <button className="btn" onClick={() => setDisplay()}>
                    <img src="https://cdn-icons-png.flaticon.com/512/6467/6467149.png" />
                </button>
            </form>
        )
    }
}

export default ExperienceForm