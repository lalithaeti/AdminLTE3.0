import React, {Component} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search, ColumnToggle } from 'react-bootstrap-table2-toolkit';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

class ReactBootstrapTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
     
      products : [
        { id: 1, name: "Hopp",surname: 'Grogs', place:"Italy",year:1980 ,salary:10000},
        { id: 2, name: "Justin", surname: 'Harps',place:"England",year:1984 ,salary:12000 },
        { id: 3, name: "Darwin", surname: 'Lauthers',place:"Persia" ,year:1985 ,salary:10300 },
        { id: 4, name: "Taylor",surname: 'Walters', place:"France",year:1987 ,salary:14000 },
        { id: 5, name: "Sandy",surname: 'Hoppers',place:'Belgium',year:1988 ,salary:15000 },
        { id: 6, name: "Auther",surname: 'Golds', place:'Spain' ,year:1983 ,salary:18000},
        { id: 7, name: "Drake",surname: 'Kolts', place:'Germany',year:1992 ,salary:19000 },
        { id: 8, name: "Adele",surname: 'Georgiana', place:'Uk',year:1997 ,salary:13000  },
        { id: 9, name: "Balter",surname: 'Poppers', place:'Poland' ,year:1990 ,salary:16000 },
        { id: 10, name: "George",surname: 'yarners',place:'England' ,year:1996 ,salary:15000},
        { id: 11, name: "Edward",surname: 'Colts',place:'Amsterdam',year:1994 ,salary:18000 },
        { id: 12, name: "Lydia",surname: 'Hanns', place: 'NewYork',year:1992 ,salary:16000 },
        { id: 13, name: "Harvy",surname: 'Cliff', place:'China',year:1991 ,salary:17000},
        { id: 14, name: "Walthers",surname: 'Maursie', place:'Tokyo',year:1982 ,salary:18000},
        { id: 15, name: "Cathy",surname: 'Mathews', place: 'Paris' ,year:1986 ,salary:19000},
        { id: 16, name: "Felther",surname: 'Bents',place:'London',year:1993 ,salary:19800 },
        { id: 17, name: "Yochana",surname: 'Gurrala',place:'Vizag',year:1998 ,salary:17300 },
        { id: 18, name: "Damodar",surname: 'Edara',place:'Ongolu',year:1996 ,salary:17300 },
        { id: 19, name: "Bhavani",surname: 'M',place:'Vizag',year:1998 ,salary:15300 },
        { id: 20, name: "Eekshita",surname: 'Kurakula',place:'P.M.palem',year:1997 ,salary:15300 },
        { id: 21, name: "Renuka",surname: 'Kandula',place:'Gajuwaka',year:1997 ,salary:15000 },
        { id: 22, name: "Deepika",surname: 'Adapa',place:'Visakhapatnam',year:1998 ,salary:13300 },
      ],
       columns : [
        {
          dataField: "id",
          text: "ID",sort:true
        },
        {
          dataField: "name",
          text: "Name",sort:true,
          filter: textFilter()
        },
        {
          dataField: "surname",
          text: "Surname",sort:true,
          filter: textFilter()
        },
        {
          dataField: "place",
          text: "Place",sort:true,
          filter: textFilter()
        }
        ,{
          dataField: "year",
          text: "Year",sort:true,
          filter: textFilter()
        },{
          dataField: "salary",
          text: " Salary",sort:true,
          filter: textFilter()
        }
      ]
       
    }
  }
  
   
  render() {
    const { SearchBar } = Search;
    const { ToggleList } = ColumnToggle;
    return (
    <div className="content-wrapper">
      <section className="content-header">
        <div style={{ padding: "20px" }}>
          <h1 className="h2">Tabular Data</h1>
            <ToolkitProvider
              keyField="id"
              data={ this.state.products }
              columns={ this.state.columns }
              columnToggle
              search
            >
                {
                  props => (
                    <div>
                      <div className="row">
                        <div className="col-lg-3">
                          <SearchBar { ...props.searchProps } />
                        </div>
                        <div className="col-lg-9" style={{textAlign:"right"}}>
                          <ToggleList { ...props.columnToggleProps } />
                        </div>
                      </div>
                      <hr />
                      <BootstrapTable
                        { ...props.baseProps } 
                        pagination={ paginationFactory()}
                        filter={ filterFactory() }  
                      />
                    </div>
                  )
                }
            </ToolkitProvider>
        </div>
      </section>
    </div>
     
    )
  }
}

export default ReactBootstrapTable