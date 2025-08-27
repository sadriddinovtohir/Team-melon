
import imgfound from '../../assets/img/nodefouond.png'
import { Button, Container, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
export default function NodFound() {
  return (
    <Container>
<Stack py={"180px"}  alignItems={"center"} justifyContent={"center"}>
          <img style={{maxWidth:"231px", marginBottom:"40px"}} src={imgfound} alt="img" />
          <Typography maxWidth={"720px"} textAlign={"center"} mb={"90px"} variant="h2" fontSize={"24px"} fontWeight={400} >Kechirasiz. siz izlayotgan kontent mavjud emas. Yoki u o'chirildi yoki siz havolani noto'g'ri kiritdingiz.</Typography>
        <Link to={"/"}>
          <Button variant="contained"  style={{padding:"16px", borderRadius:"10px"}}> <Typography variant='h2' fontSize={"24px"} fontWeight={500}  >Bosh sahifaga o'tishg</Typography> </Button>
        </Link>
</Stack>
    </Container>
  )
}
