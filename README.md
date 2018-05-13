# withModal

  withModal is a HOC that enhance you native modal.
  It's provide some props for your modal component

  #### usage
  withModal(modalType)(YourModalComponent)

  arg: 
    modalType:
      - type: String
      - desc: A type of your modal such as 'EDIT_USER_MODAL
    
    YourModalComponent:
      - type: JSX ele
      - desc: Modal Component (stateless and fullstate are supported)

  #### Example:
  
  ###### Use with Modal

  '''
  const YourModalComponent = (props) => {
    // Available props from withModal HOC
    // use it for modal's props
    const {
      hideModal,
      modalProps,
      modalType
    } = props

    return <Modal />
  }

  withModal("SAMPLE_MODAL")(YourModalComponent)
  '''
     
    
