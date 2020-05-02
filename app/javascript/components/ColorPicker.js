import React from "react";
import { SketchPicker } from "react-color";

class ColorPicker extends React.Component {

  constructor(props) {
    super(props);

    this.state  = {
      selector: props.selector
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (color) => {
    document.body.style.background = color.hex;
    let elem = document.querySelector('#'+ this.state.selector);

    elem.value = color.hex;
  }

  render() {
    return (
      <React.Fragment>
        <SketchPicker 
          onChange={this.handleChange}
          color={this.props.color}/>
      </React.Fragment>
    );
  }
}

export default ColorPicker;