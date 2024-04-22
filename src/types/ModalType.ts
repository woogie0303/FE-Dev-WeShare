type ModalType = {
  id: string;
  open: boolean;
};

type ModalMapType = {
  [id: string]: ModalType;
};

export type { ModalMapType, ModalType };
