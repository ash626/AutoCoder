import React, {Component} from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2'
require('codemirror/theme/dracula.css');
require('codemirror/mode/css/css.js');
require('codemirror/lib/codemirror.css');

const script= "#codemirror-wrapper{\n  position: absolute;\n  top: 25vh;\n  left: 25vw;\n}";

class AutoCoder extends Component{
  constructor(props){
    super(props)
    this.state = {css: ""}
  }

  componentDidMount(){
    this.animateWrite(script);
  }

  animateWrite(script){
    if (script === "") return;
    this.setState({css: this.state.css + script.charAt(0)});
    setTimeout(this.animateWrite.bind(this), 30, script.substring(1, script.length));
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