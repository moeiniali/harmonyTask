import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, ConfigProvider } from 'antd';

type FieldType = {
 username?: string;
 password?: string;
 remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
 console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
 console.log('Failed:', errorInfo);
};

const OrgLogin: React.FC = () => (


 <div className='loginBgImg w-full md:max-w-[60%]  mb-20 min-h-[520px] m-auto flex flex-col justify-center items-center px-8 pt-[40px] relative gap-12 top-40'>




  <ConfigProvider theme={{
   components: {
    Input: {
     colorBorder: '#F2B80C', colorBgContainer: '#151515',
     colorPrimary: '#02161D', activeBorderColor: '#F2B80C', hoverBg: '#151515'
    },
    Button: { colorPrimary: '#F50148' }
   }
  }}>

   <Form
    style={{ width: '100%', height: '100%'  }}
    layout='horizontal'
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
   >

    <Form.Item<FieldType>
     label="Username"
     name="username"

     rules={[{ required: true, message: 'Please input your username!' }]}
    >

     <Input style={{ backgroundColor: 'red', maxWidth: '330px', height: '48px' }} />

    </Form.Item>



    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
     <Button type="primary" htmlType="submit">
      شروع کن
     </Button>
    </Form.Item>
   </Form >
  </ConfigProvider>
 </div>
);

export default OrgLogin;