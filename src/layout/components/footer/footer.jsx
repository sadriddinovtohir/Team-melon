import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { COLOR } from "../../../config/js/color";
import Header_meelon_icons from "../../../assets/icons/header_meelon_icons";
import EmailIcons from "../../../assets/icons/email-icons";
import Tell_icons from "../../../assets/icons/tell_icons";
import Location_icons from "../../../assets/icons/location_icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: COLOR.grey,
        paddingTop: "48px",
        paddingBottom: "48px",
        paddingLeft: "80px",
        paddingRight: "80px",
      }}
    >
      <Container>
        <Grid container spacing={10} justifyContent={"space-between"}>
          <Grid item xs={12} sm={6} md={3}>
            <Stack>
              <Box color={COLOR.fill}>
                <Header_meelon_icons />
              </Box>
              <Typography
                mt={"32px"}
                mb={"18px"}
                variant="h2"
                fontSize={"20px"}
                color={COLOR.black}
              >
                Biz bilan bog'laning
              </Typography>
              <Typography
                mb={"16px"}
                variant="h2"
                fontSize={"16px"}
                fontWeight={400}
                color={COLOR.black}
                display={"inline-flex"}
                alignItems={"center"}
                gap={"5px"}
              >
                {" "}
                <EmailIcons /> info@melom.uz
              </Typography>

              <Typography
                mb={"16px"}
                variant="h2"
                fontSize={"16px"}
                fontWeight={400}
                color={COLOR.black}
                display={"inline-flex"}
                alignItems={"center"}
                gap={"5px"}
              >
                {" "}
                <Tell_icons /> 998 (90) 109 24 35
              </Typography>

              <Typography
                mb={"16px"}
                variant="h2"
                fontSize={"16px"}
                fontWeight={400}
                color={COLOR.black}
                display={"inline-flex"}
                alignItems={"center"}
                gap={"5px"}
              >
                {" "}
                <Box color={COLOR.black}>
                  <Location_icons />
                </Box>{" "}
                634034, Toshkent sh., Naximovna <br /> ko‘chasi, 8/2
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Stack maxWidth={"300px"}>
              <Typography
                variant="h2"
                fontSize={"16px"}
                mb={"16px"}
                color={COLOR.textGrey}
                fontWeight={500}
              >
                Mao’lumot
              </Typography>
              <Typography
                variant="h2"
                mb={"12px"}
                fontSize={"16px"}
                color={COLOR.textCOLOR}
                fontWeight={500}
              >
                <Link
                  style={{ textDecoration: "none", color: COLOR.textCOLOR }}
                  to={"/center"}
                >
                  Xizmatlar
                </Link>
              </Typography>
              <Typography
                variant="h2"
                mb={"12px"}
                fontSize={"16px"}
                color={COLOR.textCOLOR}
                fontWeight={500}
              >
                <Link
                  style={{ textDecoration: "none", color: COLOR.textCOLOR }}
                  to={"/Aboutus"}
                >
                  Biz haqimizda
                </Link>
              </Typography>
              <Typography
                variant="h2"
                mb={"12px"}
                fontSize={"16px"}
                color={COLOR.textCOLOR}
                fontWeight={500}
              >
                <Link
                  style={{ textDecoration: "none", color: COLOR.textCOLOR }}
                  to={"/Teachers"}
                >
                  Hamkorlar
                </Link>
              </Typography>
              <Typography
                variant="h2"
                mb={"12px"}
                fontSize={"16px"}
                color={COLOR.textCOLOR}
                fontWeight={500}
              >
                <Link
                  style={{ textDecoration: "none", color: COLOR.textCOLOR }}
                  to={"/contacts"}
                >
                  Kontaktlar
                </Link>
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Stack>
              <Typography
                variant="h2"
                mb={"16px"}
                fontSize={"16px"}
                color={COLOR.textGrey}
                fontWeight={500}
              >
                Ijtimoiy
              </Typography>
              <a
                style={{ textDecoration: "none", color: COLOR.textCOLOR }}
                href="https://web.telegram.org/k/#@TohirInsight"
              >
                Telegram
              </a>
              <a
                style={{ textDecoration: "none", color: COLOR.textCOLOR }}
                href="https://www.instagram.com/tohirbek_sadriddinov/"
              >
                Instagram
              </a>
              <a
                style={{ textDecoration: "none", color: COLOR.textCOLOR }}
                href="https://www.facebook.com/login.php/"
              >
                Facebook
              </a>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
   <Typography
                variant="h2"
                fontSize={"16px"}
                mb={"16px"}
                color={COLOR.textGrey}
                fontWeight={500}
              >
                Huquqiy
              </Typography>
              <Typography
                variant="h2"
                mb={"12px"}
                fontSize={"16px"}
                color={COLOR.textCOLOR}
                fontWeight={500}
              >
                <Link
                  style={{ textDecoration: "none", color: COLOR.textCOLOR }}
                  to={"/"}
                >
                  Shartlar
                </Link>
              </Typography>
              <Typography
                variant="h2"
                mb={"12px"}
                fontSize={"16px"}
                color={COLOR.textCOLOR}
                fontWeight={500}
              >
                <Link
                  style={{ textDecoration: "none", color: COLOR.textCOLOR }}
                  to={"/"}
                >
                  Maxfiylik
                </Link>
              </Typography>
              <Typography
                variant="h2"
                mb={"12px"}
                fontSize={"16px"}
                color={COLOR.textCOLOR}
                fontWeight={500}
              >
                <Link
                  style={{ textDecoration: "none", color: COLOR.textCOLOR }}
                  to={"/"}
                >
                  Cookie-fayllar
                </Link>
              </Typography>
              <Typography
                variant="h2"
                mb={"12px"}
                fontSize={"16px"}
                color={COLOR.textCOLOR}
                fontWeight={500}
              >
                <Link
                  style={{ textDecoration: "none", color: COLOR.textCOLOR }}
                  to={"/"}
                >
                  Litsenziyalar
                </Link>
              </Typography>
              <Typography
                variant="h2"
                mb={"12px"}
                fontSize={"16px"}
                color={COLOR.textCOLOR}
                fontWeight={500}
              >
                <Link
                  style={{ textDecoration: "none", color: COLOR.textCOLOR }}
                  to={"/"}
                >
                  Sozlamalar
                </Link>
              </Typography>
              <Typography
                variant="h2"
                mb={"12px"}
                fontSize={"16px"}
                color={COLOR.textCOLOR}
                fontWeight={500}
              >
                <Link
                  style={{ textDecoration: "none", color: COLOR.textCOLOR }}
                  to={"/"}
                >
                  Aloqa
                </Link>
              </Typography>

          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
