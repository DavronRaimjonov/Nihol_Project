import React from "react";
import { Wrapper } from "./style";
import { Dropdown } from "antd";
import { useDropdownApi } from "../../Generic/dropdown-api/dropdown-api";
import { useNavigate } from "react-router-dom";
import { removeItem } from "../../utils/storege";
import { Modal } from "antd";
import { useOpen } from "../../hooks/useOpen";
import { useSignOut } from "react-auth-kit";

const Navbar = () => {
  const { linkItem } = useDropdownApi();
  const navigate = useNavigate();
  const { open, isClose, isOpen } = useOpen();
  const signOut = useSignOut();

  const logOut = () => {
    removeItem("token");
    signOut();
    return navigate("/login");
  };
  return (
    <Wrapper>
      <Wrapper.Logo to={"/"}>NIHOL</Wrapper.Logo>
      <Dropdown
        menu={{ items: linkItem({ isOpen }) }}
        placement={"bottomRight"}
        trigger={["click"]}
      >
        <Wrapper.Avatar icon={"D"} />
      </Dropdown>
      <Modal
        okText={"Log out"}
        cancelText={"Close"}
        open={open}
        onOk={logOut}
        onCancel={isClose}
        title={"Warning"}
      >
        <p>Are you sure?</p>
      </Modal>
    </Wrapper>
  );
};

export default Navbar;
