import React,{Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 class Alerts extends Component {
     notifyA=()=> toast.success("Success Notification !",{
        position: toast.POSITION.TOP_RIGHT
      }, { autoClose: 4000 });
       notifyB=()=> toast.info("Info Notification !", {
        position: toast.POSITION.TOP_LEFT
      },{ autoClose: 3000 });
      notifyC=()=> toast.error("Error Notification !", {
        position: toast.POSITION.TOP_CENTER
      },{ autoClose: 2000 });
      notifyD=()=> toast.warning("Warning Notification !", {
        position: toast.POSITION.BOTTOM_RIGHT
      },{ autoClose: 1000 });
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
          <h1>
           React Toaster 
            
          </h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="/dashboard">Home</a></li>
            <li className="breadcrumb-item active"> React Toaster</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  <div className="card card-success card-outline">
            <div className="card-header">
              <h3 className="card-title">
                <i className="fas fa-edit" />
                Toaster Examples
              </h3>
            </div>
            <div className="card-body">
            <div class="col-md-3">
                        <button type="button" onClick={this.notifyA} class="btn btn-block btn-success btn-lg">Launch Success Toast</button>
                        <ToastContainer  />     
            </div>

            <div class="col-md-3">
                        <button type="button" onClick={this.notifyB} class="btn btn-block btn-info btn-lg">Launch Info Toast</button>
                        <ToastContainer />     
            </div>
            <div class="col-md-3">
                        <button type="button" onClick={this.notifyC} class="btn btn-block btn-danger btn-lg">Launch Danger Toast</button>
                        <ToastContainer   />     
            </div>
            <div class="col-md-3">
                        <button type="button" onClick={this.notifyD} class="btn btn-block btn-warning btn-lg">Launch Warning Toast</button>
                        <ToastContainer  />     
            </div>
            
              
            </div>
            {/* /.card */}
          </div>
        </div>
    </div>
    );
}
}
export default Alerts