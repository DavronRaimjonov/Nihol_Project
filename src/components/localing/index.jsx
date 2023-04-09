import { Modal, Segmented } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSegmentedApi } from "../../Generic/segmented-api";
import { DropdownCenter } from "../../Generic/style";
import { store } from "../../redux";
import { switchLocaleLang } from "../../redux/locale-slice";
import { switchLanguage } from "../../redux/modal-slice";
import { setLocal } from "../../utils/storege";

const Localing = () => {
  store.subscribe(() => {
    setLocal("lang", store.getState().locale);
  });
  const { segmentedApi } = useSegmentedApi();
  const [language, setLanguage] = useState();
  const { langugageModalVisibilty } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const edit = () => {
    dispatch(switchLocaleLang(language));
    dispatch(switchLanguage());
  };

  return (
    <Modal
      open={langugageModalVisibilty}
      onCancel={() => dispatch(switchLanguage())}
      title={"Change Language"}
      okText={"Edit"}
      onOk={edit}
    >
      <DropdownCenter>
        <Segmented
          onChange={(e) => setLanguage(e)}
          size="large"
          options={segmentedApi()}
        />
      </DropdownCenter>
    </Modal>
  );
};

export default Localing;
