import {useState} from 'react';
import Drawer from '@mui/material/Drawer';


type Props = {
  button: React.ReactNode,
  children?: React.ReactNode
};

function RightMenu(props: Props) {
  const {button, children} = props;
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div onClick={handleOpen}>{button}</div>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={handleClose}
      >
        {children}
      </Drawer>
    </>
  );
}

export default RightMenu;
