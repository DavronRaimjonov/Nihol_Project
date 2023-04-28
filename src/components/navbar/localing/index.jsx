import { Modal, Segmented } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useSegmentedApi } from "../../../Generic/segmented-api";
import { DropdownCenter } from "../../../Generic/style";
import { store } from "../../../redux";
import { switchLocaleLang } from "../../../redux/locale-slice";
import { switchLanguage } from "../../../redux/modal-slice";

const Localing = () => {
  const {t} = useTranslation()
  const { segmentedApi } = useSegmentedApi();
  const [language, setLanguage] = useState(localStorage.getItem("lang"));
  const { langugageModalVisibilty } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const edit = () => {
    dispatch(switchLocaleLang(language));
    dispatch(switchLanguage());
  };
  store.subscribe(() => {
    localStorage.setItem("lang", language);
  });

  return (
    <Modal
      open={langugageModalVisibilty}
      onCancel={() => dispatch(switchLanguage())}
      title={t('navbar_modals.change_lang')}
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
