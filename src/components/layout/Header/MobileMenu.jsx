import { Drawer } from "./styles";

const MobileMenu = ({ children, isOpen, handleClose }) => {
  return (
    <Drawer open={isOpen} anchor='bottom' onClose={handleClose}>
      {children}
    </Drawer>
  );
};

export default MobileMenu;
