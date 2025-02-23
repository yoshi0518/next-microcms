'use server';

const validateEmail = (email: string) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};

type ContactState = {
  status: 'success' | 'error';
  message: string;
  data?: {
    lastname: string;
    firstname: string;
    company: string;
    email: string;
    message: string;
  };
};

export const createContactData = async (_prevState: ContactState, formData: FormData) => {
  const result = {
    status: 'success',
    message: 'OK',
    data: {
      lastname: formData.get('lastname') as string,
      firstname: formData.get('firstname') as string,
      company: formData.get('company') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    },
  };

  if (!result.data.lastname) {
    return {
      ...result,
      status: 'error',
      message: '姓を入力してください',
    };
  }

  if (!result.data.firstname) {
    return {
      ...result,
      status: 'error',
      message: '名を入力してください',
    };
  }

  if (!result.data.company) {
    return {
      ...result,
      status: 'error',
      message: '会社名を入力してください',
    };
  }

  if (!result.data.email) {
    return {
      ...result,
      status: 'error',
      message: 'メールアドレスを入力してください',
    };
  }

  if (!validateEmail(result.data.email)) {
    return {
      ...result,
      status: 'error',
      message: 'メールアドレスの形式が誤っています',
    };
  }

  if (!result.data.message) {
    return {
      ...result,
      status: 'error',
      message: 'メッセージを入力してください',
    };
  }

  return result;
};
