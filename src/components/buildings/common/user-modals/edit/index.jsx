import { Button, DatePicker, Form, Input, message } from "antd";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { useAxios } from "../../../../../hooks/useAxios";
import { switchUser } from "../../../../../redux/modal-slice";
import { ObservingWrap } from "../obseving/style";

const Edit = () => {
  const { RangePicker } = DatePicker;
  const { data } = useSelector((state) => state.buildingData);
  const dispatch = useDispatch();
  const axios = useAxios();
  const onFinish = (e) => {
    let birthDate = new Date(e.birthDate.$d).getTime();
    let arrivalDate = new Date(e.daterange[0].$d).getTime();
    let endDate = new Date(e.daterange[1].$d).getTime();
    delete e.daterange;
    let editDate = {
      ...e,
      arrivalDate,
      endDate,
      birthDate,
      phoneNumber: "+998" + e.phoneNumber,
      hasVoucher: false,
      roomNumber: data.roomNumber,
      clienteID: data.clienteID,
      _id: data._id,
    };
    return axios({
      url: `/accomodation/${data.roomNumber}/update-user`,
      method: "POST",
      body: editDate,
    });
  };

  const onFinishFailed = (e) => {
    message.error("Submit failed!");
  };

  return (
    <Form
      style={{ marginTop: "20px" }}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={{
        fullName: data.fullName,
        birthDate: dayjs(data.birthDate),
        passportID: data.passportID,
        phoneNumber: data.phoneNumber,
        address: data.address,
        paidByCash: data.paidByCash,
        paidByPlasticCard: data.paidByPlasticCard,
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
