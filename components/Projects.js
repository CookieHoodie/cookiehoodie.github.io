import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import LaunchIcon from "@mui/icons-material/Launch";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ImageListItem from "@mui/material/ImageListItem";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";
import CollectionsIcon from "@mui/icons-material/Collections";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import BackgroundBox from "./BackgroundBox";
import Masonry from "@mui/lab/Masonry";
import { CardActionArea } from "@mui/material";
import { useState } from "react";

const projects = [
  {
    title: "Collaborative Coding Platform",
    description:
      "A web app that connects people to solve coding problems together.",
    technologies: "Express.js, MongoDB, Docker, Google Cloud, Github CI/CD",
    projectUrl: "https://github.com/CookieHoodie/collab-coding",
    imageUrl: "projects/peerprep/4.png",
    gallery: [
      { src: "img", url: "projects/peerprep/1.png" },
      { src: "img", url: "projects/peerprep/2.png" },
      { src: "img", url: "projects/peerprep/3.png" },
      { src: "img", url: "projects/peerprep/4.png" },
      { src: "img", url: "projects/peerprep/5.png" },
    ],
  },
  {
    title: "Augmented Reality App",
    description:
      "AR application that runs on NReal AR glasses. Does object tracking, face detection, dimension estimation, etc. in the 3D world.",
    technologies: "C#, C++, Unity, OpenCV, AI, MRTK",
    projectUrl: "",
    imageUrl: "projects/nreal/2.jpg",
    gallery: [
      { src: "img", url: "projects/nreal/1.jpg" },
      { src: "video", url: "projects/nreal/anchor.mp4" },
      { src: "video", url: "projects/nreal/aruco.mp4" },
    ],
  },
  {
    title: "Game Bot",
    description:
      "An OSU! game bot that does autoplay and autopilot for bored players seeking refreshed OSU! experience.",
    technologies: "C++, Windows API",
    projectUrl: "https://github.com/CookieHoodie/OsuBot",
    imageUrl: "projects/osubot/1.png",
    gallery: [
      { src: "video", url: "projects/osubot/demo1.mp4" },
      { src: "video", url: "projects/osubot/demo2.mp4" },
    ],
  },
  {
    title: "MP3 Player",
    description:
      "A MP3 player for OSU! rhythm game that let the users listen to the songs they have downloaded in the game. Provides functionalities such as filtering, hide songs, download songs, etc.",
    technologies: "JavaFX, SQLite3",
    projectUrl: "https://cookiehoodie.github.io/osu-songs-collector/",
    imageUrl: "projects/mp3/1.png",
    gallery: [
      { src: "img", url: "projects/mp3/1.png" },
      {
        src: "img",
        url: "projects/mp3/2.jpg",
      },
    ],
  },
  {
    title: "Smart Robot Car",
    description:
      "A wireless robot car that could be controlled remotely from mobile app. A camera is mounted on the controllable robot arm to stream real-time surrounding video for navigation.",
    technologies: "Android, Python, Raspberry Pi",
    projectUrl: "https://bitbucket.org/hcwk/rpi_car/src/master/",
    imageUrl: "projects/car/1.jpg",
    gallery: [
      { src: "img", url: "projects/car/2.jpg" },
      { src: "img", url: "projects/car/3.jpg" },
    ],
  },
];

function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({ gallery: [] }); // init so that map in dialog doesn't complain

  const handleOpen = () => {
    setModalIsOpen(true);
  };

  const handleClose = () => {
    setModalIsOpen(false);
  };

  return (
    <BackgroundBox id="projects">
      <Container>
        <Typography variant="h2" sx={{ marginBottom: 8 }}>
          Projects
        </Typography>

        {/* Shared dialog for all projects, just the data differs */}
        <Dialog
          open={modalIsOpen}
          onClose={handleClose}
          fullWidth
          maxWidth="xl" // the width size
          aria-labelledby="gallery-title"
          PaperProps={{ sx: { height: "100%" } }} // full height modal
        >
          <DialogTitle
            id="gallery-title"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "text.grey",
            }}
          >
            <CollectionsIcon sx={{ marginRight: 1 }} />
            <Typography sx={{ fontSize: "1.8rem", flexGrow: 1 }}>
              Gallery
            </Typography>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                justifyContent: "flex-end",
                color: "text.grey",
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
              {modalData.gallery.map((item) => (
                <ImageListItem key={item.url}>
                  <CardMedia
                    component={item.src}
                    src={item.url}
                    alt={item.url}
                    // for videos
                    autoPlay
                    controls
                    muted
                    sx={{ maxHeight: 700 }} // to avoid awkward size
                  />
                </ImageListItem>
              ))}
            </Masonry>
          </DialogContent>
        </Dialog>

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
                  <Tooltip
                    title={
                      project.projectUrl
                        ? "Project website"
                        : "Project website not available"
                    }
                  >
                    <span>
                      {/* Needed for disabled state of button or tooltip will complaint */}
                      <IconButton
                        color="primary"
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener" // security purpose
                        sx={{ padding: 0 }} // to align perfectly with the text
                        disabled={project.projectUrl ? false : true} // disable the button for project without url
                      >
                        <LaunchIcon />
                      </IconButton>
                    </span>
                  </Tooltip>
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
                <Tooltip
                  enterDelay={200}
                  enterNextDelay={200}
                  title={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center", // vertically center the icon and text
                        fontSize: 13, // size of both text and icon
                      }}
                    >
                      <Typography>Gallery</Typography>
                      <NorthEastIcon fontSize="small" />
                    </Box>
                  }
                  followCursor
                >
                  <CardActionArea
                    onClick={() => {
                      setModalData(project);
                      handleOpen();
                    }}
                    // make hover effect more pronounced
                    sx={{
                      "&:hover .MuiCardActionArea-focusHighlight": {
                        opacity: 0.2,
                      },
                    }}
                  >
                    <Card
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        height: "100%", // otherwise when hover, there would be overflow vertical space
                      }}
                    >
                      {/* If img doesn't fit, it is vertically centered */}
                      <CardMedia
                        component="img"
                        image={project.imageUrl}
                        alt={project.imageUrl}
                      />
                    </Card>
                  </CardActionArea>
                </Tooltip>
              </Grid>
            </Grid>
            {/* Default (light) divider on small screens to avoid project confusion */}
            <Divider variant="" sx={{ display: { md: "none" }, my: 8 }} />
          </Box>
        ))}
        <Divider sx={{ mt: {xs: 0, md: 15}, mb: 2 }} />
      </Container>
    </BackgroundBox>
  );
}

export default Projects;
