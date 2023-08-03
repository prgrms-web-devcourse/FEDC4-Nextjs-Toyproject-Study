import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  user: {
    name: string;
    userId: number;
    loginId: string;
  };
  accessToken: string;
  isLogin: boolean;
}

const initialState: AuthState = {
  user: {
    name: '',
    userId: 0,
    loginId: '',
  },
  accessToken: '',
  isLogin: false,
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      const { user, access_token } = action.payload;
      return {
        user,
        accessToken: access_token.split(' ')[1],
        isLogin: true,
      };
    },
    logout() {
      return initialState;
    },
  },
});

export const { login, logout } = auth.actions;
export default auth.reducer;
