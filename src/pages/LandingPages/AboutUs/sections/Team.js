/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/profilePlaceholder.webp";
// import team2 from "assets/images/bruce-mars.jpg";
// import team3 from "assets/images/ivana-squares.jpg";
// import team4 from "assets/images/ivana-square.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="white"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="grey">
              The Executive Team
            </MKTypography>
            <MKTypography variant="body2" color="grey" opacity={0.8}>
              The brains behind the madness.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Leonard Chia"
                position={{ color: "info", label: "Database Engineer" }}
                description="My passion is designing good database architecture. I love my job."
                email="lchia@buffalo.edu"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Andrea Boey"
                position={{ color: "info", label: "Database Engineer" }}
                description="My passion is designing good database architecture. I love my job."
                email="aboey@buffalo.edu"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team1}
                name="Stanley Heok"
                position={{ color: "info", label: "Database Engineer" }}
                description="My passion is designing good database architecture. I love my job."
                email="sheok@buffalo.edu"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team1}
                name="Yi Xuan Lau"
                position={{ color: "info", label: "Database Engineer" }}
                description="My passion is designing good database architecture. I love my job."
                email="ylau9@buffalo.edu"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team1}
                name="Sharlyn Wong"
                position={{ color: "info", label: "Database Engineer" }}
                description="My passion is designing good database architecture. I love my job."
                email="sharlynx@buffalo.edu"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
