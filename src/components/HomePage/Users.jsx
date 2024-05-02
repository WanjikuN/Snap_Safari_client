import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { DataGrid, GridToolbarContainer } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';
import OpenSidenav from './OpenSidenav';
import BounceLoader from '../../Loaders/BounceLoader';

const Users = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRow, setSelectedRow] = useState(null);
  const [albums, setAlbums] = useState([]);
// console.log(albums)
// console.log(rows)
  useEffect(() => {
   
      const fetchData = async () => {
          try {
            setLoading(true);

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
      // fetch albums
      const fetchAlbums = async () => {
        try {
          setLoading(true);

            const response = await fetch('https://snap-safari-backend.onrender.com/albums/');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // console.log(response)
            const data = await response.json();
            // Calculate the count of filtered albums for each user
    const updatedRows = rows.map(user => {
      const userAlbums = data.filter(album => album.users_id === user.id);
      return {
        ...user,
        albumsCount: userAlbums.length,
      };
    });
            setRows(updatedRows); 
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
      };
      fetchAlbums();
      }, []);

  const filteredAlbums = albums.filter(album => album.users_id == rows.id);
console.log(filteredAlbums)
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
    { field: 'albumsCount', headerName: 'Album Count', width: 150,flex: 1  },

    // Add more columns as needed
  ];



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
      {loading ? (
        <BounceLoader />
      ) : (
        <>
       {selectedRow && (
        <OpenSidenav onClose={closeSideNavigation} selectedRow={selectedRow} />
      )}
      <div id="content-body" style={{ width: selectedRow ? '35%' : '100%' }}>
          <div></div>
            <DataGrid
              rows={rows}
              columns={columns}
              slots={{
                toolbar: CustomToolbar,
                loadingOverlay: LinearProgress,
              }}
              loading={loading}
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
       </>
      )}
    </div>
  );
};

export default Users;
