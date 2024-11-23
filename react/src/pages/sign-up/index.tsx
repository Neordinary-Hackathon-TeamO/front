import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  EmptyImageContentContainer,
  EmptyImageText,
  FormContainer,
  InputContainer,
  StyledErrorMessage,
  StyledImage,
  StyledImageContainer,
  StyledInput,
  StyledLabel,
  StyledSubmitButton,
} from './style';
import { CameraIcon } from './CameraIcon';
import { ChangeEventHandler, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { SignupRequestData } from '../../type/member';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { signUpAPI } from '../../api/member';

const schema = z.object({
  memId: z.string().min(1, '이메일은 필수 정보입니다'),
  password: z.string().min(1, '비밀번호 정보는 필수입니다'),
  nickname: z.string().min(1, '닉네임은 필수입니다'),
});

type Schema = z.infer<typeof schema>;

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      memId: '',
      password: '',
      nickname: '',
    },
  });

  const [image, setImage] = useState<File | null>(null);

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (data: SignupRequestData) => signUpAPI(data),
    onSuccess: () => {
      navigate('/sign-in');
    },
  });

  const onSubmit: SubmitHandler<Schema> = (data) => {
    if (!image) {
      return;
    }

    mutate({
      ...data,
      profileImage: image,
    });
  };

  const onChangeImageURL: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    if (target.files?.length === 0) {
      setImage(null);
      return;
    }
    setImage(target.files![0]);
  };

  const imageURL = image ? URL.createObjectURL(image) : null;

  const canBeSubmit = isValid && image;

  return (
    <Layout headerTitle="회원가입" showBackButton>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <InputContainer>
            <StyledLabel>아이디</StyledLabel>
            <StyledInput
              {...register('memId')}
              placeholder="이메일을 입력하세요"
            />
            {errors.memId && (
              <StyledErrorMessage>{errors.memId.message}</StyledErrorMessage>
            )}
          </InputContainer>

          <InputContainer>
            <StyledLabel>비밀번호</StyledLabel>
            <StyledInput
              {...register('password')}
              placeholder="비밀번호를 입력하세요"
            />
            {errors.password && (
              <StyledErrorMessage>{errors.password.message}</StyledErrorMessage>
            )}
          </InputContainer>

          <InputContainer>
            <StyledLabel>닉네임</StyledLabel>
            <StyledInput
              {...register('nickname')}
              placeholder="닉네임을 입력하세요"
            />
            {errors.nickname && (
              <StyledErrorMessage>{errors.nickname.message}</StyledErrorMessage>
            )}
          </InputContainer>

          <InputContainer>
            <StyledLabel>프로필 사진</StyledLabel>
            <StyledImageContainer htmlFor="file">
              {imageURL && <StyledImage src={imageURL} />}
              {!imageURL && (
                <EmptyImageContentContainer>
                  <CameraIcon />
                  <EmptyImageText>프로필 사진을 추가해주세요.</EmptyImageText>
                </EmptyImageContentContainer>
              )}
            </StyledImageContainer>
            <input
              type="file"
              id="file"
              style={{
                display: 'none',
              }}
              onChange={onChangeImageURL}
            />
          </InputContainer>
          <StyledSubmitButton disabled={!canBeSubmit}>
            가입완료
          </StyledSubmitButton>
        </FormContainer>
      </form>
    </Layout>
  );
};

export default Page;
