import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'

import OpenSampleModalBtn from '../comp/OpenSampleModalBtn'

// sample modal
import SampleModal from '../comp/SampleModal'

import store from '../comp/redux_modal/store'
import withRedux from 'next-redux-wrapper'

const Index = () => (
  <MuiThemeProvider>
    {/* child of muiThemeProvider much have only one element */}
    <div>
      <OpenSampleModalBtn />

      <SampleModal />

    </div>
  </MuiThemeProvider>
)

export default withRedux(store)(Index)