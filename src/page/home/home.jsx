import { Box, Container, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import hero_img from "../../assets/img/hero_img.png";

export default function Home() {
  const usehero = useMediaQuery("(max-width:1249px)")
  return (
    <main className="main">
      <section className="hero">
        <Container maxWidth="xl">
          {!usehero ?<Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"} gap={"19px"}>
            <Stack maxWidth={"599px"} gap={"45px"}>
              <Typography variant="h2" fontSize={"60px"} fontWeight={500}>
               3 Sizni arab olami <br /> kutmoqda!
              </Typography>

              <Typography variant="h6" fontSize={"18px"} fontWeight={400}>
                Arab madaniyati va maorif olami! Bizning veb-saytimiz sizga
                mukammal arab tilini o'rganish markazini topishga yordam beradi.
                Ushbu go'zal til bilan yangi ufqlar va imkoniyatlarni oching.
              </Typography>
            </Stack>
            <img src={hero_img} alt="img" />
          </Stack> :   <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"center"} gap={"19px"}>
            <Stack maxWidth={"599px"} gap={"45px"}>
              <Typography variant="h2" fontSize={"60px"} fontWeight={500}>
               3 Sizni arab olami <br /> kutmoqda!
              </Typography>

              <Typography variant="h6" fontSize={"18px"} fontWeight={400}>
                Arab madaniyati va maorif olami! Bizning veb-saytimiz sizga
                mukammal arab tilini o'rganish markazini topishga yordam beradi.
                Ushbu go'zal til bilan yangi ufqlar va imkoniyatlarni oching.
              </Typography>
            </Stack>
            <img src={hero_img} alt="img" />
          </Stack>}
        </Container>
      </section>
    </main>
  );
}
