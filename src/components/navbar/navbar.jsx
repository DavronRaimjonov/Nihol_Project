import React from "react";
import { Wrapper } from "./style";
import { Dropdown } from "antd";
import { useDropdownApi } from "../../Generic/dropdown-api/dropdown-api";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { linkItem } = useDropdownApi();

  return (
    <Wrapper>
      <Wrapper.Logo>NIHOL</Wrapper.Logo>
      <Dropdown
        menu={{
          items: linkItem(),
        }}
        placement={"bottomRight"}
        trigger={["click"]}
      >
        <Wrapper.Avatar icon={"D"} />
      </Dropdown>
    </Wrapper>
  );
};

export default Navbar;
