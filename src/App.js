import React, { Component } from 'react';
import AlertConfirm from './components/AlertConfirm';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      alert : null
    }
  }

  onCancel = () => {
    this.setState({
      alert :null
    });
  }

  onSuccess = () => {
    this.setState({
      alert :null
    });
    alert("Thành Công");
  }

  onClick = () => {
    this.setState({
      alert : (<AlertConfirm 
        title  = "Thông Báo"
        message = "Bạn Có Chắc Chắn Muốn Xoá Hay Không?"
        onCancel = { this.onCancel }
        onSuccess = { this.onSuccess }
      />)
    });
  }

  render() {
    return (
      <div className="App" style={ {textAlign : 'center', marginTop : '150px'} }>
        { this.state.alert }
        <button  className="btn btn-success" onClick={ this.onClick }> Click Me </button>
      </div>
    );
  }
}

export default App;
