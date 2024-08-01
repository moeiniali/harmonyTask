import React, { useState } from 'react';
import { Button, ConfigProvider, Modal, Space } from 'antd';
import { AtomText } from '../ExAllCo';
import './Organism.css'

interface ModalTypes {
 isOpen?: boolean,
 onClose?: () => void
}
const OrgModal: React.FC<ModalTypes> = ({ isOpen, onClose }) => {
 const [isModalOpen, setIsModalOpen] = useState([true, false]);

 const toggleModal = (idx: number, target: boolean) => {
  setIsModalOpen((p) => {
   p[idx] = target;
   return [...p];
  });
 };


 const classNames = {

 };

 const modalStyles = {
  header: {
   borderRadius: 0,
   paddingInlineStart: 5,
  },
  body: {
   // boxShadow: 'inset 0 0 5px #999',
   borderRadius: 5,

  },
  mask: {
   backdropFilter: 'blur(10px)',

  },
  footer: {
   borderTop: '1px solid #333',
  },
  content: {
   // boxShadow: '0 0 30px #999',
   backgroundColor: ' #000000'
  },

 };

 return (
  <>


   <Modal
    width={1000}
    height={400}
    title=""
    open={isOpen}
    onClose={onClose}
    onCancel={onClose}
    footer=""
    classNames={classNames}
    styles={modalStyles}
   >
    <div className=' loginBgImg w-full h-full flex flex-col justify-center items-center gap-6 py-10 border border-[#F2B80C] rounded-lg'>

     <div className='w-[330px]  h-auto flex flex-col gap-4 justify-center items-center content-center text-center py-4'>
      <AtomText children=" کاربر جدید بیدارز, ممنون از اعتمادتون " color='#F2B80C' size="18px" weight='500' lineHeight='34px' />

      <AtomText children=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط  " color='#fff' size="14px" weight='400' lineHeight='28px' />


      <Button onClick={onClose} size='large' style={{ width: '330px', fontWeight: 700, fontSize: '16px', marginTop: '16px' }} type="primary" htmlType="submit">
       متوجه شدم
      </Button>


     </div>
    </div>
   </Modal>

  </>
 );
};

export default OrgModal;