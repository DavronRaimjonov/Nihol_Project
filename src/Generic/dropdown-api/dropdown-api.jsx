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
  const linkItem = () => [
    {
      key: "0",
      label: (
        <DrowDownContentWrap>
          <SettingOutlined style={dropIconStyle} />
          Setting
        </DrowDownContentWrap>
      ),
    },
    {
      key: "1",
      label: (
        <DrowDownContentWrap>
          <TranslationOutlined style={dropIconStyle} />
          Change language
        </DrowDownContentWrap>
      ),
    },
    {
      key: "2",
      label: (
        <DrowDownContentWrap style={{ color: "red" }}>
          <LogoutOutlined style={{ ...dropIconStyle, color: "red" }} />
          Log out
        </DrowDownContentWrap>
      ),
    },
  ];
  return { linkItem };
};
