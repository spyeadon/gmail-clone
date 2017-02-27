import { connect } from 'react-redux';
import Inbox from '../Components/Inbox.js';

function mapStateToProps (state) {
  return {
    messages: state.messages.messages,
    currentUser: state.users.currentUser
  }
}

// function mapDispatchToProps (dispatch) {
//   return {

//   }
// }

const InboxContainer = connect(
  mapStateToProps,
  null
)(Inbox);

export default InboxContainer;
