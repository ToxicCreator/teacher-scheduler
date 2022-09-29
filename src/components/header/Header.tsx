import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import RightMenu from "components/right-menu/RightMenu";
import SettingsScreen from "screens/SettingsScreen/SettingsScreen";

type Props = {
  teacherName: string,
};

const SettingsButton = () => (
  <IconButton
    size="large"
    edge="start"
    color="inherit"
    aria-label="menu"
  >
    <SettingsIcon />
  </IconButton>
);

function Header(props: Props) {
  const {teacherName} = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1,
            m: 1
          }}
        >
          {teacherName}
        </Typography>
        <RightMenu button={<SettingsButton />}>
          <SettingsScreen />
        </RightMenu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
