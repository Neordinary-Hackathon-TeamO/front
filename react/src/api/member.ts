import { SignInRequestData, SignupRequestData } from '../type/member';
import { axiosInstance } from './axios-instance';

/**  회원가입 */
export const signUpAPI = ({
  memId,
  password,
  profileImage,
  nickname,
}: SignupRequestData) => {
  const formData = new FormData();

  formData.append('memId', memId);
  formData.append('password', password);
  formData.append('profileImage', profileImage);
  formData.append('nickname', nickname);

  return axiosInstance.post('/member', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

/**  로그인 */
export const signInAPI = async ({ username, password }: SignInRequestData) => {
  const formData = new FormData();

  formData.append('username', username);
  formData.append('password', password);

  return axiosInstance.post('/login', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

/**  회원 조회 */
export const getMemberAPI = () => axiosInstance.get('/member');

//후순위로 해도 될듯
/**  회원삭제 */
export const deleteMemberAPI = () => axiosInstance.delete('/member');
/**  회원수정 */
export const putMemberAPI = () => axiosInstance.put('/member');
