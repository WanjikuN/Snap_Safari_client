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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const usersResponse = await fetch('https://snap-safari-backend.onrender.com/users/');
        if (!usersResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const usersData = await usersResponse.json();
        setRows(usersData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users data:', error);
      }
    };

    fetchData();
  }, []);

  const handleRowClick = (params) => {
    console.log("Params::",params)
    setSelectedRow(params.row);
  };

  const closeSideNavigation = () => {
    setSelectedRow(null);
  };

  const columns = [
    { field: 'name', headerName: 'Name', width: 150, flex: 1 },
    { field: 'username', headerName: 'Username', width: 150, flex: 1 },
    { field: 'email', headerName: 'E-mail', width: 150, flex: 1 },
    { field: 'albumsCount', headerName: 'Album Count', width: 150, flex: 1 },
  ];

  // Define a function to calculate the albums count for each user
  const calculateAlbumsCount = async (userId) => {
    // console.log("UserId::",userId)
    try {
      const albumsResponse = await fetch(`https://snap-safari-backend.onrender.com/albums/`);
      if (!albumsResponse.ok) {
        throw new Error('Network response was not ok');
      }
      const albumsData = await albumsResponse.json();
     const filteredAlbums = albumsData.filter(album => album.users_id == userId);
      return filteredAlbums.length;
    } catch (error) {
      console.error(`Error fetching albums data for user ${userId}:`, error);
      return 0;
    }
  };

  // Asynchronously calculate albums count for each user and update the rows
  useEffect(() => {
    const updateRowsWithAlbumsCount = async () => {
      const updatedRows = await Promise.all(
        rows.map(async (user) => ({
          ...user,
          albumsCount: await calculateAlbumsCount(user.id),
        }))
      );
      setRows(updatedRows);
    };

    if (!loading) {
      updateRowsWithAlbumsCount();
    }
  }, [loading]);

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
      </GridToolbarContainer>
    );
  }

  return (
    <div id="main-cont">
      <Sidebar />
      {loading ? (
        <BounceLoader />
      ) : (
        <>
          {selectedRow && <OpenSidenav onClose={closeSideNavigation} selectedRow={selectedRow}  />}
          <div id="content-body" style={{ width: selectedRow ? '35%' : '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              slots={{
                toolbar: CustomToolbar,
                loadingOverlay: LinearProgress,
              }}
              loading={loading}
              pageSize={10}
              pageSizeOptions={[10, 15, 25, 50, 100]}
              className="datagrid-root"
              onRowClick={handleRowClick}
              disableColumnSelector
              getRowClassName={(params) =>
                params.indexRelativeToCurrentPage % 2 !== 0 ? 'striped-row' : 'striped-row-none'
              }
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Users;
