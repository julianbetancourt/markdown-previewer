import React, { Component } from 'react';
import InputField from '../components/InputField';
import Output from '../components/Output';
import marked from 'marked';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '# *Markdown!*'
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.convertMarkdown = this.convertMarkdown.bind(this);

  }
  handleChange(e) {
    this.setState({input: e.target.value})
  }
  convertMarkdown() {
    return { __html: marked(this.state.input)}
  }
  render() {
    return (
      <div className="App">
        <InputField onChange={this.handleChange} value={this.state.input}/>
        <Output text={this.convertMarkdown()} />
      </div>
    );
  }
}

export default App;
