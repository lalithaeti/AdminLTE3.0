import React from 'react'

export default class Header extends React.Component {
    handleSignOut = function () {
        localStorage.clear();
        window.location.href = "/";
      }

    render() {
        return (
            <nav className="main-header navbar navbar-expand navbar-primary navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="/dashboard" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="/contacts" className="nav-link">Contact</a>
                    </li>
                </ul>
                <form className="form-inline ml-3">
                    <div className="input-group input-group-sm">
                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-navbar" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>


                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="far fa-comments"></i>
                            <span className="badge badge-danger navbar-badge">3</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <a href="#" className="dropdown-item">
                                <div className="media">
                                    <img src="../assets/dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            Brad Diesel
                  <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-sm">Call me whenever you can

                </p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>

                            </a>
                            <div className="dropdown-divider left"></div>
                            <a href="#" className="dropdown-item">

                                <div className="media">
                                    <img src="../assets/dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            John Pierce
                  <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-sm">I got your message bro</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>

                            </a>
                            <div className="dropdown-divider left"></div>
                            <a href="#" className="dropdown-item">

                                <div className="media">
                                    <img src="../assets/dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            Nora Silvester
                  <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-sm">The subject goes here</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>

                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                        </div>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="far fa-bell"></i>
                            <span className="badge badge-warning navbar-badge">15</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-left">
                            <span className="dropdown-item dropdown-header">15 Notifications</span>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-envelope mr-2"></i> 4 new messages
            <span className="float-right text-muted text-sm">3 mins</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-users mr-2"></i> 8 friend requests
            <span className="float-right text-muted text-sm">12 hours</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-file mr-2"></i> 3 new reports
            <span className="float-right text-muted text-sm">2 days</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                        <img src="../assets/dist/img/user2-160x160.jpg" alt="User Avatar" style={{width:"30px", height:"30px"}} className=" img-circle " />
                            <span className="hidden-xs">Alexander Pierce</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-left">
                            <div className="dropdown-item dropdown-header"></div>
                            <div className="media">
                                    <img src="../assets/dist/img/user2-160x160.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            Alexander Pierce 
                                           <br/>
                                        </h3>
                                        <p className="text-sm">Member since Nov. 2012</p>
                                        <div className="pull-left">
                                            <a  onClick={this.handleSignOut} className="btn btn-primary btn-flat">Sign out</a>
                                            {/* <a onClick={this.handleSignOut} href="/forgotpassword" className="btn btn-default">Forgot Password</a> */}
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                            <i className="fas fa-th-large"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

