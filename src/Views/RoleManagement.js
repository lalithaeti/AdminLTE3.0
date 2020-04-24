import React, { Component } from 'react';
import '../Views/rolemanagement.css';
import { FormGroup, Label, Input, Card, CardBody, Col, Row,Button } from 'reactstrap';
var ROLE_MATRIX = require('../Server/rolematrix.json');

class Rolemanagement extends Component {

  constructor(props) {
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
    
    // this.privilegeChange= this.privilegeChange.bind(this)


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
          <tr>
            <td>{per.moduleDisplayName}</td>
            <td><input type="checkbox" checked={per.privilege[0] === 0 ? false : true} onChange={(e) => { handlepermission(e, i, 0) }} />Create</td>
            <td><input type="checkbox" checked={per.privilege[1] === 0 ? false : true} onChange={(e) => { handlepermission(e, i, 1) }} />Read</td>
            <td><input type="checkbox" checked={per.privilege[2] === 0 ? false : true} onChange={(e) => { handlepermission(e, i, 2) }} />Update</td>
            <td><input type="checkbox" checked={per.privilege[3] === 0 ? false : true} onChange={(e) => { handlepermission(e, i, 3) }} />Delete</td>
          </tr>
        )

      })
    }

    var rolList = function (rolelist, clientIndex) {
      return rolelist.map((role, roleIndex) => {
        return (
          <div className="box box-default">
            <div className="box-header with-border">
              <div className="card-header" id="heading-1-1-1">
                <h5 className="mb-0">
                  <a className="collapsed" role="button" data-toggle="collapse" href={"#collapse-1-1-"+ roleIndex} aria-expanded="false" aria-controls={"#collapse-1-1-"+ roleIndex}>
                    <i className="fa fa-user"></i>  {role.roleDisplayName}
                  </a>
                </h5>
              </div>
            </div>
            <div id={"collapse-1-1-" + roleIndex} className="collapse" data-parent="#accordion-1-1" aria-labelledby="heading-1-1-1">
              <div className="card-body">

                <table className="table  nowrap">
                  <tbody>
                    {permissions(role.permissions, roleIndex, clientIndex, that)}
                  </tbody>
                </table>
                <Button type="submit" className="modifybtn" >Modify</Button>

              </div>
            </div>
          </div>
        )
      })
    }

    var clients = this.state.role_matrix.map((client, clientIndex) => {
      return (
        <div className="box box-default ">
          <div className="card">
            <div id="collapse-1" className="collapse show" data-parent="#accordion" aria-labelledby="heading-1">
              <div className="card-body">
                <div id="accordion-1">
                  <div className="card">
                    <div className="card-header" id="heading-1-1">
                      <h5 className="mb-0">
                        <a className="collapsed" role="button" data-toggle="collapse" href={"#collapse-1-" + clientIndex} aria-expanded="false" aria-controls={"collapse-1-" + clientIndex}>
                          <i className="fa fa-users"></i>{client.clientName}
                        </a>
                      </h5>
                    </div>

                    <div id={"collapse-1-" + clientIndex} className="collapse" data-parent="#accordion-1" aria-labelledby="heading-1-1">
                      <div className="card-body">
                        <div id="accordion-1-1">
                          <br />
                          <div className="row">
                            <div className="col-lg-11">
                              {rolList(client.roleList, clientIndex)}
                            </div>
                            <div className="col-lg-1">
                              <i className="fa fa-edit"></i>
                            </div>
                          </div>
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


    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            RoleManagement  
          </h1>
          {/* <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
            <li><a href="#">Rolemanagement</a></li>
          </ol> */}
        </section>

        <div className="addicon">
          <div data-toggle="modal" data-target="#modal-default" style={{ marginTop: "50px" }}>
            <i className="fa fa-plus-circle fa-lg"></i>
          </div>
        </div>

        <div className="modal fade" id="modal-default">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span></button>
                <h4 className="modal-title"><b>ADD ROLE</b></h4>
              </div>
              <div className="modal-body">
                <div className="box-body">
                  <Row>
                    <Col xs="12" sm="12">
                      <Card>
                        <CardBody>
                          <FormGroup row className="my-0">
                            <Col md="6">
                              <FormGroup>
                                <Label htmlFor="name" >Name*</Label>
                                <Input type="text" id="name" className="form-control form-rounded" placeholder="Enter Name" />
                              </FormGroup>
                            </Col>
                            <Col md="6">
                              <FormGroup>
                                <Label htmlFor="name">Display Name*</Label>
                                <Input type="text" id="name" className="form-control form-rounded" placeholder="Enter Display Name" />
                              </FormGroup>
                            </Col>
                          </FormGroup>
                          <FormGroup row className="my-0">
                            <Col md="6">
                              <FormGroup>
                                <Label htmlFor="client">Client*</Label>
                                <Input type="select" id="client" className="form-control form-rounded" placeholder="Enter your city" >
                                  <option>Select Client</option>
                                  <option>1</option>
                                  <option>2</option>
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col md="6">
                              <FormGroup>
                                <Label htmlFor="module">Module*</Label>
                                <Input type="select" id="module" className="form-control form-rounded" placeholder="Postal Code">
                                  <option>Select Module</option>
                                  <option>1</option>
                                  <option>2</option>
                                </Input>
                              </FormGroup>
                            </Col>
                          </FormGroup>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>

                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" >Save</button>
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>

        <div className="content" >

          {clients}

        </div>
      </div>
    )
  }
}

export default Rolemanagement;