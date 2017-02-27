import { connect } from 'react-redux';
import Message from '../Components/Message.js';
import React from 'react';
import { messageCreatorSave, messageUpdator } from '../Action-Creators/messages-actions.js';
//import {browserHistory} from 'react-router';

class MessageMidContainer extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      id: this.props.message.id || Number(),
      subject: this.props.message.subject || '',
      body: this.props.message.body || '',
      recipient: ''
    }

    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleRecipientChange = this.handleRecipientChange.bind(this);
    this.handleSubmitSave = this.handleSubmitSave.bind(this);

  }

  handleSubjectChange (event) {
    this.setState({
      subject: event.target.value
    });
  }

  handleBodyChange (event) {
    this.setState({
      body: event.target.value
    });
  }

  handleRecipientChange (event) {
    this.setState({
      recipient: event.target.value
    });
  }

  handleSubmitSave (event) {
    event.preventDefault();
    let newMessage = {
      id: this.state.id,
      subject: this.state.subject,
      body: this.state.body,
      sender: this.props.currentUser.id,
      recipient: this.state.recipient
    };
    if (!this.state.id) this.props.saveNewMessage(newMessage);
    else this.props.updateMessage(newMessage);
    this.setState({
      id: Number(),
      subject: '',
      body: '',
      recipient: ''
    });
    //browserHistory.push('/inbox/1');
    window.location.href = '/inbox/1';
  }

  render() {
    console.log("message id on state: ", this.state.id);

    return (
      <div>
      <Message
        subject={this.state.subject}
        body={this.state.body}
        recipient={this.state.recipient}
        handleBodyChange={this.handleBodyChange}
        handleRecipientChange={this.handleRecipientChange}
        handleSubjectChange={this.handleSubjectChange}
        handleSubmitSave={this.handleSubmitSave}
      />
      </div>
    );
  }

}

export {MessageMidContainer};

function mapStateToProps (state) {
  return {
    currentUser: state.users.currentUser,
    message: state.messages.message
  }
}

function mapDispatchToProps (dispatch) {
  return {
    saveNewMessage (message) {
      dispatch(messageCreatorSave(message));
    },
    updateMessage (message) {
      dispatch(messageUpdator(message));
    }
  }
}

const MessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageMidContainer);

export default MessageContainer;
