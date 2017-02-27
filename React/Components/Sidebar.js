import React from 'react';
import { Link } from 'react-router';

const Sidebar = (props) => {

  return (
    <sidebar>
      <img src="/mail-icon.svg" className="logo" />
      <section>
        <h2 className="menu-item">
          <Link to='/inbox/1'>Inbox</Link>
        </h2>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to='/drafts/1' >Drafts</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to='/sent/1'>Sent</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to='/important/1'>Important</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to='/spam/1'>Spam</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to='/trash/1'>Trash</Link>
        </h4>
      </section>
      <hr />
      <section>
        <h4>
          <Link className="btn btn-primary btn-block" to="/compose/0">
            <span className="glyphicon glyphicon-plus"></span> MESSAGE
          </Link>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
