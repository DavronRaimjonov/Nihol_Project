import { Wrapper } from "./style";
import { Dropdown } from "antd";
import { useDropdownApi } from "../../Generic/dropdown-api/dropdown-api";
import LogOutModal from "../log-out-modal";
import { useDispatch } from "react-redux";
import { switchLanguage, switchLogout } from "../../redux/modal-slice";
import Localing from "../localing";
const Navbar = () => {
  const dispatch = useDispatch();
  const { linkItem } = useDropdownApi();
  const settingHendler = () => dispatch(switchLogout());
  const localegHendler = () => dispatch(switchLanguage());
  return (
    <>
      <LogOutModal />
      <Localing />
      <Wrapper>
        <Wrapper.Logo to={"/"}>NIHOL</Wrapper.Logo>
        <Dropdown
          menu={{ items: linkItem({ settingHendler, localegHendler }) }}
          placement={"bottomRight"}
          trigger={["click"]}
        >
          <Wrapper.Avatar icon={"D"} />
        </Dropdown>
      </Wrapper>
    </>
  );
};

export default Navbar;
