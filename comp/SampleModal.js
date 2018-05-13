import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import {
  red500,
  green500
} from 'material-ui/styles/colors'

// with modal
import withModal from './hoc/withRedux'

// Modal actions
const dialogActions = () => {
  const actions = [
    { title: 'Cancle', color: red500, style: { marginRight: 10 } },
    { title: 'OK', color: green500,  }
  ]
  return actions.map(at => 
    (<RaisedButton 
      backgroundColor={at.color} 
      label={at.title} 
      style={at.style} />))
}

const SampleModal = (props) => {
  // Available props from withModal HOC
  const {
    hideModal,
    modalProps,
    modalType
  } = props

  return (
    <Dialog
      title={modalProps.title}
      actions={dialogActions()}
      open={props.open}
      onRequestClose={ () => hideModal()}
    >
      this is sample modal
    </Dialog>
  )
}

export default withModal('SAMPLE_MODAL')(SampleModal)