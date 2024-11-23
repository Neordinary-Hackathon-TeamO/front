import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';
import clock from '../../assets/Clock.svg';
import {
  Container,
  Flex,
  Title,
  Warning,
  FormContainer,
  FormItemContainer,
  FormItemTitle,
  FormItemInput,
  FormSelect,
  Clock,
  FormItemDate,
  FormSubmitButtonNot,
  FormSubmitButton,
  Concept,
  ConCeptList,
} from './style';

const Page = () => {
  const [roomName, setRoomName] = useState<string | null>(null);
  const [memberCount, setMemberCount] = useState<number | null>(null);
  const [concept, setConcept] = useState<string | null>(
    '비밀임무 테마를 선택해 주세요.',
  );
  const [conceptOpen, setConceptOpen] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [finishInput, setFinishInput] = useState<boolean>(false);

  const handleTimeChange = (selectedTime: Date | null) => {
    if (!selectedTime) {
      toast.error('유효하지 않은 시간 형식');
      return;
    }

    const hours = selectedTime?.getHours();
    const minutes = selectedTime?.getMinutes();
    const fTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

    const timeStringToDate = (timeString: string): Date => {
      const today = new Date();
      const [hours, minutes] = timeString.split(':').map(Number);
      const dateWithTime = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        hours,
        minutes,
      );
      return dateWithTime;
    };
    const st = timeStringToDate(fTime);
    setEndTime(st);
    console.log('st', st);
    console.log('selectedTime:', selectedTime);
  };

  useEffect(() => {
    if (roomName && memberCount && startDate && endDate && endTime && concept) {
      console.log('roomName ', roomName);
      console.log('memberCount ', memberCount);
      console.log('concept ', concept);
      console.log('startDate ', startDate);
      console.log('endDate ', endDate);
      console.log('endTime ', endTime);
      setFinishInput(true);
    }
  }, [roomName, memberCount, startDate, endDate, endTime, concept]);

  // 제출 핸들러
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Flex>
        <Title>정보를 입력해 주세요.</Title>
        <Warning>(전체 필수)</Warning>
      </Flex>

      <FormContainer onSubmit={handleSubmit}>
        <FormItemContainer>
          <FormItemTitle>작전명</FormItemTitle>
          <FormItemInput
            type="text"
            maxLength={20}
            placeholder="이번 비밀 계획의 작전명을 입력해주세요."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRoomName(e.target.value)
            }
          />
        </FormItemContainer>

        <FormItemContainer>
          <FormItemTitle>참여자 수</FormItemTitle>
          <FormItemInput
            type="number"
            maxLength={2}
            inputMode="numeric"
            placeholder="참여자 수를 입력하세요."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMemberCount(Number(e.target.value))
            }
          />
        </FormItemContainer>

        <FormItemContainer onClick={() => setConceptOpen(!conceptOpen)}>
          <FormItemTitle>비밀임무 테마</FormItemTitle>
          <FormSelect>{concept}</FormSelect>
        </FormItemContainer>
        {conceptOpen && (
          <Concept>
            <ConCeptList
              onClick={() => {
                setConcept('관계형성');
                setConceptOpen(false);
              }}
            >
              관계형성
            </ConCeptList>
            <ConCeptList onClick={() => {
                setConcept('힐링');
                setConceptOpen(false);
              }}>힐링</ConCeptList>
            <ConCeptList onClick={() => {
                setConcept('게임');
                setConceptOpen(false);
              }}>게임</ConCeptList>
            <ConCeptList onClick={() => {
                setConcept('소소한 기쁨');
                setConceptOpen(false);
              }}>
              소소한 기쁨
            </ConCeptList>
            <ConCeptList onClick={() => {
                setConcept('나눔');
                setConceptOpen(false);
              }}>나눔</ConCeptList>
            <ConCeptList onClick={() => {
                setConcept('추억 만들기');
                setConceptOpen(false);
              }}>
              추억 만들기
            </ConCeptList>
            <ConCeptList onClick={() => {
                setConcept('유머');
                setConceptOpen(false);
              }}>유머</ConCeptList>
          </Concept>
        )}

        <FormItemContainer>
          <FormItemTitle>임무 시작일</FormItemTitle>
          <FormItemDate>
            <Clock src={clock} />
            <DatePicker
              selected={startDate}
              dateFormat="yyyy/MM/dd"
              minDate={new Date()}
              onChange={(date) => setStartDate(date)}
            />
          </FormItemDate>
        </FormItemContainer>

        <FormItemContainer>
          <FormItemTitle>임무 종료일</FormItemTitle>
          <FormItemDate>
            <Clock src={clock} />
            <DatePicker
              selected={endDate}
              dateFormat="yyyy/MM/dd"
              minDate={new Date()}
              onChange={(date) => setEndDate(date)}
            />
          </FormItemDate>
        </FormItemContainer>

        <FormItemContainer>
          <FormItemTitle>임무 종료 시간</FormItemTitle>
          <FormSelect>
            <DatePicker
              shouldCloseOnSelect
              placeholderText="미션 시간을 선택해 주세요."
              id="datepicker2"
              selected={endTime}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="HH:mm"
              onChange={(selectedTime) => handleTimeChange(selectedTime)}
            />
          </FormSelect>
        </FormItemContainer>

        {finishInput ? (
          <FormSubmitButton type="submit">완료</FormSubmitButton>
        ) : (
          <FormSubmitButtonNot type="submit">완료</FormSubmitButtonNot>
        )}
      </FormContainer>
    </Container>
  );
};

export default Page;
