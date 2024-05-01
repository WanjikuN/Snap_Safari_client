import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { DataGrid, GridToolbarContainer } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';

const Albums = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
console.log(rows)
  useEffect(() => {
   
      const fetchData = async () => {
          try {
              const response = await fetch('https://snap-safari-backend.onrender.com/albums/');
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
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
    { field: 'id', headerName: 'No', width: 50  },
    { field: 'title', headerName: 'Title', width: 150 ,flex: 1 },

    // Add more columns as needed
  ];

  // Define the function to handle edit cell changes
  const handleEditCellChange = (params) => {
    // Add your logic to handle cell edits
  };

  // Define the function to handle row click
  const handleRowClick = (params) => {
    // Add your logic to handle row clicks
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
            //   pageSizeOptions={[10,15, 25, 50, 100]}
              className="datagrid-root"
              onRowClick={handleRowClick}
              disableColumnSelector
              disableColumnFilter
              getRowClassName={(params) => (params.indexRelativeToCurrentPage % 2 !== 0 ? 'striped-row' : {})}
            />
          
      </div>
    </div>
  );
};

export default Albums;
