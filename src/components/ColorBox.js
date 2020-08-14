import React from 'react'
import '../components/style/ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'

class ColorBox extends React.Component {
  state = {
    copied: false,
  }

  render() {
    const { name, background } = this.props

    return (
      <CopyToClipboard text={background}>
        <div style={{ background }} className="colorBox">
          <div className="copy-container">
            <div className="box-content">{name}</div>
            <button className="copy-btn">copy</button>
          </div>
        </div>
      </CopyToClipboard>
    )
  }
}

export default ColorBox
