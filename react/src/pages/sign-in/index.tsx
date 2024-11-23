import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  ButtonContainer,
  Container,
  Divider,
  FormContainer,
  InputContainer,
  StyledErrorMessage,
  StyledInput,
  StyledLabel,
  StyledSignUpButton,
  StyledSubmitButton,
  Thumbnail,
} from './style';

const schema = z.object({
  email: z.string().min(1, '이메일은 필수 정보입니다'),
  password: z.string().min(1, '비밀번호 정보는 필수입니다'),
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
    },
  });

  const onSubmit: SubmitHandler<Schema> = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Thumbnail />
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

          <ButtonContainer>
            <StyledSubmitButton>로그인</StyledSubmitButton>
            <Divider />
            <StyledSignUpButton type="button">회원가입</StyledSignUpButton>
          </ButtonContainer>
        </FormContainer>
      </form>
    </Container>
  );
};

export default Page;
