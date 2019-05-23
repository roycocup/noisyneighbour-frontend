import React from 'react';


class Report extends React.Component {

    constructor (props){
        super(props);
        this.state = { reporter_id: 1, email: null, address: null, description: null};
        this.emailChange = this.emailChange.bind(this);
        this.addressChange = this.addressChange.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    emailChange(event) {
        this.setState({email: event.target.value});
    }

    addressChange(event) {
        this.setState({address: event.target.value});
    }

    descriptionChange(event) {
        this.setState({description: event.target.value});
    }

    handleSubmit(event) {
        alert('This form is going to be submitted: ');
        this.sendIt()
        event.preventDefault();
    }

    sendIt(){
        fetch('http://localhost:8000/report', {
            method: 'POST',
            redirect: 'follow',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                reporter_id: this.state.reporter_id,
                email: this.state.email,
                address: this.state.address,
                description: this.state.description
            })
        })
    }


    render() {
        return (
            <div className="Form">
                <form onSubmit={this.handleSubmit}>
                    {/*TODO: needs a user here*/}
                    <input type="hidden" name="reporter_id" value="1"/>

                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" aria-describedby="email" 
                            placeholder="Enter email" onChange={this.emailChange}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" 
                        placeholder="Address" value={this.state.value} onChange={this.addressChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label><br/>
                        <textarea value={this.state.value} onChange={this.descriptionChange} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Report;
