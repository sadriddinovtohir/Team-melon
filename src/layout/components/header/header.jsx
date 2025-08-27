import {
  Box,
  Button,
  Container,
  Drawer,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { COLOR } from "../../../config/js/color";
import Header_meelon_icons from "../../../assets/icons/header_meelon_icons";
import Sun_icons from "../../../assets/icons/sun_icons";
import Langueg_icons from "../../../assets/icons/langueg_icons";
import React from "react";
import Menu_icons from "../../../assets/icons/menu_icons";

export default function Header() {
  const sizedrower = useMediaQuery("(max-width:1200px)");
  const mod = useMediaQuery("(max-width:849px)");
  const linksize = useMediaQuery("(max-width:766px)");
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  console.log(sizedrower);

  return (
    <header>
      <Container maxWidth="xl">
        <Stack
          direction={"row"}
          alignItems={"center"}
          py={"50px"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Stack
            direction={"row"}
            sx={{ gap: { sm: "10px", md: "48px", lg: "30px", xl: "44px" } }}
          >
            <Box color={COLOR.fill} mt={"-7px"}>
              <Header_meelon_icons />
            </Box>
            {!linksize ? (
              <Stack
                direction={"row"}
                alignItems={"center"}
                gap={"20px"}
                maxWidth={"100%"}
                justifyContent={"space-between"}
              >
                <NavLink style={{ textDecoration: "none" }} to={"/"}>
                  {({ isActive }) => (
                    <Typography
                      fontSize={"16px"}
                      fontWeight={400}
                      variant="h2"
                      style={{
                        color: isActive ? COLOR.errorCOLOR : COLOR.black,
                      }}
                    >
                      Bosh sahifa
                    </Typography>
                  )}
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to={"/center"}>
                  {({ isActive }) => (
                    <Typography
                      fontSize={"16px"}
                      fontWeight={400}
                      variant="h2"
                      style={{
                        color: isActive ? COLOR.errorCOLOR : COLOR.black,
                      }}
                    >
                      O'quv markazlari
                    </Typography>
                  )}
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to={"/teachers"}>
                  {({ isActive }) => (
                    <Typography
                      fontSize={"16px"}
                      fontWeight={400}
                      variant="h2"
                      style={{
                        color: isActive ? COLOR.errorCOLOR : COLOR.black,
                      }}
                    >
                      Ustozlar
                    </Typography>
                  )}
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to={"/Contacts"}>
                  {({ isActive }) => (
                    <Typography
                      fontSize={"16px"}
                      fontWeight={400}
                      variant="h2"
                      style={{
                        color: isActive ? COLOR.errorCOLOR : COLOR.black,
                      }}
                    >
                      Kontaktlar
                    </Typography>
                  )}
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to={"/AboutUs"}>
                  {({ isActive }) => (
                    <Typography
                      fontSize={"16px"}
                      fontWeight={400}
                      variant="h2"
                      style={{
                        color: isActive ? COLOR.errorCOLOR : COLOR.black,
                      }}
                    >
                      Biz haqimizda
                    </Typography>
                  )}
                </NavLink>
              </Stack>
            ) : null}
          </Stack>

          <Stack
            direction={"row"}
            sx={{ gap: { md: "8px", lg: "20px", xl: "33px" } }}
          >
            {!mod ? (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                maxWidth="90px"
                color={COLOR.black}
                gap={"16px"}
              >
                <Button
                  disableRipple
                  sx={{
                    minWidth: 0,
                    p: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    color: COLOR.black,
                    "&:hover": { bgcolor: "transparent" },
                  }}
                >
                  <Sun_icons />
                </Button>
                <Button
                  disableRipple
                  sx={{
                    minWidth: 0,
                    p: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    color: COLOR.black,
                    "&:hover": { bgcolor: "transparent" },
                  }}
                >
                  <Langueg_icons />
                  UZ
                </Button>
              </Stack>
            ) : null}

            {!sizedrower ? (
              <Stack direction={"row"} gap={"5px"}>
                <Button
                  variant="outlined"
                  style={{ padding: "14px 20px", borderRadius: "10px" }}
                >
                  {" "}
                  <Typography variant="h6" fontWeight={700} fontSize={"14px"}>
                    Kirish
                  </Typography>{" "}
                </Button>
                <Button
                  variant="contained"
                  style={{ padding: "14px 20px", borderRadius: "10px" }}
                >
                  {" "}
                  <Typography variant="h2" fontWeight={700} fontSize={"14px"}>
                    Roʻyxatdan oʻtish
                  </Typography>{" "}
                </Button>
              </Stack>
            ) : (
              <Button onClick={toggleDrawer(true)} color={COLOR.black}>
                <Menu_icons />
              </Button>
            )}
          </Stack>
        </Stack>
      </Container>
      {sizedrower && (
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <Stack padding={"30px"} gap={"15px"}>
            {linksize ? (
              <Stack
                alignItems={"center"}
                gap={"20px"}
                maxWidth={"100%"}
                justifyContent={"space-between"}
              >
                <NavLink style={{ textDecoration: "none" }} to={"/"}>
                  {({ isActive }) => (
                    <Typography
                      fontSize={"16px"}
                      fontWeight={400}
                      variant="h2"
                      style={{
                        color: isActive ? COLOR.errorCOLOR : COLOR.black,
                      }}
                    >
                      Bosh sahifa
                    </Typography>
                  )}
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to={"/center"}>
                  {({ isActive }) => (
                    <Typography
                      fontSize={"16px"}
                      fontWeight={400}
                      variant="h2"
                      style={{
                        color: isActive ? COLOR.errorCOLOR : COLOR.black,
                      }}
                    >
                      O'quv markazlari
                    </Typography>
                  )}
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to={"/teachers"}>
                  {({ isActive }) => (
                    <Typography
                      fontSize={"16px"}
                      fontWeight={400}
                      variant="h2"
                      style={{
                        color: isActive ? COLOR.errorCOLOR : COLOR.black,
                      }}
                    >
                      Ustozlar
                    </Typography>
                  )}
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to={"/Contacts"}>
                  {({ isActive }) => (
                    <Typography
                      fontSize={"16px"}
                      fontWeight={400}
                      variant="h2"
                      style={{
                        color: isActive ? COLOR.errorCOLOR : COLOR.black,
                      }}
                    >
                      Kontaktlar
                    </Typography>
                  )}
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to={"/AboutUs"}>
                  {({ isActive }) => (
                    <Typography
                      fontSize={"16px"}
                      fontWeight={400}
                      variant="h2"
                      style={{
                        color: isActive ? COLOR.errorCOLOR : COLOR.black,
                      }}
                    >
                      Biz haqimizda
                    </Typography>
                  )}
                </NavLink>
              </Stack>
            ) : null}
            {mod ? (
              <Stack alignItems={"center"}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  maxWidth="90px"
                  color={COLOR.black}
                  gap={"16px"}
                >
                  <Button
                    disableRipple
                    sx={{
                      minWidth: 0,
                      p: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      color: COLOR.black,
                      "&:hover": { bgcolor: "transparent" },
                    }}
                  >
                    <Sun_icons />
                  </Button>
                  <Button
                    disableRipple
                    sx={{
                      minWidth: 0,
                      p: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      color: COLOR.black,
                      "&:hover": { bgcolor: "transparent" },
                    }}
                  >
                    <Langueg_icons />
                    UZ
                  </Button>
                </Stack>
              </Stack>
            ) : (
              ""
            )}

            {sizedrower ? (
              <Stack gap={"8px"}>
                <Button
                  variant="outlined"
                  style={{ padding: "14px 20px", borderRadius: "10px" }}
                >
                  {" "}
                  <Typography variant="h6" fontWeight={700} fontSize={"14px"}>
                    Kirish
                  </Typography>{" "}
                </Button>
                <Button
                  variant="contained"
                  style={{ padding: "14px 20px", borderRadius: "10px" }}
                >
                  {" "}
                  <Typography variant="h2" fontWeight={700} fontSize={"14px"}>
                    Roʻyxatdan oʻtish
                  </Typography>{" "}
                </Button>
              </Stack>
            ) : null}
          </Stack>
        </Drawer>
      )}
    </header>
  );
}
