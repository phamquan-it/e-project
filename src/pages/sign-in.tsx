import { Button, Form } from "antd";
import { Input } from "antd";
import Title from "antd/es/typography/Title";
import Link from "next/link";

const Login = ()=>{
    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
  return(
    <div className="flex justify-center items-center h-screen">
        <Form className="!w-96"
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
            <Title level={2} className="text-center ">Sign in</Title>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign in
            </Button>
          </Form.Item>
          <Form.Item label="" name="">
        <p>I do not have account: <Link href={'/sign-up'}>Sign up</Link></p>
            
          </Form.Item>
        </Form>
        </div>
    ); 
} 
 export default Login