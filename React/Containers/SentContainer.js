import { connect } from 'react-redux';
import Sent from '../Components/Sent.js';

function mapStateToProps (state) {
  return {
    messages: state.messages.messages
  }
}

// function mapDispatchToProps (dispatch) {
//   return {

//   }
// }

const SentContainer = connect(
  mapStateToProps,
  null
)(Sent);

export default SentContainer;
