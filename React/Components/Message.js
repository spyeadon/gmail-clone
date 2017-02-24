import React from 'react';

const Message = (props) => {

  return (
    <div id="message-container" >
        <form className='form-group' style={{marginTop: '20px'}}>
      <input
        className='form-control message-to'
        placeholder="Send to"
      />
    </form>
    <form className='form-group' style={{marginTop: '20px'}}>
      <input
        className='form-control message-subject'
        placeholder="Subject line"
      />
    </form>
    <form className='form-group' style={{marginTop: '20px'}}>
      <input
        className='form-control message-body'
        placeholder="Message"
      />
    </form>
    </div>
  );
}

//onChange={handleChange}
//value={inputValue}

export default Message;
