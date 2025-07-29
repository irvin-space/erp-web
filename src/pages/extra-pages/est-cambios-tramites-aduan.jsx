import React from 'react';
import Typography from '@mui/material/Typography';
import DataTable from '../../components/DataTable';
import Button from '@mui/material/Button';



const handleClick = () => {
//   alert('Button clicked!');
  if(fakeUserData3.role === '3') {
    alert('User has role 3');
  }
};


const UserPage = () => {
  return (
    <div>
      <Typography variant='h2'>Prueba 1</Typography>
      <Typography variant='body1'></Typography>
      <br />
    <DataTable />
    <br />
    <Button onClick={handleClick} variant='contained'>Agregar cuenta</Button>
    </div>
  );
}

export default UserPage;

