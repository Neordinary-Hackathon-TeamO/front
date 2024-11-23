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
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { SignInRequestData } from '../../type/member';
import { getMemberAPI, signInAPI } from '../../api/member';
import { useAuthStore } from '../../store/authStore';

const schema = z.object({
  username: z.string().min(1, '이메일은 필수 정보입니다'),
  password: z.string().min(1, '비밀번호 정보는 필수입니다'),
});

type Schema = z.infer<typeof schema>;

const Page = () => {
  const navigate = useNavigate();

  const { setUser } = useAuthStore();

  const { mutate } = useMutation({
    mutationFn: (data: SignInRequestData) => signInAPI(data),
    onSuccess: async () => {
      const { data } = await getMemberAPI();

      console.log(data);
      setUser(data);
      navigate('/main');
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<Schema> = (data) => {
    mutate({
      ...data,
    });
  };

  const goSignUpPage = () => {
    navigate('/sign-up');
  };

  return (
    <Container>
      <Thumbnail />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <InputContainer>
            <StyledLabel>아이디</StyledLabel>
            <StyledInput
              {...register('username')}
              placeholder="이메일을 입력하세요"
            />
            {errors.username && (
              <StyledErrorMessage>{errors.username.message}</StyledErrorMessage>
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
            <StyledSubmitButton disabled={!isValid}>로그인</StyledSubmitButton>
            <Divider />
            <StyledSignUpButton type="button" onClick={goSignUpPage}>
              회원가입
            </StyledSignUpButton>
          </ButtonContainer>
        </FormContainer>
      </form>
    </Container>
  );
};

export default Page;
