import BackgroundBox from "./BackgroundBox";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Contact() {
  return (
    <BackgroundBox id="contact" sx={{ pb: 10 }}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} lg={5}>
            <Typography variant="h5">Wanna know more about me?</Typography>
            <Typography
              variant="h5"
              sx={{
                whiteSpace: "pre",
                display: "flex",
                alignItems: "center",
              }}
            >
              Read my <Link target="_blank">blogs (coming soon)</Link>
              <ArrowForwardIcon fontSize="large" sx={{ ml: 2 }} />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </BackgroundBox>
  );
}

export default Contact;
