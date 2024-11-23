import { axiosInstance } from './axios-instance';

/**  회원가입 */
export const signUpAPI = () => axiosInstance.post('/member');

/**  로그인 */
export const signInAPI = () => axiosInstance.post('/login');
/**  회원 조회 */
export const getMemberAPI = () => axiosInstance.get('/member');

//후순위로 해도 될듯
/**  회원삭제 */
export const deleteMemberAPI = () => axiosInstance.delete('/member');
/**  회원수정 */
export const putMemberAPI = () => axiosInstance.put('/member');
