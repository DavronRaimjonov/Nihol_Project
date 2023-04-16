import { DrowDownContentWrap } from "../style";
import {
  SettingOutlined,
  TranslationOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export const useDropdownApi = () => {
  const dropIconStyle = {
    fontSize: "18px",
  };
  const linkItem = ({ settingHendler, localegHendler, logoutHendler }) => [
    {
      key: "0",
      label: (
        <DrowDownContentWrap onClick={settingHendler}>
          <SettingOutlined style={dropIconStyle} />
          Setting
        </DrowDownContentWrap>
      ),
    },
    {
      key: "1",
      label: (
        <DrowDownContentWrap onClick={localegHendler}>
          <TranslationOutlined style={dropIconStyle} />
          Change language
        </DrowDownContentWrap>
      ),
    },
    {
      key: "2",
      label: (
        <DrowDownContentWrap onClick={logoutHendler} style={{ color: "red" }}>
          <LogoutOutlined style={{ ...dropIconStyle, color: "red" }} />
          Log out
        </DrowDownContentWrap>
      ),
    },
  ];
  return { linkItem };
};
