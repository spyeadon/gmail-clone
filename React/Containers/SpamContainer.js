import { connect } from 'react-redux';
import Spam from '../Components/Spam.js';

function mapStateToProps (state) {
  return {
    messages: state.messages.messages
  }
}

// function mapDispatchToProps (dispatch) {
//   return {

//   }
// }

const SpamContainer = connect(
  mapStateToProps,
  null
)(Spam);

export default SpamContainer;
