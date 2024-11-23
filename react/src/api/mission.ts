import { axiosInstance } from './axios-instance';

/**  미션 생성 */
export const postMissionAPI = () => axiosInstance.post('/mission');

/**  자신의 미션 조회 */
export const getMyMissionAPI = (giverMemberId: string) =>
  axiosInstance.get(`/mission${giverMemberId}`);

/**미션 수행 리스트  조회*/
export const getMissionAPI = (receiverMemberId: string) =>
  axiosInstance.get(`/mission/${receiverMemberId}`);

/**미션 인증 체크 */
export const putMissionCheckAPI = (missionId: string) =>
  axiosInstance.put(`/mission/execution/${missionId}`);

/**미션 인증 */
export const putGiverMissionAPI = ({
  memId,
  content,
  image,
}: {
  memId: number;
  content: string;
  image: File;
}) => {
  const formData = new FormData();

  formData.append('content', content);
  formData.append('image', image);

  return axiosInstance.put(`/mission/${memId}`);
};
