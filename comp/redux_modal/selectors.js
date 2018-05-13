const getModalIsOpen = ({ modal }) => 
  typeof modal.modalProps.open === 'undefined' ? false : modal.modalProps.open

const getModalType = ({ modal }) =>
  modal.modalType

const getModalProps = ({ modal }) =>
  modal.modalProps

export {
  getModalIsOpen,
  getModalType,
  getModalProps
}