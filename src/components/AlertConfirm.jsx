import * as React from 'react';

import './AlertConfirm.css';

class AlertConfirm extends React.Component {
  render() {
    let { title, message, lblCancel, lblSuccess, onCancel, onSuccess, className, ...refs } = this.props;
    return (
      <div className="Alert-Root" { ...refs }>
        <div className={ `Alert-Wrapper ${className}` }>
          <div className="Alert-Icon">
            <span></span>
            <span></span>
          </div>
          <div className="Alert-Content">
            <h2>{ title }</h2>
            <p>{ message }</p>
          </div>
          <div className="Alert-Footer">
            <button className="danger" onClick={ onCancel } type="button">{ (lblCancel) ?  lblCancel : `Cancel` }</button>
            <button className="success" onClick={ onSuccess } type="button"> { (lblSuccess) ?  lblSuccess : `Yes. I Sure!` }</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AlertConfirm;