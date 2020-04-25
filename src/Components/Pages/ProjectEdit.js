import React, { Component } from 'react'

export class ProjectEdit extends Component {
    render() {
        return (
            <div>
               {/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Project Edit</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="/dashboard">Home</a></li>
            <li className="breadcrumb-item active">Project Edit</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="row">
      <div className="col-md-6">
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">General</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i className="fas fa-minus" /></button>
            </div>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="inputName">Project Name</label>
              <input type="text" id="inputName" className="form-control" defaultValue="AdminLTE" />
            </div>
            <div className="form-group">
              <label htmlFor="inputDescription">Project Description</label>
              <textarea id="inputDescription" className="form-control" rows={4} defaultValue={"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr."} />
            </div>
            <div className="form-group">
              <label htmlFor="inputStatus">Status</label>
              <select className="form-control custom-select">
                <option selected disabled>Select one</option>
                <option>On Hold</option>
                <option>Canceled</option>
                <option selected>Success</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="inputClientCompany">Client Company</label>
              <input type="text" id="inputClientCompany" className="form-control" defaultValue="Deveint Inc" />
            </div>
            <div className="form-group">
              <label htmlFor="inputProjectLeader">Project Leader</label>
              <input type="text" id="inputProjectLeader" className="form-control" defaultValue="Tony Chicken" />
            </div>
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
      <div className="col-md-6">
        <div className="card card-secondary">
          <div className="card-header">
            <h3 className="card-title">Budget</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i className="fas fa-minus" /></button>
            </div>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="inputEstimatedBudget">Estimated budget</label>
              <input type="number" id="inputEstimatedBudget" className="form-control" defaultValue={2300} step={1} />
            </div>
            <div className="form-group">
              <label htmlFor="inputSpentBudget">Total amount spent</label>
              <input type="number" id="inputSpentBudget" className="form-control" defaultValue={2000} step={1} />
            </div>
            <div className="form-group">
              <label htmlFor="inputEstimatedDuration">Estimated project duration</label>
              <input type="number" id="inputEstimatedDuration" className="form-control" defaultValue={20} step="0.1" />
            </div>
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
        <div className="card card-info">
          <div className="card-header">
            <h3 className="card-title">Files</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i className="fas fa-minus" /></button>
            </div>
          </div>
          <div className="card-body p-0">
            <table className="table">
              <thead>
                <tr>
                  <th>File Name</th>
                  <th>File Size</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Functional-requirements.docx</td>
                  <td>49.8005 kb</td>
                  <td className="text-right py-0 align-middle">
                    <div className="btn-group btn-group-sm">
                      <a href="#" className="btn btn-info"><i className="fas fa-eye" /></a>
                      <a href="#" className="btn btn-danger"><i className="fas fa-trash" /></a>
                    </div>
                  </td>
                </tr><tr>
                  <td>UAT.pdf</td>
                  <td>28.4883 kb</td>
                  <td className="text-right py-0 align-middle">
                    <div className="btn-group btn-group-sm">
                      <a href="#" className="btn btn-info"><i className="fas fa-eye" /></a>
                      <a href="#" className="btn btn-danger"><i className="fas fa-trash" /></a>
                    </div>
                  </td>
                </tr><tr>
                  <td>Email-from-flatbal.mln</td>
                  <td>57.9003 kb</td>
                  <td className="text-right py-0 align-middle">
                    <div className="btn-group btn-group-sm">
                      <a href="#" className="btn btn-info"><i className="fas fa-eye" /></a>
                      <a href="#" className="btn btn-danger"><i className="fas fa-trash" /></a>
                    </div>
                  </td>
                </tr><tr>
                  <td>Logo.png</td>
                  <td>50.5190 kb</td>
                  <td className="text-right py-0 align-middle">
                    <div className="btn-group btn-group-sm">
                      <a href="#" className="btn btn-info"><i className="fas fa-eye" /></a>
                      <a href="#" className="btn btn-danger"><i className="fas fa-trash" /></a>
                    </div>
                  </td>
                </tr><tr>
                  <td>Contract-10_12_2014.docx</td>
                  <td>44.9715 kb</td>
                  <td className="text-right py-0 align-middle">
                    <div className="btn-group btn-group-sm">
                      <a href="#" className="btn btn-info"><i className="fas fa-eye" /></a>
                      <a href="#" className="btn btn-danger"><i className="fas fa-trash" /></a>
                    </div>
                  </td>
                </tr></tbody>
            </table>
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <a href="#" className="btn btn-secondary">Cancel</a>
        <input type="submit" defaultValue="Save Changes" className="btn btn-success float-right" />
      </div>
    </div>
  </section>
  {/* /.content */}
</div>
{/* /.content-wrapper */}

            </div>
        )
    }
}

export default ProjectEdit
