import { Component } from "react";

class EducationForm extends Component {
    constructor(props) {
        super(props)
    }




    render() {
        let formations = {}

        const {setDisplay, setEducation } = this.props
        
        return (
            <form className="education-form" onSubmit={(e) => {
                e.preventDefault()
                setDisplay()
                setEducation(formations)
            }}>
                <input type="text" required placeholder="School" onChange={(e) => formations.school = e.target.value}/>
                <input type="text" required placeholder="Degree or Certification"
                onChange={(e) => formations.degree = e.target.value}/>
                <input type="text" required placeholder="Started Year"
                onChange={(e) => formations.startedDate = e.target.value}/>
                <input type="text" required placeholder="Year Ended"
                onChange={(e) => formations.endedDate = e.target.value}/>

                <button className="btn2">
                    <img src="../../../public/assets/increment.png" />
                </button>

                <button className="btn" onClick={() => setDisplay()}>
                    <img src="../../../public/assets/Close.png" />
                </button>
            </form>
        )
    }
}

export default EducationForm