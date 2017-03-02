import React from 'react';

const Message = (props) => {

  let body = props.body;
  let subject = props.subject;
  let recipient = props.recipient;
  let handleSubmit = props.handleSubmitSave;
  let handleBodyChange = props.handleBodyChange;
  let handleSubjectChange = props.handleSubjectChange;
  let handleRecipientChange = props.handleRecipientChange;

  return (
    <div id="message-container" >
      <form
        className='form-group'
        style={{marginTop: '20px'}}
        onSubmit={handleSubmit}
      >
        <input
          value={recipient}
          onChange={handleRecipientChange}
          className='form-control message-to'
          placeholder="Send to"
        />
        <input
          value={subject}
          onChange={handleSubjectChange}
          style={{marginTop: '20px'}}
          className='form-control message-subject'
          placeholder="Subject line"
        />
        <textarea
          value={body}
          onChange={handleBodyChange}
          style={{marginTop: '20px'}}
          rows="8"
          type="text"
          className='form-control  message-body'
        />
        <button
          style={{marginTop: '10px'}}
          type="submit"
          className="btn btn-success"
          disabled={!body}>
          Save Message
        </button>
      </form>
    </div>
  );
}


export default Message;
