import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import BackgroundBox from "./BackgroundBox";
import { Container } from "@mui/system";
import Divider from "@mui/material/Divider";

const skills = [
  { title: "Main Languages", details: "Python, C++, JavaScript, Java" },
  {
    title: "Main Tools",
    details:
      "Node.js, React, Kafka, Redis, Docker, MongoDB, PostgreSQL, Google Cloud",
  },
];

function Skills() {
  return (
    <BackgroundBox>
      <Container>
        {skills.map((skill) => (
          <Grid key={skill.title} container spacing={2} py={2}>
            <Grid item xs={12} sm={3}>
              <Typography
                variant="h6"
                // sx={{ textDecoration: "underline", textUnderlineOffset: 3 }}
                sx={{ fontWeight: "bold", textUnderlineOffset: 3 }}
              >
                {skill.title}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              {/* word spacing to make the skills look clearer */}
              <Typography variant="h6" sx={{ wordSpacing: 1 }}>
                {skill.details}
              </Typography>
            </Grid>
          </Grid>
        ))}
        <Divider sx={{ mt: 15, mb: 3 }} />
      </Container>
    </BackgroundBox>
  );
}

export default Skills;
