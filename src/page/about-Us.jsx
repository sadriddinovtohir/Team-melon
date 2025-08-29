import { Container, Typography } from '@mui/material'
import React from 'react'
import { TextSize } from '../config/js/style'

export default function AboutUs() {
  return (
    <Container maxWidth="xl">
      <TextSize style={{marginBottom:"38px"}}>Bizning kontaktlarimiz</TextSize>
      <Typography variant='h6' fontSize={"16px"} fontWeight={400} maxWidth={"650px"} mb={"37px"}>OOO “Melon” 2023. Lorem Ipsum haqidagi ma'lumot sayti, uning kelib chiqishi haqida ma'lumot beruvchi, shuningdek tasodifiy Lipsum generatori.</Typography>
    
    </Container>
  )
}
