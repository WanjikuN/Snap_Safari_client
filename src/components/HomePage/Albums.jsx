import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { DataGrid, GridToolbarContainer } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';
import OpenSidenav from './OpenSidenav';
import BounceLoader from '../../Loaders/BounceLoader';
import { MdPhotoAlbum } from "react-icons/md";

const Albums = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRow, setSelectedRow] = useState(null);

console.log(rows)
  useEffect(() => {
   
      const fetchData = async () => {
          try {
            setLoading(true);
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
      </GridToolbarContainer>
    );
  }

  const columns = [
    { field: 'id', headerName: 'No', width: 50 ,headerClassName:'header' },
    { field: 'title', headerName: 'Title', width: 150 ,flex: 1 ,headerClassName:'header'},

  ];

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
      {loading ? (
        <BounceLoader />
      ) : (
        <>
          {selectedRow && (
            <OpenSidenav onClose={closeSideNavigation} selectedRow={selectedRow} />
          )}
          <div id="content-body" style={{ width: selectedRow ? '35%' : '100%' }}>
          <h3> <MdPhotoAlbum size={30} color="black" />Albums</h3>
            <DataGrid
              rows={rows}
              columns={columns}
              slots={{
                toolbar: CustomToolbar,
                loadingOverlay: LinearProgress,
              }}
              loading={loading}
              pageSize={10}
              //   pageSizeOptions={[10,15, 25, 50, 100]}
              className="datagrid-root"
              onRowClick={handleRowClick}
              disableColumnSelector
              disableColumnFilter
              getRowClassName={(params) =>
                params.indexRelativeToCurrentPage % 2 !== 0
                  ? 'striped-row'
                  : 'striped-row-none'
              }
            />
          </div>
        </>
      )}
    </div>
  )}

export default Albums;
