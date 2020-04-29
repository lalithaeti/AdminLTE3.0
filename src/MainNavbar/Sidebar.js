import React from 'react'
import items from './sideData'
var LOGIN_IN = require('../Components/Server/login.json');

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: LOGIN_IN,
            login_in: LOGIN_IN["role"]
        }
    }
    render() {
        var login = this.state.login
        var login_in = this.state.login_in
        if (login.role.clientId === login.userData.clientId) {
            var roledata = login_in.permissions.map((role) => {
                if (role.privilege[1] === 1) {
                    return (
                        <li className="nav-item" >
                            <a href={role.redirectUrl} className="nav-link">
                                <i className="nav-icon fas fa-users"></i>
                                <p>{role.moduleDisplayName}</p>
                            </a>
                        </li>
                    )
                }
            })
        }
        const treeItem = items.map((item, name) => {
            if ("nav-item has-treeview" === item.className) {
                let list = [];
                const loop = () => {
                    for (let i = 0; i < item.sub.length; i++) {
                        list.push(
                            <li className="nav-item">
                                <a href={item.sub[i].path} className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>{item.sub[i].label}</p>
                                </a>
                            </li>)
                    }
                    return list
                }
                return (
                    <li className="nav-item has-treeview" key={name}>
                        <a href="#" className="nav-link">
                            <i className={item.icon}></i>
                            <p> {item.label}
                                <i className="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            {loop()}
                        </ul>
                    </li>
                )
            }
            else {
                return (
                    <li className="nav-item" key={name}>
                        <a href={item.path} className="nav-link">
                            <i className={item.icon}></i>
                            <p> {item.label}  </p>
                        </a>
                    </li>
                )
            }
        })
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="#" className="brand-link">
                    <img src={require("../images/datafoundry1.png")}
                        alt="DataFoundry Logo"
                        className="brand-image img-circle elevation-3" />
                    <span className="brand-text font-weight-light">DataFoundry</span>
                </a>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="../assets/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {treeItem}
                            {roledata}
                        </ul>
                    </nav>
                </div>
            </aside>
        )
    }
}