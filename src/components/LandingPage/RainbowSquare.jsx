import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

  export default function RainbowSquare() {
    return (
      <Box sx={{ width: '100%', height: '98%', display: 'flex', justifyContent: 'center', alignItems: 'center', overflowY: 'hidden' }}>
        <p className="overlay-text text-overlay">Journey Through the Savannah:<br/> Document the Untamed Beauty of<br/> Africa with<br/> SnapSafari</p>
        <ImageList   
        variant="masonry" cols={3} gap={8}
        className="grayscale-on-default blur-on-hover"  >

        {/* Loop through the images for display */}
        {itemData.map((item, index) => (
            <React.Fragment key={index}>
              <ImageListItem>
                <img

                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            </React.Fragment>
          ))}
        </ImageList>
      </Box>
    );
  }
// safari images from unsplash
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'African Safari',
  },
  {
    img: 'https://images.unsplash.com/photo-1498038116800-4159eb9b2a62?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'African Safari',
  },
  {
    img: 'https://images.unsplash.com/photo-1516497084411-042e90c17be1?q=80&w=966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'African Safari',
  },
  {
    img: 'https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
    title: 'African Safari',
  },
  {
    img: 'https://images.unsplash.com/photo-1566296524462-e0a341bf65e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
    title: 'African Safari',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661843615544-b2c973491c8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D',
    title: 'African Safari',
  },
  {
    img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
    title: 'African Safari',
  },
  {
    img: 'https://images.unsplash.com/photo-1619494139903-f34bc7095e0f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxSVXMwaHdRcjFQY3x8ZW58MHx8fHx8',
    title: 'African Safari',
  },
  {
    img: 'https://images.unsplash.com/photo-1527175965995-8f8bc53e76f8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxSVXMwaHdRcjFQY3x8ZW58MHx8fHx87',
    title: 'African Safari',
  },
  {
    img: 'https://images.unsplash.com/photo-1609445357483-9841e330ddd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxjX3h5STNuWU5PMHx8ZW58MHx8fHx8',
    title: 'African Safari',
  },
  {
    img: 'https://images.unsplash.com/photo-1463588194886-8317dff53014?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
    title: 'African Safari',
  },
  {
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'African Safari',
  },
];
