import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import BackgroundBox from "./BackgroundBox";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const description = `
My work mainly focuses on software development. I love to build solutions that could change the way we work, and at the same time I put strong emphasis on building good software. This means having great maintainability, extensibility, scalability, etc.

Outside of work, I study stock market. I read news every day to get up-to-date with the latest information, and I do financial planning from time to time to achieve my goals.
`;

function About() {
  return (
    <BackgroundBox id="about">
      <Container>
        <Grid container spacing={6} sx={{ minHeight: 400 }}>
          {/* Put photo on top when on small screen */}
          <Grid item xs={12} md={8} order={{ xs: 2, md: 1 }}>
            <Typography
              variant="h5"
              sx={{
                color: "text.grey",
                whiteSpace: "pre-line", // for displaying new lines
                fontSize: "1.4rem",
              }}
            >
              {description}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            justifyContent={{ xs: "center", md: "right" }}
            order={{ xs: 1, md: 2 }}
          >
            {/* <Card sx={{ px: 1.5, paddingTop: 1.5, paddingBottom: 8 }}> */}
            <Card variant="outline">
              <CardMedia
                component="img"
                image="portrait.jpg"
                alt="Portrait"
                sx={{ maxWidth: { sm: 350, lg: 280 } }}
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </BackgroundBox>
  );
}

export default About;
