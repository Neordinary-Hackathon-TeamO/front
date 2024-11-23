import { ChangeEventHandler, useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { CameraIcon } from '../sign-up/CameraIcon';
import {
  Container,
  EmptyImageContentContainer,
  EmptyImageText,
  FormContainer,
  GuideBox,
  GuideText,
  GuideTitle,
  InputContainer,
  StyledImage,
  StyledImageContainer,
  StyledLabel,
  StyledSubmitButton,
  StyledTextArea,
} from './style';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { putGiverMissionAPI } from '../../api/mission';
// import { useMember } from '../../hooks/useMember';

const Page = () => {
  const navigate = useNavigate();
  const {
    register,
    setFocus,
    handleSubmit,
    formState: { isValid },
  } = useForm<{ content: string }>();

  const [image, setImage] = useState<File | null>(null);

  // getMemberAPI로 불러온 memId로 변경되어야 함
  // const { data } = useMember();
  // const memId = data?.data.memId;

  const memId = 1;

  const { mutate } = useMutation({
    mutationFn: (data: { content: string; image: File; memId: number }) =>
      putGiverMissionAPI(data),
    onSuccess: () => {
      navigate('/mission/1');
    },
  });

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

  useEffect(() => {
    setFocus('content');
  }, [setFocus]);

  const onSubmit: SubmitHandler<{ content: string }> = (data) => {
    navigate('/mission/1');

    if (!memId || !image) {
      return;
    }

    mutate({
      ...data,
      image,
      memId,
    });
  };

  const canBeSubmit = isValid && image;

  // if (!data) {
  //   return null;
  // }

  return (
    <Layout showBackButton headerTitle="미션인증">
      <Container>
        <GuideBox>
          <GuideTitle>{'💌 로지(나) -> 밤톨'}</GuideTitle>
          <GuideText>
            상대방에게 매일 익명으로 칭찬 메시지를 보내고, 이벤트 종료 전까지
            직접 만든 특별한 선물을 비밀스럽게 전달하세요.
          </GuideText>
        </GuideBox>
      </Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <InputContainer>
            <StyledLabel>미션 인증 사진</StyledLabel>
            <StyledImageContainer htmlFor="file">
              {imageURL && <StyledImage src={imageURL} />}
              {!imageURL && (
                <EmptyImageContentContainer>
                  <CameraIcon />
                  <EmptyImageText>미션 사진을 추가해주세요.</EmptyImageText>
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
          <InputContainer>
            <StyledLabel>미션 인증 메시지</StyledLabel>
            <StyledTextArea
              {...register('content', {
                required: '미션 인증 메시지를 입력해주세요!',
                maxLength: {
                  value: 500,
                  message: '500자내로 입력해주세요',
                },
              })}
              placeholder="미션 인증 메시지를 입력해주세요."
            />
          </InputContainer>
          <StyledSubmitButton disabled={!canBeSubmit}>
            미션 인증하기
          </StyledSubmitButton>
        </FormContainer>
      </form>
    </Layout>
  );
};

export default Page;
