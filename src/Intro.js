import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import BackgroundBox from "./BackgroundBox";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const name = "Chin Hang";
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
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              Hello, I'm <br />
              {name}.
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
        <ArrowDownwardIcon
          sx={{ paddingTop: { xs: 8, sm: 0 }, fontSize: 50 }}
        />
      </Container>
    </BackgroundBox>
  );
}

export default Intro;
