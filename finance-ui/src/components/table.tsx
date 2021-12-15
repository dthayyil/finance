import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';



export const Table = ({data,columns,loading}:props)=> {
  return (
    <div style={{ height:500,  width: '100%' }}>
      <DataGrid 
      rows={data} 
      columns={columns}  
      loading ={loading} 
      rowHeight={30}
      />
    </div>
  );
}

interface props {
    data: GridRowsProp;
    columns: GridColDef[];
    loading:boolean;
}