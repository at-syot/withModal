import { 
  modalActionTypes as actionTypes
} from './actions'

const initialState = {
  modalType: 'default',
  modalProps: {},
}
 
export default (
  state = initialState,
  action
) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return {
        modalType: typeof action.modalType === 'undefined' || action.modalType === null ? 
          state.modalType : 
          action.modalType,
        modalProps: {
          ...action.modalProps,
          open: true
        }
      }
    case actionTypes.HIDE_MODAL:
      return {
        ...state,
        modalProps: {
          ...state.modalProps,
          open: false
        }
      }
    default: 
      return state
  }
}