import React from 'react'

export default class Roles extends React.Component {
    componentDidMount() {
        fetch('/rolematrix.json')
          .then(response => response.json())
          .then(data =>({tabledata:data.data}));
        }
    render() {
        return (
            <div className="content-wrapper">
                {/* <!-- Content Header (Page header) --> */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Role Management</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Layout</a></li>
                                    <li className="breadcrumb-item active">Role Management</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.container-fluid --> */}
                </section>

                {/* <!-- Main content -->  */}
                <section className="content">

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                {/* <!-- Default box --> */}
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Title</h3>
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                                                <i className="right fas fa-angle-left"></i></button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                       
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Title</h3>
                                                <div className="card-tools">
                                                    <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                                                        <i className="fas fa-minus"></i></button>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                Start creating your amazing application!
              </div>
                                            {/* <!-- /.card-body --> */}
                                        </div>
                                        {/* <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-edit"></i> </a> */}
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Title</h3>
                                                <div className="card-tools">
                                                    <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                                                        <i className="fas fa-minus"></i></button>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                Start creating your amazing application!
              </div>
                                            {/* <!-- /.card-body --> */}
                                        </div>

                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Title</h3>
                                                <div className="card-tools">
                                                <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                Start creating your amazing application!
              </div>
                                            {/* <!-- /.card-body --> */}
                                        </div>

                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Title</h3>
                                                <div className="card-tools">
                                                    <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                                                        <i className="fas fa-minus"></i></button>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                Start creating your amazing application!
              </div>
                                            {/* <!-- /.card-body --> */}
                                        </div>
                                    </div>
                                    {/* <!-- /.card-body --> */}
                                </div>
                                {/* <!-- /.card --> */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- /.content --> */}
            </div>
        )
    }
}