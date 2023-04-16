import { Wrapper } from "./style";
import { Dropdown } from "antd";
import { useDropdownApi } from "../../Generic/dropdown-api/dropdown-api";
import LogOutModal from "./log-out-modal";
import { useDispatch } from "react-redux";
import {
  switchLanguage,
  switchLogout,
  switchSetting,
} from "../../redux/modal-slice";
import Localing from "./localing";
import SettingModal from "./settings-modal";
const Navbar = () => {
  const dispatch = useDispatch();
  const { linkItem } = useDropdownApi();
  const logoutHendler = () => dispatch(switchLogout());
  const localegHendler = () => dispatch(switchLanguage());
  const settingHendler = () => dispatch(switchSetting());
  return (
    <>
      <LogOutModal />
      <Localing />
      <SettingModal />
      <Wrapper>
        <Wrapper.Logo to={"/"}>NIHOL</Wrapper.Logo>
        <Dropdown
          menu={{
            items: linkItem({ settingHendler, localegHendler, logoutHendler }),
          }}
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
