import React, {Component} from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2'
require('codemirror/theme/dracula.css');
require('codemirror/mode/css/css.js');
require('codemirror/lib/codemirror.css');
class AutoCoder extends Component{
  constructor(props){
    super(props)
    this.state = {css: "autocoder"}
  }

  render(){
    return <div id='codemirror-wrapper'>
      <style dangerouslySetInnerHTML={{__html: this.state.css}}/>
      <CodeMirror
        value={this.state.css}
        options={{
          mode: 'css',
          theme: 'dracula',
          lineWrapping: true
        }}
        onBeforeChange={(editor, data, value) => {
          this.setState({css: value});
        }}
      />
    </div>
  }
}

export default AutoCoder;