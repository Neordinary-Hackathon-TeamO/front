import { axiosInstance } from './axios-instance';

/**단체 생성 */
export const postTeamAPI = () => axiosInstance.post('/team');

/**초대 코드로 참가 */
export const getTeamJoinAPI = () => axiosInstance.get('/team');

/**참가한 방 리스트 가져오기*/
export const getJoinedRoomsAPI = () => axiosInstance.get('/team');

/**참가한 방 들어가기 */
export const getJoinRoomsAPI = () => axiosInstance.get('/team');
