import { Component } from "react";
import Inputs from "./Inputs"
import "../../styles/FirstSection.css"

class FirstSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Name: "",
            Description: "",
            Address: "",
            Email: "",
            Phone: "",
            Display: false
        }

        this.setDisplay = this.setDisplay.bind(this)
        this.updateName = this.updateName.bind(this)
        this.updateDesc = this.updateDesc.bind(this)
        this.updateAddress = this.updateAddress.bind(this)
        this.updateEmail = this.updateEmail.bind(this)
        this.updatePhone = this.updatePhone.bind(this)
    }

    setDisplay() {
        this.setState({
            Display: !this.state.Display
        })
    }

    updateName(value) {
        this.setState({
            Name: value
        })
    }

    updateDesc(value) {
        this.setState({
            Description: value
        })
    }

    updateAddress(value) {
        this.setState({
            Address: value
        })
    }

    updateEmail(value) {
        this.setState({
            Email: value
        })
    }

    updatePhone(value) {
        this.setState({
            Phone: value
        })
    }

    render() {

        return (
            <section>
                <div className="first-section">
                    <div className="field-name">
                        <h1>{this.state.Name || "Name"}</h1>
                        
                        <h2>{this.state.Description || "Description"}</h2>
                    </div>

                    <ul className="field-contacts">
                        <li>{this.state.Address || "Address"}</li>
                        <li>{this.state.Email || "Email"}</li>
                        <li>{this.state.Phone || "Phone"}</li>
                    </ul>
                </div>

                <button className="btn" onClick={() => this.setState({Display: true})}>
                    <img src="https://cdn-icons-png.flaticon.com/512/84/84380.png" />
                </button>

                {this.state.Display && <Inputs updateName={this.updateName} setDisplay={this.setDisplay} placeholders={this.state} updateDesc={this.updateDesc}
                updateAddress={this.updateAddress} updateEmail={this.updateEmail}
                updatePhone={this.updatePhone}/>}

            </section>
        )
    }

}

export default FirstSection