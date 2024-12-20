import { create } from 'zustand';

export type User = {
  accessToken: string;
};

interface AuthState {
  user: User | null;
}

interface AuthActions {
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  user: null,
  setUser: (user: User | null) => {
    set({ user });
  },
}));
