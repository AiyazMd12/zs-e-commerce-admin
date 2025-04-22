import { useDispatch } from 'react-redux';
import { Form,Input, Checkbox, Button } from 'antd';
import {loginRequest} from "../../../redux/action/authActions"
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const LoginPage = (props) => {
  const {handleRegister} =props;
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(loginRequest({ loginData: values }));
  };

  const  handleRedirection = ()=> {
    console.log("Hello please login")
    handleRegister(true)
   }
    return (
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
        label={'Email'}
        name="email"
        rules={[
          {
            required: true,
          },
          {
            type: 'email',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder={'admin@demo.com'}
          type="email"
          size="large"
        />
      </Form.Item>
      <Form.Item
        label={'Password'}
        name="password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder={'admin123'}
          size="large"
        />
      </Form.Item>

      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>{'Remember me'}</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="/forgetpassword" style={{ marginLeft: '0px' }}>
          {'Forgot password'}
        </a>
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
              {'Log in'}
            </Button>
          </Form.Item>
          <p>or <span onClick={()=>handleRedirection()}>Register Now!</span></p>
        </Form>
    );
};

export default LoginPage;
