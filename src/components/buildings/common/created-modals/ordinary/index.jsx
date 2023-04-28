import { Button, DatePicker, Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useAxios } from "../../../../../hooks/useAxios";
import { switchCreatedUser } from "../../../../../redux/modal-slice";
import { ObservingWrap } from "../../user-modals/obseving/style";

const Ordinary = () => {
  const { RangePicker } = DatePicker;
  const dispatch = useDispatch();
  const axios = useAxios();
  const { data } = useSelector((state) => state.buildingData);
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
    console.log(editDate);

    // return axios({
    //   url: `/accomodation/${data.roomNumber}/update-user`,
    //   method: "POST",
    //   body: editDate,
    // });
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
        label="Daily price"
        name=""
        rules={[{ required: true, message: "Please input your Pay by cash!" }]}
      >
        <Input type="number" />
      </Form.Item>
      <ObservingWrap.Buttons>
        <Button onClick={() => dispatch(switchCreatedUser())}>Cancel</Button>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </ObservingWrap.Buttons>
    </Form>
  );
};

export default Ordinary;

/*
address:"Chirchiq"
arrivalDate: 1682708400000birthDate: 1682794800000
buildingNumber: "building-2"
clienteID: "63e647433ed085e56ef0b8f1"
dayCost: "10000"
endDate: 1683658800000
fullName: "Toshbolta Eshpulatov"
hasVoucher: false
params: {}
passportID: "AB34787"
phoneNumber: "777777776"
roomID: "63e646a13ed085e56ef0b8ef"
roomNumber: 1
*/
