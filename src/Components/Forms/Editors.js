import React, { Component } from 'react'

export class Editors extends Component {
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
          <h1>Text Editors</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="/dashboard">Home</a></li>
            <li className="breadcrumb-item active">Text Editors</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="row">
      <div className="col-md-12">
        <div className="card card-outline card-info">
          <div className="card-header">
            <h3 className="card-title">
              Bootstrap WYSIHTML5
              <small>Simple and fast</small>
            </h3>
            {/* tools box */}
            <div className="card-tools">
              <button type="button" className="btn btn-tool btn-sm" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i className="fas fa-minus" /></button>
              <button type="button" className="btn btn-tool btn-sm" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                <i className="fas fa-times" /></button>
            </div>
            {/* /. tools */}
          </div>
          {/* /.card-header */}
          <div className="card-body pad">
            <div className="mb-3">
              <textarea className="textarea" placeholder="Place some text here" style={{width: '100%', height: 200, fontSize: 14, lineHeight: 18, border: '1px solid #dddddd', padding: 10}} defaultValue={""} />
            </div>
            <p className="text-sm mb-0">
              Editor <a href="https://github.com/summernote/summernote">Documentation and license
                information.</a>
            </p>
          </div>
        </div>
      </div>
      {/* /.col*/}
    </div>
    {/* ./row */}
  </section>
  {/* /.content */}
</div>
{/* /.content-wrapper */}

            </div>
        )
    }
}

export default Editors
