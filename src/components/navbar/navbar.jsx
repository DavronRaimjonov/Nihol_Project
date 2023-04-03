import React from "react";
import { Wrapper } from "./style";
import { Dropdown } from "antd";
import { useDropdownApi } from "../../Generic/dropdown-api/dropdown-api";
import { useNavigate } from "react-router-dom";
import { removeItem } from "../../utils/storege";

const Navbar = () => {
  const { linkItem } = useDropdownApi();
  const navigate = useNavigate();
  const logOut = () => {
    removeItem("token");
    return navigate("/login");
  };
  return (
    <Wrapper>
      <Wrapper.Logo to={"/"}>NIHOL</Wrapper.Logo>
      <Dropdown
        menu={{ items: linkItem({ logOut }) }}
        placement={"bottomRight"}
        trigger={["click"]}
      >
        <Wrapper.Avatar icon={"D"} />
      </Dropdown>
    </Wrapper>
  );
};

export default Navbar;
