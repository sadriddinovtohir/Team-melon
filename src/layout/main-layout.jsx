import React from 'react'
import Header from './components/header/header'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/footer'
import { Box, Stack } from '@mui/material'

export default function MainLayout() {
  return (
    <Stack justifyContent={"space-between"} height={"100vh"}>
     <Box>
       <header>
        <Header/>
      </header>
      <main>
        <Outlet/>
      </main>
     </Box>
      <footer>
        <Footer/>
      </footer>
    </Stack>
  )
}
