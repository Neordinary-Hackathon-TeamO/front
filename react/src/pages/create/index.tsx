import { useEffect, useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';

const Page = () => {
  const [roomName, setRoomName] = useState<string | null>(null);
  const [memberCount, setMemberCount] = useState<number | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [finishInput, setFinishInput] = useState<boolean>(false)

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
    const st = timeStringToDate(fTime); // timepicker 박스에 표현해줄 변수
    setEndTime(st);
    console.log('st', st); //Wed Feb 21 2024 12:30:00 GMT+0900

    console.log('selectedTime:', selectedTime); // "12:00"
  };

  useEffect(() => {
    if (roomName && memberCount && startDate && endDate && endTime) {
      console.log('roomName ', roomName);
      console.log('memberCount ', memberCount);
      console.log('startDate ', startDate);
      console.log('endDate ', endDate);
      console.log('endTime ', endTime);
      setFinishInput(true);
    }
  }, [roomName, memberCount, startDate, endDate, endTime])

  // 제출 핸들러
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Title>정보를 입력해 주세요.</Title>
      <FormContainer onSubmit={handleSubmit}>
        <FormItemContainer>
          <FormItemTitle>방 이름</FormItemTitle>
          <FormItemInput
            type="text"
            max={99}
            inputMode="numeric"
            placeholder="방 이름을 입력하세요."
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
            placeholder="참여자 수를 입력하세요."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMemberCount(Number(e.target.value))
            }
          />
        </FormItemContainer>

        <FormItemContainer>
          <FormItemTitle>시작일</FormItemTitle>
          <FormItemDate>
            <DatePicker
              selected={startDate}
              dateFormat="yyyy/MM/dd"
              minDate={new Date()}
              onChange={(date) => setStartDate(date)}
            />
          </FormItemDate>
        </FormItemContainer>

        <FormItemContainer>
          <FormItemTitle>종료일</FormItemTitle>
          <FormItemDate>
            <DatePicker
              selected={endDate}
              dateFormat="yyyy/MM/dd"
              minDate={new Date()}
              onChange={(date) => setEndDate(date)}
            />
          </FormItemDate>
        </FormItemContainer>

        <FormItemContainer>
          <FormItemTitle>종료 시간</FormItemTitle>
          <FormItemDate>
            <DatePicker
              shouldCloseOnSelect
              placeholderText="선택하세요"
              id="datepicker2"
              selected={endTime}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="HH:mm"
              onChange={(selectedTime) => handleTimeChange(selectedTime)}
            />
          </FormItemDate>
        </FormItemContainer>

        {finishInput ? <FormSubmitButton type="submit">
          완료
        </FormSubmitButton>
        :
        <FormSubmitButtonNot type="submit">
        완료
      </FormSubmitButtonNot>
      }
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  max-width: 400px;
`;
const Title = styled.h2`
  font-size: 25px;
  font-weight: 500;
`;
const FormContainer = styled.form`
  margin-top: 53px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const FormItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
const FormItemTitle = styled.label`
  font-size: 20px;
  font-weight: 500;
`;
const FormItemInput = styled.input`
  width: 100%;
  border: solid 1px #70737c;
  border-radius: 21px;
  padding: 20px 10px;
`;
const FormItemDate = styled.div`
  width: 100%;
  border: solid 1px #70737c;
  border-radius: 21px;
  padding: 20px 10px;
`;
const FormSubmitButtonNot = styled.button`
  width: 100%;
  background-color: #70737C;
  border-radius: 21px;
  text-align: center;
  padding: 20px 10px;
  margin-top: 30px;
  color: #fff;
`;
const FormSubmitButton = styled.button`
  width: 100%;
  background-color: #4e5968;
  border-radius: 21px;
  text-align: center;
  padding: 20px 10px;
  margin-top: 30px;
  color: #fff;
`;

export default Page;
