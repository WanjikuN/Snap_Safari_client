import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { DataGrid, GridToolbarContainer } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';

const Users = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRow, setSelectedRow] = useState(null);

console.log(rows)
  useEffect(() => {
   
      const fetchData = async () => {
          try {
              const response = await fetch('https://snap-safari-backend.onrender.com/users/');
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              console.log(response)
              const data = await response.json();
              setRows(data); 
              setLoading(false);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

    fetchData();
  }, []);

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        {/* Add your custom toolbar buttons here */}
      </GridToolbarContainer>
    );
  }

  // Define your columns here
  const columns = [
    { field: 'name', headerName: 'Name', width: 150 ,flex: 1 },
    { field: 'username', headerName: 'Username', width: 150 ,flex: 1  },
    { field: 'email', headerName: 'E-mail', width: 150,flex: 1  },
    // Add more columns as needed
  ];

  // Define the function to handle edit cell changes
  const handleEditCellChange = (params) => {
    // Add your logic to handle cell edits
  };

  // Define the function to handle row click
  const handleRowClick = (params) => {
    console.log()
    setSelectedRow(params.row);
  };
  const closeSideNavigation = () => {
    setSelectedRow(null);
  };
  return (
    <div id="main-cont">
      <Sidebar />
      <div id="content-body">
          <div></div>
            <DataGrid
              rows={rows}
              columns={columns}
              slots={{
                toolbar: CustomToolbar,
                loadingOverlay: LinearProgress,
              }}
              loading={loading}
              onEditCellChange={handleEditCellChange}
              pageSize={10}
              pageSizeOptions={[10,15, 25, 50, 100]}
              className="datagrid-root"
              onRowClick={handleRowClick}
              disableColumnSelector
              getRowClassName=
              {
                (params) => (params.indexRelativeToCurrentPage % 2 !== 0 ? 'striped-row' : 'striped-row-none')
              }
            />
          
      </div>
      {selectedRow && (
        <div className="side-navigation">
          <button onClick={closeSideNavigation}>Close</button>
          <p>Name: {selectedRow.name}</p>
          <p>Username: {selectedRow.username}</p>
          <p>Email: {selectedRow.email}</p>
        </div>
      )}
    </div>
  );
};

export default Users;
