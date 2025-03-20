"use client"
import { Button, Col, Row } from 'antd';
import Image from 'next/image';
import login from '../../assets/freepik__upload__11173.png';
import FormInput from '@/components/ui/Forms/FormInput';
import Form from '@/components/ui/Forms/Form'; // custom Form import
import { SubmitHandler } from 'react-hook-form';

type FormValues = {
  id: string;
  password: string;
}

const LoginPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (err) {}
  };

  return (
    <Row>
      <Col sm={12} md={16} lg={16}>
        <Image src={login} width={500} alt='login image' />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1>First login your account</h1>
        <div>
          <Form submitHandler={onSubmit}>
            <FormInput
              name="id"
              type="text"
              size="large"
              label="User Id"
            />
            <FormInput
              name="password"
              type="password"
              size="large"
              label="Password"
            />
            <Button type='primary' htmlType='submit'>Submit</Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
