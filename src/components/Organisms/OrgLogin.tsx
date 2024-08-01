import React, { useState } from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, ConfigProvider, Row } from 'antd';
import { AtomImage, AtomText, OrgTimer, OrgModal } from '../ExAllCo';
import { Link, useNavigate, redirect } from "react-router-dom";
import './Organism.css'

type FieldType = {
 phonNumber?: string;
 verificationCode?: string;

};




const OrgLogin = () => {
 const [form] = Form.useForm();
 const [isPhonNumber, setIsPhonNumber] = useState<boolean>(false)
 const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
 const [isOtp, setIsOtp] = useState<boolean>(false)
 const [isTimerActive, setIsTimerActive] = useState<boolean>(true);
 //validation Form ------------------------------------------
 const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
  if (values?.phonNumber) {
   setIsPhonNumber(true)
  }
  if (values?.verificationCode) {
   setIsOtp(true)
   setIsPhonNumber(false)
  }
  form.resetFields();
 };

 const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
 };


 const handlerTimerChange = (newTimerStatus: boolean) => {
  setIsTimerActive(newTimerStatus)
 }




 return (

  <div className=' sm:max-w-[70%] w-full h-[520px]  gap-8 sm:px-2 px-2 flex justify-center items-center mt-96 '>

   <AtomImage src='images/Group (1)left.svg' width={200} height={324} className='absolute max-xl:bottom-[500px] max-xl:rotate-90 xl:left-0' />

   <div className=' loginBgImg w-full h-full flex flex-col justify-center items-center gap-6 py-10  border border-[#F2B80C] rounded-lg'>

    <div className='w-[330px]  h-auto flex flex-col gap-4 justify-center items-center content-center text-center'>
     {isPhonNumber ? (
      <>
       <AtomText children=" کاربر جدید بیدارز, ممنون از اعتمادتون " color='#F2B80C' size="18px" weight='500' lineHeight='34px' />
       <AtomText children=" لطفا کد تایید ارسال شده را وارد کنین تا به صفحه ثبت نام منتقل بشین  " color='#F2B80C' size="24px" weight='500' lineHeight='34px' />
       <AtomText children="  به ازای هر تراکنش تا سقف 100 ریپل هم می تونین هدیه بگیرین " color='#fff' size="20px" weight='400' lineHeight='34px' />
      </>
     ) : isOtp ? (<>
      <p className='text-[#F2B80C] font-medium text-sm'>کاربر گرامی {isPhonNumber} ثبت نام شما با موفقیت انجام شد.</p>
     </>) : (<>
      <AtomText children="در کمتر از 5 دقیقه ترید حرفه ای رو شروع کنین  " color='#F2B80C' size="24px" weight='500' lineHeight='34px' />
      <AtomText children="برای شروع استفاده از بیدارز پرو و ترید حرفه ای کافیه شمارت رو وارد کنی." color='#fff' size="20px" weight='400' lineHeight='34px' />
     </>

     )}
    </div>




    <div className='w-[330px] h-auto flex flex-col gap-4   justify-center items-center content-center'>



     <Form
      form={form}
      style={{ width: '330px' }}
      layout='horizontal'
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"

     >
      {isPhonNumber ? (
       <>
        <Form.Item<FieldType>
         name="verificationCode"

         style={{ width: '330px' }}
         rules={[
          { required: true, message: ' لطفا کد تایید را وارد نمایید.' },
         ]}
        >
         <Input disabled={!isTimerActive ? true : false} style={{ textAlign: 'center' }} maxLength={6} size='large' placeholder=' ------ ' />
        </Form.Item>
       </>
      ) : !isOtp && (

       <Form.Item<FieldType>
        name="phonNumber"

        style={{ width: '330px' }}
        rules={[
         { required: true, message: ' لطفا شماره موبایل خود را وارد نمایید ' },
         { pattern: RegExp("((0?9)|(\\+?989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)|(32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)|(20)|(21)|(22)|(23)|(31)|(34)|(9910)|(9911)|(9913)|(9914)|(9999)|(999)|(990)|(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)|(998))\\W?\\d{3}\\W?\\d{4}", 'g'), message: 'شماره همراه وارد شده صحیح نمیباشد.' }
        ]}
       >
        <Input className='custom-input' maxLength={11} size='large' placeholder='شماره موبایل' />
       </Form.Item>
      )}

      <Form.Item >
       {!isOtp && (
        <Button size='large' style={{ width: '330px', fontWeight: 700, fontSize: '16px', marginTop: '16px' }} type="primary" htmlType="submit">
         {isPhonNumber ? 'تایید و شروع ثبت نام' : ' شروع کن'}
        </Button>
       )}
      </Form.Item>
      {isPhonNumber && (
       <OrgTimer onTimerChange={handlerTimerChange} />
      )}
     </Form >

    </div>

    <div onClick={() => setIsOpenModal(true)} className='flex items-center gap-2 cursor-pointer hover:animate-pulse'>
     <AtomImage src='/images/Vector 16.png' />
     <p className='text-white font-normal text-sm'>چطوری ریپل دریافت کنیم؟</p>
    </div>


   </div>


   <AtomImage src='images/GroupRight.svg' width={200} height={324} className='absolute max-xl:hidden right-0' />


   <OrgModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />



  </div >

 );
}

export default OrgLogin;







