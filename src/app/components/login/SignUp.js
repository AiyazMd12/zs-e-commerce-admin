import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Checkbox, Button } from "antd";
import { signupRequest } from "../../../redux/action/authActions";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import SignUpOtp from "./SignUpOtp";
const SignUp = (props) => {
  const auth = useSelector((state)=>state?.auth)
  console.log(auth,"auth")
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    let payload = {
      name:values?.name,
      email:values?.email,
      phone:values?.phone,
      isAdmin : true
  }
  dispatch(signupRequest(payload));

  };

const  handleRedirection = ()=> {
 props?.handleRegister(false)
}

  return (auth?.user?.data?._id ? <SignUpOtp />  :
    <Form
      layout="vertical"
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <div>
        <Form.Item
          label={"Name"}
          name="name"
          rules={[
            {
              required: true,
            },
            {
              type: "name",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder={"Name"}
            type="text"
            size="large"
          />
        </Form.Item>
        <Form.Item
          label={"Email"}
          name="email"
          rules={[
            {
              required: true,
            },
            {
              type: "email",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder={"admin@demo.com"}
            type="email"
            size="large"
          />
        </Form.Item>
        <Form.Item
          label={"Phone No"}
          name="phone"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder={"Phone No"}
            size="large"
          />
        </Form.Item>
      </div>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          // loading={isLoading}
          size="large"
        >
          {"Register"}
        </Button>
      </Form.Item>
      <p>or <span onClick={()=>handleRedirection()}>Already Have Account Login</span></p>
    </Form>)
    // </Loading>
  
};

export default SignUp;
