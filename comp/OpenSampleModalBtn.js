import RaisedButton from 'material-ui/RaisedButton'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { modalActionCreators } from '../comp/redux_modal/actions'

const OpenSampleModalBtn = ({
  openModal
}) => (
  <RaisedButton 
    label={'open modal'}
    onClick={ () => {
      /* 
        openModal arg = [modalType: str]
        this type have to match with a type of modal <Component>
        that you assign as arg in 
        withModal HOC

        ---> withModal('SAMPLE_MODAL')(ModalComponent)
      */
      openModal('SAMPLE_MODAL')
    }}/>
)

export default connect(
  null,
  dispatch => ({
    openModal: bindActionCreators(modalActionCreators.open, dispatch)
  })
)(OpenSampleModalBtn)