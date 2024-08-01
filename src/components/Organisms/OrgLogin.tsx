import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, ConfigProvider, Row } from 'antd';
import { AtomImage, AtomText } from '../ExAllCo';
import { Link, useNavigate, redirect } from "react-router-dom";


type FieldType = {
 username?: string;
 password?: string;
 remember?: string;
};




const OrgLogin = () => {
 const navigate = useNavigate()
 const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
 };

 const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
 };
 return (

  <div className=' sm:max-w-[1140px] w-full min-h-[520px] gap-8 sm:px-8 px-2 flex justify-center items-center mt-80'>


   <AtomImage src='images/Group (1)left.svg' width={200} height={324} className='absolute max-xl:top-[62%] max-xl:rotate-90 xl:left-0' />



   <div className=' loginBgImg w-full h-full flex flex-col justify-center items-center gap-6 py-10'>



    <div className='w-[330px]  h-auto flex flex-col gap-4 justify-center items-center content-center text-center'>
     <AtomText children="در کمتر از 5 دقیقه ترید حرفه ای رو شروع کنین  " color='#F2B80C' size="24px" weight='500' lineHeight='34px' />
     <AtomText children="برای شروع استفاده از بیدارز پرو و ترید حرفه ای کافیه شمارت رو وارد کنی." color='#fff' size="20px" weight='400' lineHeight='34px' />

    </div>


    <div className='w-[330px] h-auto flex flex-col gap-4   justify-center items-center content-center'>

     <ConfigProvider theme={{
      token: {

      },
      components: {
       Input: {
        colorBorder: '#F2B80C', colorBgContainer: '#151515', colorTextPlaceholder: "#fff", colorPrimaryText: '#fff', colorText: '#F2B80C',
        colorPrimary: '#02161D', activeBorderColor: '#F2B80C', hoverBg: '#151515', controlHeight: 40,
       },
       Button: { colorPrimary: '#F50148', colorPrimaryHover: '#B00033' }
      }
     }}>

      <Form
       style={{ width: '330px' }}
       layout='horizontal'
       name="basic"
       onFinish={onFinish}
       onFinishFailed={onFinishFailed}
       autoComplete="off"

      >

       <Form.Item<FieldType>
        name="username"

        style={{ direction: 'rtl', width: '330px' }}
        rules={[
         { required: true, message: ' لطفا شماره موبایل خود را وارد نمایید ' },
         { pattern: RegExp("((0?9)|(\\+?989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)|(32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)|(20)|(21)|(22)|(23)|(31)|(34)|(9910)|(9911)|(9913)|(9914)|(9999)|(999)|(990)|(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)|(998))\\W?\\d{3}\\W?\\d{4}", 'g'), message: 'شماره همراه وارد شده صحیح نمیباشد.' }
        ]}
       >

        <Input dir='rtl' size='large' placeholder='شماره موبایل' />

       </Form.Item>

       <Form.Item >
        <Button size='large' style={{ width: '330px', fontWeight: 700, fontSize: '16px', marginTop: '16px' }} type="primary" htmlType="submit">
         شروع کن
        </Button>
       </Form.Item>

      </Form >
     </ConfigProvider>

    </div>

    <Link to="/riple" className='flex items-center gap-2 cursor-pointer hover:animate-pulse'>
     <AtomImage src='/images/Vector 16.png' />
     <p className='text-white font-normal text-sm'>چطوری دریافت کنیم؟</p>
    </Link>


   </div>


   <AtomImage src='images/GroupRight.svg' width={200} height={324} className='absolute max-xl:hidden right-0' />






  </div>

 );
}

export default OrgLogin;







