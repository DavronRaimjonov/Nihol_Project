import { Button, DatePicker, Form, Input, message } from "antd";
import dayjs from "dayjs";
import { useQueryClient } from "react-query";

import { useDispatch, useSelector } from "react-redux";
import { useEditData } from "../../../../../hooks/useActions";
import { switchUser } from "../../../../../redux/modal-slice";
import { ObservingWrap } from "../obseving/style";

const Edit = () => {
  const { RangePicker } = DatePicker;

  const { data } = useSelector((state) => state.buildingData);
  const queryClient = useQueryClient();
  const userData = queryClient.getQueryData(`user${data._id}`);
  let dataPhoneNumber = userData.phoneNumber.slice(4);
  const dispatch = useDispatch();
  const { mutate } = useEditData();
  const onFinish = (e) => {
    let birthDate = new Date(e.birthDate.$d).getTime();
    let arrivalDate = new Date(e.daterange[0].$d).getTime();
    let endDate = new Date(e.daterange[1].$d).getTime();
    delete e.daterange;
    let editData = {
      ...userData,
      ...e,
      arrivalDate,
      endDate,
      birthDate,
      phoneNumber: "+998" + e.phoneNumber,
      hasVoucher: false,
    };
    return mutate({ editData, buildingNumber: userData.buildingNumber });
  };

  return (
    <Form
      style={{ marginTop: "20px" }}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        fullName: userData.fullName,
        birthDate: dayjs(userData.birthDate),
        passportID: userData.passportID,
        phoneNumber: dataPhoneNumber,
        address: userData.address,
        paidByCash: userData.paidByCash,
        paidByPlasticCard: userData.paidByPlasticCard,
        daterange: [dayjs(+userData.arrivalDate), dayjs(+userData.endDate)],
      }}
    >
      <Form.Item
        label="Full name"
        name="fullName"
        rules={[{ required: true, message: "Please input your fullName!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Birth Date"
        name="birthDate"
        rules={[{ required: true, message: "Please input your date!" }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="Passport number"
        name="passportID"
        rules={[
          { required: true, message: "Please input your passport number!" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone number"
        name="phoneNumber"
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input type="number" addonBefore={"+998"} />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: "Please input your adress!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Date Range"
        name="daterange"
        rules={[{ required: true, message: "Please input your date range!" }]}
      >
        <RangePicker />
      </Form.Item>
      <Form.Item
        label="Pay by cash"
        name="paidByCash"
        rules={[{ required: true, message: "Please input your Pay by cash!" }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        label="Pay by card"
        name="paidByPlasticCard"
        rules={[{ required: true, message: "Please input your Pay by card!" }]}
      >
        <Input type="number" />
      </Form.Item>
      <ObservingWrap.Buttons>
        <Button onClick={() => dispatch(switchUser())}>Cancel</Button>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </ObservingWrap.Buttons>
    </Form>
  );
};

export default Edit;
