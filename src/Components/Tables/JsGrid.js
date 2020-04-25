import React, { Component } from 'react'

export class JsGrid extends Component {
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
          <h1>jsGrid</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">jsGrid</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">jsGrid</h3>
      </div>
      {/* /.card-header */}
      <div className="card-body">
        <div id="jsGrid1" />
      </div>
      {/* /.card-body */}
    </div>
    {/* /.card */}
  </section>
  {/* /.content */}
</div>
{/* /.content-wrapper */}

            </div>
        )
    }
}

export default JsGrid
