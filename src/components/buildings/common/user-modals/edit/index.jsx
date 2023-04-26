import { Button, DatePicker, Form, Input, message } from "antd";
import { useSelector } from "react-redux";

const Edit = () => {
  const { RangePicker } = DatePicker;
  const { data } = useSelector((state) => state.buildingData);
  const onFinish = (e) => {
    message.success("Submit success!");
    console.log(e);
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
        <Input defaultValue={data.fullName} />
      </Form.Item>
      <Form.Item
        label="Birth Date"
        name="username"
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
        <Input defaultValue={data?.passportID} />
      </Form.Item>
      <Form.Item
        label="Phone number"
        name="phoneNumber"
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input
          type="number"
          addonBefore={"+998"}
          defaultValue={data?.phoneNumber}
        />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: "Please input your adress!" }]}
      >
        <Input defaultValue={data.address} />
      </Form.Item>
      <Form.Item
        label="Date Range"
        name="date range"
        rules={[{ required: true, message: "Please input your date range!" }]}
      >
        <RangePicker />
      </Form.Item>
      <Form.Item
        label="Pay by cash"
        name="paidByCash"
        rules={[{ required: true, message: "Please input your Pay by cash!" }]}
      >
        <Input type="number" defaultValue={data?.paidByCash} />
      </Form.Item>
      <Form.Item
        label="Pay by card"
        name="paidByPlasticCard"
        rules={[{ required: true, message: "Please input your Pay by card!" }]}
      >
        <Input type="number" defaultValue={data?.paidByPlasticCard} />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Edit;
