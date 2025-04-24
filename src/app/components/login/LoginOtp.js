import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Checkbox, Button } from "antd";
import { InputOTP } from 'antd-input-otp';
import { loginOtpRequest } from "../../../redux/action/authActions";
import { UserOutlined, LockOutlined } from "@ant-design/icons"
const LoginOtp = () => {
    const [form] = Form.useForm();
    const auth = useSelector((state)=>state?.auth)
    const dispatch = useDispatch();

    const handleFinish = async (values) => {
        let payload = {
          userId: auth?.user?.data?._id ,
          otp: "123456"
      }
      dispatch(loginOtpRequest(payload));
    
      };
  return (
    <Form onFinish={handleFinish} >
      <Form.Item label="OTP" name="otp">
        <InputOTP autoSubmit={form} inputType="numeric" />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  )
}

export default LoginOtp
