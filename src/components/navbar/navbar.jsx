import React from "react";
import { Wrapper } from "./style";
import { Dropdown } from "antd";
import { useDropdownApi } from "../../Generic/dropdown-api/dropdown-api";

const Navbar = () => {
  const { items } = useDropdownApi();
  return (
    <Wrapper>
      <Wrapper.Logo>NIHOL</Wrapper.Logo>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"
        trigger={["click"]}
      >
        <Wrapper.Avatar icon={"D"} />
      </Dropdown>
    </Wrapper>
  );
};

export default Navbar;
