import React, { Component } from 'react'

export class Sliders extends Component {
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
          <h1>Sliders</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="/dashboard">Home</a></li>
            <li className="breadcrumb-item active">Sliders</li>
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
              <h3 className="card-title">Ion Slider</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <div className="row margin">
                <div className="col-sm-6">
                  <input id="range_1" type="text" name="range_1" defaultValue />
                </div>
                <div className="col-sm-6">
                  <input id="range_2" type="text" name="range_2" defaultValue="1000;100000" data-type="double" data-step={500} data-postfix=" €" data-from={30000} data-to={90000} data-hasgrid="true" />
                </div>
              </div>
              <div className="row margin">
                <div className="col-sm-6">
                  <input id="range_5" type="text" name="range_5" defaultValue />
                </div>
                <div className="col-sm-6">
                  <input id="range_6" type="text" name="range_6" defaultValue />
                </div>
              </div>
              <div className="row margin">
                <div className="col-sm-12">
                  <input id="range_4" type="text" name="range_4" defaultValue="10000;100000" />
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
      <div className="row">
        <div className="col-12">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Bootstrap Slider</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <div className="row margin">
                <div className="col-sm-6">
                  <div className="slider-red">
                    <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="horizontal" data-slider-selection="before" data-slider-tooltip="show" />
                  </div>
                  <p>.slider-red input.slider</p>
                  <div className="slider-blue">
                    <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="horizontal" data-slider-selection="before" data-slider-tooltip="show" />
                  </div>
                  <p>.slider-blue input.slider</p>
                  <div className="slider-green">
                    <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="horizontal" data-slider-selection="before" data-slider-tooltip="show" />
                  </div>
                  <p>.slider-green input.slider</p>
                  <div className="slider-yellow">
                    <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="horizontal" data-slider-selection="before" data-slider-tooltip="show" />
                  </div>
                  <p>.slider-yellow input.slider</p>
                  <div className="slider-teal">
                    <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="horizontal" data-slider-selection="before" data-slider-tooltip="show" />
                  </div>
                  <p>.slider-teal input.slider</p>
                  <div className="slider-purple">
                    <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="horizontal" data-slider-selection="before" data-slider-tooltip="show" />
                  </div>
                  <p>.slider-purple input.slider</p>
                </div>
                <div className="col-sm-6 d-flex justify-content-center">
                  <div className="slider-red mx-3">
                    <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="vertical" data-slider-selection="before" data-slider-tooltip="show" />
                  </div>
                  <div className="slider-blue mx-3">
                    <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="vertical" data-slider-selection="before" data-slider-tooltip="show" />
                  </div>
                  <div className="slider-green mx-3">
                    <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="vertical" data-slider-selection="before" data-slider-tooltip="show" />
                  </div>
                  <div className="slider-yellow mx-3">
                    <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="vertical" data-slider-selection="before" data-slider-tooltip="show" />
                  </div>
                  <div className="slider-teal mx-3">
                    <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="vertical" data-slider-selection="before" data-slider-tooltip="show" />
                  </div>
                  <div className="slider-purple mx-3">
                    <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="vertical" data-slider-selection="before" data-slider-tooltip="show" />
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
    </div>{/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>
{/* /.content-wrapper */}

            </div>
        )
    }
}

export default Sliders
