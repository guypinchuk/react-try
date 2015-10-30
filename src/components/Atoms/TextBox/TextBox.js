/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './TextBox.css';

class TextBox extends Component {

  static propTypes = {
    maxLines: PropTypes.number,
    text: PropTypes.string
  };

  static defaultProps = {
    maxLines: 1,
  };

  constructor(props){
    super(props)
    this.state ={
      text: ""
    }
  }

  _clearInput(){
    this.setState({
      text: ""
    })
  }

  _handleChange(event){
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div className="TextBox">
        {this.props.maxLines > 1 ?
          <textarea {...this.props} className="TextBox-input" ref="input" key="input" rows={this.props.maxLines} value={this.state.text} onChange={this._handleChange.bind(this)}/> :
          <input {...this.props} className="TextBox-input" ref="input" key="input" value={this.state.text} onChange={this._handleChange.bind(this)}/>}
      </div>
    );
  }

}

export default TextBox;
