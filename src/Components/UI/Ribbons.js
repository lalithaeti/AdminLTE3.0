import React, { Component } from 'react'

export class Ribbons extends Component {
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
          <h1>Ribbons</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="/dashboard">Home</a></li>
            <li className="breadcrumb-item active">Ribbons</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Ribbons</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <div className="row">
                <div className="col-sm-4">
                  <div className="position-relative p-3 bg-gray" style={{height: 180}}>
                    <div className="ribbon-wrapper">
                      <div className="ribbon bg-primary">
                        Ribbon
                      </div>
                    </div>
                    Ribbon Default <br />
                    <small>.ribbon-wrapper.ribbon-lg .ribbon</small>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="position-relative p-3 bg-gray" style={{height: 180}}>
                    <div className="ribbon-wrapper ribbon-lg">
                      <div className="ribbon bg-info">
                        Ribbon Large
                      </div>
                    </div>
                    Ribbon Large <br />
                    <small>.ribbon-wrapper.ribbon-lg .ribbon</small>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="position-relative p-3 bg-gray" style={{height: 180}}>
                    <div className="ribbon-wrapper ribbon-xl">
                      <div className="ribbon bg-secondary">
                        Ribbon Extra Large
                      </div>
                    </div>
                    Ribbon Extra Large <br />
                    <small>.ribbon-wrapper.ribbon-xl .ribbon</small>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-4">
                  <div className="position-relative p-3 bg-gray" style={{height: 180}}>
                    <div className="ribbon-wrapper ribbon-lg">
                      <div className="ribbon bg-success text-lg">
                        Ribbon
                      </div>
                    </div>
                    Ribbon Large <br /> with Large Text <br />
                    <small>.ribbon-wrapper.ribbon-lg .ribbon.text-lg</small>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="position-relative p-3 bg-gray" style={{height: 180}}>
                    <div className="ribbon-wrapper ribbon-xl">
                      <div className="ribbon bg-warning text-lg">
                        Ribbon
                      </div>
                    </div>
                    Ribbon Extra Large <br /> with Large Text <br />
                    <small>.ribbon-wrapper.ribbon-xl .ribbon.text-lg</small>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="position-relative p-3 bg-gray" style={{height: 180}}>
                    <div className="ribbon-wrapper ribbon-xl">
                      <div className="ribbon bg-danger text-xl">
                        Ribbon
                      </div>
                    </div>
                    Ribbon Extra Large <br /> with Extra Large Text <br />
                    <small>.ribbon-wrapper.ribbon-xl .ribbon.text-xl</small>
                  </div>
                </div>
              </div>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>
{/* /.content-wrapper */}

            </div>
        )
    }
}

export default Ribbons
