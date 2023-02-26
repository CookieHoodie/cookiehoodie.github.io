import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BackgroundBox from "./BackgroundBox";
import EmailIcon from "@mui/icons-material/Email";

const links = [
  { icon: <EmailIcon />, url: "mailto:chinhang.ong@gmail.com" },
  { icon: <GitHubIcon />, url: "https://github.com/cookiehoodie" },
  { icon: <LinkedInIcon />, url: "https://linkedin.com/in/chin-hang-ong" },
];

function Footer() {
  return (
    <BackgroundBox>
      <Container>
        <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "flex-end" }}>
          {links.map((item, i) => (
            <Button key={i} href={item.url} sx={{ color: "inherit" }}>
              {item.icon}
            </Button>
          ))}
        </Box>
      </Container>
    </BackgroundBox>
  );
}

export default Footer;
