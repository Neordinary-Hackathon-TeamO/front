import { axiosInstance } from './axios-instance';

/**  마니또 추리하기 */
export const postMatchAPI = (receiverMemverId: string) =>
  axiosInstance.post(`/match${receiverMemverId}`);

/**  마니또 전체 조회 */
export const getMatchTeamAPI = (teamId: string) =>
  axiosInstance.get(`/match${teamId}`);

/** 마니또 추리 결과 */
export const getMatchMemberAPI = (receiveMemberId: string) =>
  axiosInstance.get(`/match${receiveMemberId}`);

/**TODO 마니또 매칭 조회 */
