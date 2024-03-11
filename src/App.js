import { Grid } from '@mui/material';
import './App.css';
import HeadBar from './HeadBar';
import SideBar from './SideBar';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [ tourList, setTourList ] = useState();

  useEffect(() => {
    const result = axios.get('http://localhost:4000/touristList');
    setTourList(result);
  }, [])

  // useEffect(() => {
  //   console.log(tourList)
  // }, [tourList])

  return (
    <>
      <HeadBar />
      <SideBar />
    </>
  );
}

export default App;
