import * as React from 'react';
import SPService from '../../../services/SPService';

interface Column {
  internalName: string;
  displayName: string;
  Type: string;
}



export interface ISmartTableProps {
  columns: Column[];
  tableHeaders: string[];
  pageSize?: number;
  webUrl: string;
  listName: string;
  service: SPService;
}

export interface ISmartTableSate {
  records: any[];
  nextPageEndPoint: string;
  previousPageEndPoint: string[];
  currentPageUrl: string;

}


export default class SmartTable extends React.Component<ISmartTableProps, ISmartTableSate> {


  constructor(props: ISmartTableProps) {
    super(props);
    this.state = {
      records: [],
      nextPageEndPoint: '',
      previousPageEndPoint: [],
      currentPageUrl: ''
    }
  }

  componentDidMount(): void {
    this.props.service.getListItems(this.props.listName, this.props.webUrl)
      .then(data => { this.setState({ records: data.value, nextPageEndPoint: data["odata.nextLink"] }) });
  }
  public render(): React.ReactElement<ISmartTableProps> {
    return (
      <div className="container-fluid" >
        <SearchTable></SearchTable>
        <table className="table">
          <TableHeaders headers={this.props.columns}></TableHeaders>
          {this.state.records.map(r => <TableRow record={r}></TableRow>)}
          <TablePagination></TablePagination>
        </table>
      </div >
    );
  }
}

const TableHeaders = (props) => {
  let headerTable = props.headers.map(h => <th>{h.displayName}</th>)
  return <>
    {headerTable}
  </>
}
const TableRow = (props) => {
  let headerTable = props.headers.map(h => <th>{h}</th>)
  return <>
    <h2>Pagination goes here</h2>
  </>
}
const TablePagination = (props) => {
  let headerTable = props.headers.map(h => <th>{h}</th>)
  return <>
    <h2>Pagination goes here</h2>
  </>
}


class SearchTable extends React.Component<{},{}>{


  public render(): false | JSX.Element {
      return <>
      <h2>Search component</h2>
      </>
  }
}