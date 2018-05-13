const modalActionTypes = {
  OPEN_MODAL: 'OPEN_MODAL',
  HIDE_MODAL: 'HIDE_MODAL'
}

const modalActionCreators = {
  open: (modalType, modalProps) => ({
    type: modalActionTypes.OPEN_MODAL,
    modalType,
    modalProps
  }),
  hide: () => ({
    type: modalActionTypes.HIDE_MODAL
  })
}

export {
  modalActionTypes,
  modalActionCreators
}