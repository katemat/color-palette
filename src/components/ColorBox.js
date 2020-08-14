import React from 'react'
import '../components/style/ColorBox.css'

class ColorBox extends React.Component {
  render() {
    const { name, background } = this.props
    return (
      <div style={{ background }} className="colorBox">
        <div className="copy-container">
          <div className="box-content">{name}</div>
          <button className="copy-btn">copy</button>
        </div>
      </div>
    )
  }
}

export default ColorBox
