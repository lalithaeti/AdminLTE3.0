import React, { Component } from 'react';
import './rolemanagement.css';
var ROLE_MATRIX = require('../Server/rolematrix.json');

class Rolemanagement extends Component {
   constructor(props){
     super(props);
      let role_matrix = JSON.parse(localStorage.getItem('role_matrix'));
      if (role_matrix) {
        this.state = {
          role_matrix: role_matrix
        }
      } else {
        localStorage.setItem('role_matrix', JSON.stringify(ROLE_MATRIX["data"]))
        this.state = {
          role_matrix: ROLE_MATRIX["data"]
        }
      }
     console.log(this.state.role)
    }
  
  render() {

    var that = this;
    var permissions = function (permission, roleIndex, clientIndex) {
      var handlepermission = function (e, perIndex, i) {
        var role_matrix = that.state.role_matrix;
        role_matrix[clientIndex]['roleList'][roleIndex]['permissions'][perIndex]['privilege'][i] = e.target.checked ? 1 : 0;
        that.setState({ role_matrix });
        localStorage.setItem('role_matrix', JSON.stringify(role_matrix));
      }
      return permission.map((per, i) => {
        return (
          // <div className="row">
          //   <div className="col-lg-4 permission">
          //     <lable>{per.moduleDisplayName}</lable>
          //   </div>
          //   <div className="col-lg-8">
          //     <div className="col-lg-2 permission"><input type="checkbox" checked={per.privilege[0] == 0 ? false : true} onChange={(e) => { handlepermission(e, i, 0) }} /><label>Create</label></div>
          //     <div className="col-lg-2 permission"><input type="checkbox" checked={per.privilege[1] == 0 ? false : true} onChange={(e) => { handlepermission(e, i, 1) }} /><label>Read</label></div>
          //     <div className="col-lg-2 permission"><input type="checkbox" checked={per.privilege[2] == 0 ? false : true} onChange={(e) => { handlepermission(e, i, 2) }} /><label>Update</label></div>
          //     <div className="col-lg-2 permission"><input type="checkbox" checked={per.privilege[3] == 0 ? false : true} onChange={(e) => { handlepermission(e, i, 3) }} /><label>Delete</label></div>
          //   </div>
          // </div>
          <tr >
            <td>{per.moduleDisplayName}</td>
            <td><input type="checkbox" checked={per.privilege[0] == 0 ? false : true} onChange={(e) => { handlepermission(e, i, 0) }} />Create</td>
            <td><input type="checkbox" checked={per.privilege[1] == 0 ? false : true} onChange={(e) => { handlepermission(e, i, 1) }} />Read</td>
            <td><input type="checkbox" checked={per.privilege[2] == 0 ? false : true} onChange={(e) => { handlepermission(e, i, 2) }} />Update</td>
            <td><input type="checkbox" checked={per.privilege[3] == 0 ? false : true} onChange={(e) => { handlepermission(e, i, 3) }} />Delete</td>
          </tr>
        )

      })
    }
    var rolList = function (rolelist, clientIndex) {
      return rolelist.map((role, roleIndex) => {
        return (
          <div className="row">
          <div className="col-lg-11">
          <div className="card">
            <div className="box-header with-border">
              <div className="card-header" id="heading-1-1-1">
                <h5 className="mb-0">
                  <a className="collapsed" role="button" data-toggle="collapse" href={"#collapse-1-1-"+ roleIndex} aria-expanded="false" aria-controls={"#collapse-1-1-"+ roleIndex}>
                    <i className="fa fa-user"></i> <label>{role.roleDisplayName}</label> 
                  </a>
                </h5>
              </div>
            </div>
            <div id={"collapse-1-1-" + roleIndex} className="collapse" data-parent="#accordion-1-1" aria-labelledby="heading-1-1-1">
              <div className="card-body">

                <table className="table nowrap">
                  <tbody>
                    {permissions(role.permissions, roleIndex, clientIndex, that)}
                  </tbody>
                </table>
                <button type="submit" className="modifybtn" >Modify</button>

              </div>
            </div>
          </div>
        </div>
         <div className="col-lg-1">
        <i className="fa fa-edit"></i>
      </div>
    </div>
        )
      })
    }

    var clients = this.state.role_matrix.map((client, clientIndex) => {
      return (
        <div className="box">
          <div className="box-header with-border">
            <div id="collapse-1" className="collapse show" data-parent="#accordion" aria-labelledby="heading-1">
              <div className="card">
                <div id="accordion-1">
                  <div className="card-header with-border">
                    <div className="card-header" id="heading-1-1">
                      <h5 className="mb-0">
                        <a className="collapsed" role="button" data-toggle="collapse" href={"#collapse-1-" + clientIndex} aria-expanded="false" aria-controls={"collapse-1-" + clientIndex}>
                          <i className="fa fa-users"></i><label>{client.clientName}</label>
                        </a>
                      </h5>
                    </div>

                    <div id={"collapse-1-" + clientIndex} className="collapse" data-parent="#accordion-1" aria-labelledby="heading-1-1">
                      <div className="card-body">
                        <div id="accordion-1-1">
                          <br />
                          {/* <div className="row">
                            <div className="col-lg-11"> */}
                              {rolList(client.roleList, clientIndex)}
                            {/* </div>
                            <div className="col-lg-1">
                              <i className="fa fa-edit"></i>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
      return(
      
<div className="content-wrapper">
<section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Rolemanagement Preview</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="/dashboard">Home</a></li>
            <li className="breadcrumb-item active">Rolemanagement</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
 <br/><br/>
  {/* AddRole */}
  <div className="addicon" >
    <i className="fa fa-plus-circle fa-lg" data-toggle="modal" data-target="#addRole"></i>
  </div>
  {/* AddRole PopUp */}
  <div className="modal fade" id="addRole" role="dialog">
    <div className="modal-dialog">
  
      <div className="modal-content">
        <div className="modal-header">
        <h4 className="modal-title"> Add Role</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-lg-6">
              <label> Name*</label>
              <input type="text" placeholder="Enter Name"></input>
            </div>
            <div className="col-lg-6">
              <label>Display Name*</label>
              <input type="text" placeholder="Enter Display Name"></input>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label>Client*</label>
              <select placeholder="Enter Client">
                <option>Select Module</option>
                <option>123</option>
                <option>456</option>
              </select>
            </div>
            <div className="col-lg-6">
              <label>Module*</label>
              <select placeholder="Enter Module">
                <option>Select Module</option>
                <option>123</option>
                <option>456</option>
              </select>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" >Save</button>
            <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="content">
    {clients}
  </div>
</div>
     
      )
    }
  }

export default Rolemanagement;