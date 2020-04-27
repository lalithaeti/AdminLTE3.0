import React from 'react'
import SimpleReactValidator from './simple-react-validator';

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            phone: ""
        }
        this.validator = new SimpleReactValidator();
        this.userName = this.userName.bind(this);
        this.phone = this.phone.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    userName(event) {
        this.setState({ userName: event.target.value })
    }
    phone(event) {
        this.setState({ phone: event.target.value })
    }
    submitForm(event) {
        event.preventDefault();
        if (this.validator.allValid()) {
            alert('You submitted the form and stuff!');
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }
    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>General Form</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">General Form</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Quick Example</h3>
                                    </div>
                                    <form role="form" >
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label >User Name</label>
                                                <input type="text" className="form-control" onChange={this.userName} placeholder="Enter User Name" required />
                                                {this.validator.message('Enter User name', this.state.userName, 'required|alpha_num', 'text-danger')}
                                            </div>
                                            <div className="form-group">
                                                <label >Phone</label>
                                                <input type="text" className="form-control" onChange={this.phone} placeholder="Enter Phone Number" required />
                                                {this.validator.message('Enter Phone Number ', this.state.phone, 'required|phone|min:10|max:13', 'text-danger')}
                                            </div>
                                            <div className="form-group">
                                                <label >File input</label>
                                                <div className="input-group">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" />
                                                        <label className="custom-file-label" >Choose file</label>
                                                    </div>
                                                    <div className="input-group-append">
                                                        <span className="input-group-text" >Upload</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label" >Check me out</label>
                                            </div>
                                        </div>

                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary" onClick={this.submitForm}>Submit</button>
                                        </div>
                                    </form>
                                </div></div></div></div></section></div>
        )
    }
}



