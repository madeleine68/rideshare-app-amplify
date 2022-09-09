import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react';
import  Router  from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Index() {

    useEffect(()=> {
      Router.push('/ride')
    },[])

  return (
    <div  className={styles.container}  >
      <Head>
        <title>One Station Travel App</title>
        <meta name="description" content="travel flight rail bus rideshare" />
      </Head>
      
      <Box sx={{ display: 'flex', alignItems:'center', justifyContent:'center' }}>
        <CircularProgress  color="secondary"/>
      </Box>
        
    </div>
  )
}
