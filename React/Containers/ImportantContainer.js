import { connect } from 'react-redux';
import Important from '../Components/Important.js';

function mapStateToProps (state) {
  return {
    messages: state.messages.messages
  }
}

// function mapDispatchToProps (dispatch) {
//   return {

//   }
// }

const ImportantContainer = connect(
  mapStateToProps,
  null
)(Important);

export default ImportantContainer;
