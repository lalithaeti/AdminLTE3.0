
const items = [
    {
        name: 'dashboard',
        label: 'Dashboard',
        icon: "nav-icon fas fa-tachometer-alt",
        className: "nav-item has-treeview",
        sub: [
            {
                name: 'dashboard',
                label: 'Dashboard V1',
                path: '/dashboard',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'dashboard',
                label: 'Dashboard V2',
                path: '/dashboard2',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'dashboard',
                label: 'Dashboard V3',
                path: '/dashboard3',
                icon: "far fa-circle nav-icon"
            }
        ]
    },
    {
        name: 'widgets',
        label: 'Widgets',
        path: '/widgets',
        icon: "nav-icon fas fa-th",
        className: "nav-item"
    },
    {
        name: 'search',
        label: 'Search',
        path: '/search',
        icon: "nav-icon fas fa-th",
        className: "nav-item"
    },
    {
        name: 'charts',
        label: 'Charts',
        icon: "nav-icon fas fa-chart-pie",
        className: "nav-item has-treeview",
        sub: [
            {
                name: 'chartjs',
                label: 'Chart Js',
                path: '/chartjs',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'flot',
                label: 'Flot',
                path: '/flot',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'inline',
                label: 'Inline',
                path: '/inline',
                icon: "far fa-circle nav-icon"
            }
        ]
    },
    {
        name: 'uielements',
        label: 'UI Elements',
        icon: "nav-icon fas fa-tree",
        className: "nav-item has-treeview",
        sub: [
            {
                name: 'general',
                label: 'General',
                path: '/general',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'icons',
                label: 'Icons',
                path: '/icons',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'buttons',
                label: 'Buttons',
                path: '/buttons',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'sliders',
                label: 'Sliders',
                path: '/sliders',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'modals',
                label: 'Modals & Alerts',
                path: '/modals',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'reactToaster',
                label: 'React Toaster',
                path: '/reactToaster',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'navtab',
                label: 'Navbar & Tabs',
                path: '/navtab',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'timeline',
                label: 'Timeline',
                path: '/timeline',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'ribbons',
                label: 'Ribbons',
                path: '/ribbons',
                icon: "far fa-circle nav-icon"
            }
        ]
    },
    {
        name: 'forms',
        label: 'Forms',
        icon: "nav-icon fas fa-edit",
        className: "nav-item has-treeview",
        sub: [
            {
                name: 'generalform',
                label: 'General form',
                path: '/generalform',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'advancedelements',
                label: 'Advanced elements',
                path: '/advancedelements',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'editors',
                label: 'Editors',
                path: '/editors',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'validation',
                label: 'Validation',
                path: '/form',
                icon: "far fa-circle nav-icon"
            }
        ]
    },
    {
        name: 'tables',
        label: 'Tables',
        icon: "nav-icon fas fa-table",
        className: "nav-item has-treeview",
        sub: [
            {
                name: 'simpletable',
                label: 'Simple Tables',
                path: '/simpletable',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'datatable',
                label: 'Data Tables',
                path: '/datatable',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'jsgrid',
                label: 'js Grid',
                path: '/jsgrid',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'mdb',
                label: 'MUI',
                path: '/mdb',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'reactbootstrap',
                label: 'React Bootstrap Table',
                path: '/reactbootstrap',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'reactTabulator',
                label: 'React Tabulator',
                path: '/reactTabulator',
                icon: "far fa-circle nav-icon"
            }
        ]
    },
    {
        name: 'calendar',
        label: 'Calendar',
        path: '/calendar',
        icon: "nav-icon fas fa-th",
        className: "nav-item"
    },
    {
        name: 'pages',
        label: 'Pages',
        icon: "nav-icon fas fa-table",
        className: "nav-item has-treeview",
        sub: [
            {
                name: 'projects',
                label: 'Projects',
                path: '/projects',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'projectadd',
                label: 'Project Add',
                path: '/projectadd',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'projectedit',
                label: 'Project Edit',
                path: '/projectedit',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'projectdetails',
                label: 'Project Details',
                path: '/projectdetails',
                icon: "far fa-circle nav-icon"
            },
            {
                name: 'contacts',
                label: 'Contacts',
                path: '/contacts',
                icon: "far fa-circle nav-icon"
            }
        ]
    }

]
export default items