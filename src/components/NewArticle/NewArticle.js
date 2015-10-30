/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './NewArticle.css';
import withStyles from '../../decorators/withStyles';
import TextBox from '../Atoms/TextBox'

@withStyles(styles)
class NewArticle extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  _clearForm() {
    console.log(this.refs.title)
    this.refs.title._clearInput();
    this.refs.author._clearInput();
    this.refs.content._clearInput();

  }
  _handleSubmit(){
    console.log("submit!!")
  }

  render() {
    const title = 'New Article';
    this.context.onSetTitle(title);
    return (
      <div className="NewArticle">
        <div className="NewArticle-container">
          <label>Title:</label>
          <TextBox ref="title" maxLines={1} />
          <label>Author:</label>
          <TextBox ref="author" maxLines={1} />
          <label>Content:</label>
          <TextBox ref="content" maxLines={8} />
          <button onClick={this._handleSubmit.bind(this)}>Send</button>
          <button onClick={this._clearForm.bind(this)}>Clear</button>
        </div>
      </div>
    );
  }

}

export default NewArticle;
