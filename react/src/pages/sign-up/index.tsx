import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  EmptyImageContentContainer,
  EmptyImageText,
  FormContainer,
  InputContainer,
  StyledErrorMessage,
  StyledImageContainer,
  StyledInput,
  StyledLabel,
  StyledSubmitButton,
} from './style';
import { CameraIcon } from './CameraIcon';

const schema = z.object({
  email: z.string().min(1, '이메일은 필수 정보입니다'),
  password: z.string().min(1, '비밀번호 정보는 필수입니다'),
  nickname: z.string().min(1, '닉네임은 필수입니다'),
  file: z.instanceof(File),
});

type Schema = z.infer<typeof schema>;

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      nickname: '',
      file: undefined,
    },
  });

  const onSubmit: SubmitHandler<Schema> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <InputContainer>
          <StyledLabel>아이디</StyledLabel>
          <StyledInput
            {...register('email')}
            placeholder="이메일을 입력하세요"
          />
          {errors.email && (
            <StyledErrorMessage>{errors.email.message}</StyledErrorMessage>
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
            <EmptyImageContentContainer>
              <CameraIcon />
              <EmptyImageText>프로필 사진을 추가해주세요.</EmptyImageText>
            </EmptyImageContentContainer>
          </StyledImageContainer>
          <input
            type="file"
            {...register('file')}
            id="file"
            style={{
              display: 'none',
            }}
          />
        </InputContainer>
        <StyledSubmitButton>회원가입</StyledSubmitButton>
      </FormContainer>
    </form>
  );
};

export default Page;
