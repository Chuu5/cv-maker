import { Component } from "react";
import "../../styles/Inputs.css"

class Inputs extends Component {
    constructor(props) {
        super(props)
    }


    
    render() {
        const { placeholders, setDisplay, updateName, 
            updateDesc, updateAddress, updateEmail, updatePhone} = this.props 
        return (
            <form onSubmit={(e) => e.preventDefault()} className="inputs">

                <input type="text" placeholder="Full Name" value={placeholders.Name}
                onChange={(e) => updateName(e.target.value)}/>

                <input type="text" placeholder="Description" value={placeholders.Description}
                onChange={(e) => updateDesc(e.target.value)}/>

                <input type="text" placeholder="Address" value={placeholders.Address}
                onChange={(e) => updateAddress(e.target.value)}/>

                <input type="text" placeholder="Email" value={placeholders.Email}
                onChange={(e) => updateEmail(e.target.value)}/>

                <input type="text" placeholder="Phone" value={placeholders.Phone}
                onChange={(e) => updatePhone(e.target.value)}/>

                <button className="btn" onClick={() => setDisplay()}>
                    <img src="https://cdn-icons-png.flaticon.com/512/983/983901.png" />
                </button>
            </form>
        )
    }
}

export default Inputs