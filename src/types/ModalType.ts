type ModalMeta = {
  [name: string]: any;
};

type ModalType = {
  id: string;
  open: boolean;
  meta?: ModalMeta;
};

type ModalMapType = {
  [id: string]: ModalType;
};

export type { ModalMapType, ModalType, ModalMeta };
