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
    openModal: (state, action: PayloadAction<Pick<ModalType, 'id'>>) => {
      state.modals[action.payload.id] = {
        id: action.payload.id,
        open: true,
      };
    },
    closeModal: (state, action: PayloadAction<Pick<ModalType, 'id'>>) => {
      state.modals[action.payload.id].open = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
const getModals = (state: RootState): ModalMapType => state.modal.modals;

export const isModalOpen: (state: RootState, id: string) => boolean = (
  state,
  id,
) => state.modal.modals[id]?.open ?? false;

export const getOpenModals = createSelector(getModals, (modals) =>
  Object.keys(modals).filter((modalName) => modals[modalName].open),
);
export default modalSlice.reducer;
