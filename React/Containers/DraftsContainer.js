import { connect } from 'react-redux';
import Drafts from '../Components/Drafts.js';

function mapStateToProps (state) {
  return {
    messages: state.messages.messages
  }
}

// function mapDispatchToProps (dispatch) {
//   return {

//   }
// }

const DraftsContainer = connect(
  mapStateToProps,
  null
)(Drafts);

export default DraftsContainer;
