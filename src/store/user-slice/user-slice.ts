import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../components/consts';
import { UserStateType } from '../../types/state-type';
import { checkAuth, login, logout } from '../action-api';
import { dropToken, saveToken } from '../../services/token';

const initialState: UserStateType = {
  currentUser: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isRequestPending: false
};

const UserSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: { },
  extraReducers(builder) {
    builder
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.currentUser = action.payload;
        state.isRequestPending = false;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NotAuth;
        state.isRequestPending = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.currentUser = action.payload;
        state.isRequestPending = false;
        saveToken(action.payload.token);
      })
      .addCase(login.pending, (state) => {
        state.isRequestPending = true;
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NotAuth;
        state.currentUser = null;
        state.isRequestPending = false;
        //TODO: error message.
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NotAuth;
        state.currentUser = null;
        state.isRequestPending = false;
        dropToken();
      })
      .addCase(logout.rejected, (state) => {
        state.isRequestPending = false;
        //TODO: error message.
      })
      .addCase(logout.pending, (state) => {
        state.isRequestPending = true;
      });
  }
});

export default UserSlice;