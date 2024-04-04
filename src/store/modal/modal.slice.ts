import { ModalMapType, ModalType } from '@/types/ModalType';
import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type InitialType = {
  modals: ModalMapType;
};

const initialState: InitialType = {
  modals: {},
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<Pick<ModalType, 'id' | 'meta'>>,
    ) => {
      state.modals[action.payload.id] = {
        id: action.payload.id,
        open: true,
        meta: action.payload.meta,
      };
    },
    closeModal: (state, action: PayloadAction<Pick<ModalType, 'id'>>) => {
      state.modals[action.payload.id].open = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
const getModals = (state: RootState): ModalMapType => state.modal.modals;

export const getOpenModals = createSelector(getModals, (modals) =>
  Object.keys(modals).filter((modalName) => modals[modalName]),
);
export default modalSlice.reducer;
