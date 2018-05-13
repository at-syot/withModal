import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { modalActionCreators } from '../redux_modal/actions'
import {
  getModalIsOpen,
  getModalType,
  getModalProps
} from '../redux_modal/selectors'

export default (modalType) => Comp => {
  class EnhancedModal extends React.Component {
    constructor() {
      super()
      this.state = {
        modalType
      }
    }

    render() {
      return <Comp 
        {...this.props}
        open={
          this.state.modalType !== this.props.modalType ? 
            false : 
            this.props.open
        }/>
    }
  }

  return connect(
    state => ({
      open: getModalIsOpen(state),
      modalProps: getModalProps(state),
      modalType: getModalType(state)
    }),
    dispatch => ({
      hideModal: bindActionCreators(modalActionCreators.hide, dispatch)
    })
  )(EnhancedModal)
}