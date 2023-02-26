import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { Container } from "@mui/system";
import BackgroundBox from "./BackgroundBox";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const name = "Chin Hang";
const intro = (
  <>
    Hello, I'm
    <br/>
    <Box component="span" sx={{ color: "cadetblue" }}>
      {name}.
    </Box>
  </>
);
const description = "A Software Engineer who loves building products.";

function Intro() {
  return (
    <BackgroundBox>
      <Container>
        <Grid
          container
          spacing={2}
          sx={{ minHeight: 400, alignItems: "center" }}
        >
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold" }}
            >
              {intro}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h4"
              sx={{ paddingTop: { xs: 10, sm: 15 }, color: "text.grey" }}
            >
              {description}
            </Typography>
          </Grid>
        </Grid>
        {/* 0 padding to align left, margintop when small screen for spacing */}
        <IconButton
          href="#about"
          sx={{ padding: 0, marginTop: { xs: 8, sm: 0 }, color: "inherit" }}
        >
          <ArrowDownwardIcon sx={{ fontSize: 50 }} />
        </IconButton>
      </Container>
    </BackgroundBox>
  );
}

export default Intro;
