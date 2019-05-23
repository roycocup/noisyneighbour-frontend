import React from 'react';

export default class Register extends React.Component {

    constructor (props){
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.sendIt()
        event.preventDefault();
    }

    getUrl()
    {
        return 'http://' +
            process.env.REACT_APP_BACKEND_HOST +
            ':' + 
            process.env.REACT_APP_BACKEND_PORT + 
            '/register'
    }

    sendIt(){
        fetch(this.getUrl(), {
            method: 'POST',
            redirect: 'follow',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                cpassword: this.state.cpassword
            })
        })
    }


    render() {
        return (
            <div className="Form">
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="address">Name</label>
                        <input type="text" className="form-control"
                               placeholder="Address" value={this.state.value} 
                               onChange={ e => this.setState({name:e.target.value}) } 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" aria-describedby="email" 
                            placeholder="Enter email" 
                            onChange={ e => this.setState({email:e.target.value}) }/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" aria-describedby="password" 
                            placeholder="Enter password" 
                            onChange={ e => this.setState({password: e.target.value}) }/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" className="form-control" aria-describedby="password" 
                            placeholder="Confirm password" 
                            onChange={ e => this.setState({cpassword: e.target.value}) }/>
                    </div>

                    {/* <div className="form-group">
                        <label htmlFor="description">Something else</label><br/>
                        <textarea value={this.state.value} onChange={this.descriptionChange} />
                    </div> */}

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
