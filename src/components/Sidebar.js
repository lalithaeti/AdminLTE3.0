import React from 'react'
var LOGIN = require('../Server/loginadmin.json');
// console.log(LOGIN)

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginn: LOGIN["role"]
        }
    }
    render() {
        // console.log(this.state.loginn.permissions)
        const moduleName = this.state.loginn.permissions.map((item,moduleName) => {
            if (item.privilege[1] === 1) {
                return (
                    <div key={moduleName}>
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item has-treeview">
                                <a href={item.redirectUrl} className="nav-link">
                                    <i className="nav-icon fas fa-home"></i>
                                    <p>
                                        {item.moduleDisplayName}
                                    </p>
                                </a></li>
                        </ul>
                    </div>
                )
            }
        })

        return (

            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* <!-- Brand Logo --> */}
                <a href="#" className="brand-link">
                    <img src="/datafoundry.png"
                        alt="DataFoundry Logo"
                        className="brand-image img-circle elevation-3" />
                    <span className="brand-text font-weight-light">DataFoundry</span>
                </a>
                {/* <!-- Sidebar --> */}
                <div className="sidebar">
                    {/* <!-- Sidebar user (optional) --> */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="../assets/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>

                    {/* <!-- Sidebar Menu --> */}
                    <nav className="mt-2">
                        {moduleName}
                    </nav>

                </div>
                {/* <!-- /.sidebar --> */}
            </aside>
        )
    }
}