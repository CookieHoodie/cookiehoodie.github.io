import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const description = `
My work mainly focuses on software development. I love to build solutions that could change the way we work, and at the same time I put strong emphasis on building good software. This means having great maintainability, extensibility, scalability, etc.

Outside of work, I love studying stock market. I read news every day to get up-to-date with the latest situation, and I do financial planning from time to time so as to stick to my goals.
`;

function About() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        padding: (theme) => theme.custom.outerPadding,
      }}
    >
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
            <Card sx={{ px: 1.5, paddingTop: 1.5, paddingBottom: 8 }}>
              <CardMedia
                component="img"
                image="portrait.jpg"
                alt="Portrait"
                sx={{ maxWidth: 350 }}
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
