import { Wrapper } from "./style";
import { Dropdown } from "antd";
import { useDropdownApi } from "../../Generic/dropdown-api/dropdown-api";
import LogOutModal from "../log-out-modal";
import { useDispatch } from "react-redux";
import { switchLogout } from "../../redux/modal-slice";
const Navbar = () => {
  const dispatch = useDispatch();
  const { linkItem } = useDropdownApi();
  const settingHendler = () => dispatch(switchLogout());
  return (
    <>
      <LogOutModal />
      <Wrapper>
        <Wrapper.Logo to={"/"}>NIHOL</Wrapper.Logo>
        <Dropdown
          menu={{ items: linkItem({ settingHendler }) }}
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
