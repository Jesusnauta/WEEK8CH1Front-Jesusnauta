import { createReducer } from "@reduxjs/toolkit";
import { UserStructure } from "../models/user";
import * as ac from "./users.actions.creator";

const initialState: UserStructure[] = [];

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadCreator, (_state, { payload }) => {
    return { ..._state, users: payload };
  });

  builder.addCase(ac.addCreator, (state, { payload }) => {
    return { ...state, payload };
  });

  builder.addCase(ac.updateCreator, (state, { payload }) => {
    const info = [...state];
    const data = info.map((item) =>
      item.id === payload.id ? { ...item, ...payload } : item
    );
    return { ...state, users: data };
  });
  builder.addCase(ac.deleteCreator, (state, { payload }) => {
    const data = state.filter((item) => item.id !== payload);
    return { ...state, users: data };
  });

  builder.addDefaultCase((state) => state);
});
