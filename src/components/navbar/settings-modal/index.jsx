import { Input, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { DropdownCenter } from "../../../Generic/style";
import { switchSetting } from "../../../redux/modal-slice";
import { Avatars, InputWrap } from "./style";
const SettingModal = () => {
  const { settingModalVisibilty } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const logOut = () => {};
  return (
    <Modal
      okText={"Log out"}
      cancelText={"Cancel"}
      open={settingModalVisibilty}
      onOk={logOut}
      onCancel={() => dispatch(switchSetting())}
      title={"Profile"}
    >
      <DropdownCenter>
        <Avatars style={{ backgroundColor: "#f56a00" }} size={60}>
          D
        </Avatars>
      </DropdownCenter>
      <InputWrap>
        <label htmlFor="">Name</label>
        <Input disabled={true} placeholder={"Davron"} />
      </InputWrap>
      <InputWrap>
        <label htmlFor="">Surname</label>
        <Input disabled={true} placeholder={"Raimjonov"} />
      </InputWrap>
    </Modal>
  );
};

export default SettingModal;
