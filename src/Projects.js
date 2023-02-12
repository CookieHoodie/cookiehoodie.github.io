import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import LaunchIcon from "@mui/icons-material/Launch";
import IconButton from "@mui/material/IconButton";

const projects = [
  {
    title: "Collaborative Coding Platform",
    description:
      "A web app that connects people to solve coding problems together.",
    technologies: "Express.js, MongoDB, Docker, Google Cloud, Github CI/CD",
    projectUrl: "https://github.com/CookieHoodie/collab-coding",
    imageUrl: "projects/peerprep/4.png",
  },
  {
    title: "Augmented Reality App",
    description:
      "AR application that runs on NReal AR glasses. Does object tracking, face detection, dimension estimation, etc. in the 3D world.",
    technologies: "C#, C++, Unity, OpenCV, AI, MRTK",
    projectUrl: "",
    imageUrl: "projects/nreal/1.jpg",
  },
  {
    title: "Game Bot",
    description:
      "An OSU! game bot that does autoplay and autopilot for bored players seeking refreshed OSU! experience.",
    technologies: "C++, Windows API",
    projectUrl: "https://github.com/CookieHoodie/OsuBot",
    imageUrl: "projects/osubot/1.png",
  },
  {
    title: "MP3 Player",
    description:
      "A MP3 player for OSU! rhythm game that let the users listen to the songs they have downloaded in the game. Provides functionalities such as filtering, hide songs, download songs, etc.",
    technologies: "JavaFX, SQLite3",
    projectUrl: "https://cookiehoodie.github.io/osu-songs-collector/",
    imageUrl: "projects/mp3/1.png",
  },
  {
    title: "Smart Robot Car",
    description:
      "A wireless robot car that could be controlled remotely from mobile app. A camera is mounted on the controllable robot arm to stream real-time surrounding video for navigation.",
    technologies: "Android, Python, Raspberry Pi",
    projectUrl: "https://bitbucket.org/hcwk/rpi_car/src/master/",
    imageUrl: "projects/car/1.jpg",
  },
];

function Projects() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        padding: (theme) => theme.custom.outerPadding,
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ marginBottom: 8 }}>
          Projects
        </Typography>
        {projects.map((project) => (
          <Box key={project.title}>
            <Grid
              container
              columnSpacing={{ md: 10, lg: 18 }} // for spacing between words and image. Less spacing for smaller screen
              sx={{ marginBottom: { md: 16 }, minHeight: 360 }} // minHeight to make sure the words have enough spacing
            >
              <Grid
                item
                xs={12}
                md={5}
                order={{ xs: 2, md: 1 }}
                sx={{ display: "flex", flexDirection: "column" }} // flex for adjusting position of the clickable link
                justifyContent="space-between" // evenly spaced between each item in this component. Can push the clickable link to bottom with the help of flexgrow
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      paddingBottom: 2,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.15rem",
                      paddingBottom: 5,
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.1rem",
                      color: "text.grey",
                      flexGrow: "1", // fill up all the vertical space so that the clickable link is pushed to bottom, and the above was not evenly spaced anymore
                    }}
                  >
                    {project.technologies}
                  </Typography>
                </Box>
                <Box sx={{ marginTop: 5 }}>
                  <IconButton
                    color="primary"
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener"  // security purpose
                    sx={{ padding: 0 }}  // to align perfectly with the text
                    disabled={project.projectUrl ? false : true}  // disable the button for project without url
                  >
                    <LaunchIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={7}
                display="flex"
                justifyContent={{ xs: "left", md: "right" }}
                order={{ xs: 1, md: 2 }}
                sx={{ marginBottom: { xs: 5, md: 0 } }} // when small screen, spacing between image and words
              >
                <Card sx={{ display: "flex", justifyContent: "center" }}>
                  {/* If img doesn't fit, it is vertically centered */}
                  <CardMedia
                    component="img"
                    image={project.imageUrl}
                    alt={project.imageUrl}
                  />
                </Card>
              </Grid>
            </Grid>
            {/* Light divider on small screens to avoid project confusion */}
            <Divider variant="" sx={{ display: { md: "none" }, my: 8 }} />
          </Box>
        ))}
      </Container>
    </Box>
  );
}

export default Projects;
