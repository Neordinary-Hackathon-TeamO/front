import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '../store/authStore';
import { getMemberAPI } from '../api/member';

export const useMember = () => {
  const accessToken = useAuthStore().user?.accessToken;

  return useQuery({
    queryKey: ['user', accessToken],
    queryFn: () => getMemberAPI(),
  });
};
