// import React , {Component} from "react";
// import ReactDOM from "react-dom";
// import MUIDataTable from "mui-datatables";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Switch from "@material-ui/core/Switch";
// import Cities from "./cities";

// class MUI extends Component {
//   render() {
//     const columns = [
//       {
//         name: "Name",
//         options: {
//           filter: false
//         }
//       },
//       {
//         name: "Title",
//         options: {
//           filter: true
//         }
//       },
//       {
//         name: "Location",
//         options: {
//           filter: true,
//           customBodyRender: (value, tableMeta, updateValue) => {
//             return (
//               <Cities
//                 value={value}
//                 index={tableMeta.columnIndex}
//                 change={event => updateValue(event)}
//               />
//             );
//           }
//         }
//       },
//       {
//         name: "Age",
//         options: {
//           filter: false
//         }
//       },
//       {
//         name: "Salary",
//         options: {
//           filter: true,
//           customBodyRender: (value, tableMeta, updateValue) => {
//             const nf = new Intl.NumberFormat("en-US", {
//               style: "currency",
//               currency: "USD",
//               minimumFractionDigits: 2,
//               maximumFractionDigits: 2
//             });

//             return nf.format(value);
//           }
//         }
//       },
//       {
//         name: "Active",
//         options: {
//           filter: true,
//           customBodyRender: (value, tableMeta, updateValue) => {
//             return (
//               <FormControlLabel
//                 label={value ? "Yes" : "No"}
//                 value={value ? "Yes" : "No"}
//                 control={
//                   <Switch
//                     color="primary"
//                     checked={value}
//                     value={value ? "Yes" : "No"}
//                   />
//                 }
//                 onChange={event => {
//                   updateValue(event.target.value === "Yes" ? false : true);
//                 }}
//               />
//             );
//           }
//         }
//       }
//     ];

//     const data = [
//       ["Robin Duncan", "Business Analyst", "Los Angeles", 20, 77000, false],
//       ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, 135000, true],
//       ["Harper White", "Attorney", "Pittsburgh", 52, 420000, false],
//       ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, 150000, true],
//       ["Frankie Long", "Industrial Analyst", "Austin", 31, 170000, false],
//       ["Brynn Robbins", "Business Analyst", "Norfolk", 22, 90000, true],
//       ["Justice Mann", "Business Consultant", "Chicago", 24, 133000, false],
//       [
//         "Addison Navarro",
//         "Business Management Analyst",
//         "New York",
//         50,
//         295000,
//         true
//       ],
//       ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, 200000, false],
//       ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, 400000, true],
//       ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, 110000, false],
//       ["Danny Leon", "Computer Scientist", "Newark", 60, 220000, true],
//       ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, 180000, false],
//       ["Jesse Hall", "Business Analyst", "Baltimore", 44, 99000, true],
//       ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, 90000, false],
//       ["Terry Macdonald", "Commercial Specialist", "Miami", 39, 140000, true],
//       ["Justice Mccarthy", "Attorney", "Tucson", 26, 330000, false],
//       ["Silver Carey", "Computer Scientist", "Memphis", 47, 250000, true],
//       ["Franky Miles", "Industrial Analyst", "Buffalo", 49, 190000, false],
//       ["Glen Nixon", "Corporate Counselor", "Arlington", 44, 80000, true],
//       [
//         "Gabby Strickland",
//         "Business Process Consultant",
//         "Scottsdale",
//         26,
//         45000,
//         false
//       ],
//       ["Mason Ray", "Computer Scientist", "San Francisco", 39, 142000, true]
//     ];

//     const options = {
//       filter: true,
//       filterType: "dropdown",
//       responsive: "scroll"
//     };

//     return (
//       <div className="content-wrapper">
//         {/* Content Header (Page header) */}
//         <section className="content-header">
//           <h1>
//             Advanced Table
//             <small>Using MUI tables</small>
//           </h1>
//             <MUIDataTable
//               title={"Employee list"}
//               data={data}
//               columns={columns}
//               options={options}
//             />
//         </section>
//       </div>
//     );
//   }
// }
// export default MUI
import React, { Component } from 'react'
import MaterialTable from 'material-table';

 class MUI extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      columns: [
        { title: 'Name', field: 'name', },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          //lookup: { 34: 'Belgium', 63: 'Şandiageo'},
        },
      ],
      data: [
        { name: 'Mattew', surname: 'Georgia', birthYear: 1987, birthCity:'Europe' },
        { name: 'Andrea', surname: 'Buks', birthYear: 1980, birthCity:'Italy' },
        { name: 'Bill', surname: 'Kingsman', birthYear: 1967, birthCity:'France'},
        { name: 'Curt', surname: 'Falan', birthYear: 1969, birthCity:'Belgium' },
        { name: 'Darwin', surname: 'Kolt', birthYear: 1977, birthCity:'Spain' },
        { name: 'Falther', surname: 'Wings', birthYear: 1997, birthCity:'Germany' },
        { name: 'Holten', surname: 'Hops', birthYear: 1987, birthCity:'Uk'},
        { name: 'Kings', surname: 'Walts', birthYear: 1947, birthCity: 'Poland' },
        { name: 'Linda', surname: 'Hanns', birthYear: 1999, birthCity: 'England' },
        { name: 'Daniel', surname: 'Cliff', birthYear: 1937, birthCity:'NewYork'},
        { name: 'Sanderson', surname: 'Williams', birthYear: 1957, birthCity:'Amsterdam' },
        { name: 'Will', surname: 'Smith', birthYear: 1959, birthCity: 'London' },
        { name: 'Peterson', surname: 'Holts', birthYear: 1927, birthCity:"Italy" },
        {
          name: 'Zether',
          surname: 'Fawn',
          birthYear: 2000,
          birthCity: 'Norway',
        },
      ],
       
    }
  }
  
    
 
  render() {
    return (
      <div className="content-wrapper">
      <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>MUI Tables</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="/dashboard">Home</a></li>
            <li className="breadcrumb-item active">MUItables</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
                <br/>
      <MaterialTable
      title="Tabular Data"
      options={{filtering:true
      }}
      columns={this.state.columns}
      
      data={this.state.data}
      
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              this.setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
               this.setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              this.setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
  
      />
      
  
  </section>

      </div>
  
      
    )
  }
}

export default MUI;
