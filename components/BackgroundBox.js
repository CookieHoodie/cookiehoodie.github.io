import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const BackgroundBox = styled(Box)`
  background-color: ${props => props.theme.palette.background.default};
  padding: ${props => props.theme.spacing(props.theme.custom.outerPadding)};
`;

export default BackgroundBox;