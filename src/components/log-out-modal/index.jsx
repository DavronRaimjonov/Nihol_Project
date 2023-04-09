import { Modal } from "antd";
import { useSignOut } from "react-auth-kit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { switchLogout } from "../../redux/modal-slice";
import { removeItem } from "../../utils/storege";
const LogOutModal = () => {
  const { logoutModalVisblity } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signOut = useSignOut();
  const logOut = () => {
    removeItem("token");
    signOut();
    dispatch(switchLogout());
    return navigate("/login");
  };
  return (
    <Modal
      okText={"Log out"}
      cancelText={"Close"}
      open={logoutModalVisblity}
      onOk={logOut}
      onCancel={() => dispatch(switchLogout())}
      title={"Warning"}
    >
      <p>Are you sure?</p>
    </Modal>
  );
};

export default LogOutModal;
