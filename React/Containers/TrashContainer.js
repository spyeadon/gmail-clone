import { connect } from 'react-redux';
import Trash from '../Components/Trash.js';

function mapStateToProps (state) {
  return {
    messages: state.messages.messages
  }
}

// function mapDispatchToProps (dispatch) {
//   return {

//   }
// }

const TrashContainer = connect(
  mapStateToProps,
  null
)(Trash);

export default TrashContainer;
