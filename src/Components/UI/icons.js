import React, { Component } from 'react';
import './icons.css';

 class Icons extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div>
          {/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Icons</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="/dashboard">Home</a></li>
            <li className="breadcrumb-item active">Icons</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="card card-primary card-outline">
        <div className="card-header">
          <h3 className="card-title">Icons</h3>
        </div> {/* /.card-body */}
        <div className="card-body">
          <p>You can use any font library you like with AdminLTE 3.</p>
          <strong>Recommendations</strong>
          <div>
            <a href="https://fontawesome.com/">Font Awesome</a><br />
            <a href="https://useiconic.com/open/">Iconic Icons</a><br />
            <a href="http://ionicons.com/">Ion Icons</a><br />
          </div>
        </div>{/* /.card-body */}
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>
{/* /.content-wrapper */}

        </div>

        );
}
}



export default Icons