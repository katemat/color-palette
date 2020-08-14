import React from 'react'
import '../components/style/ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'

class ColorBox extends React.Component {
  state = {
    copied: false,
  }

  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500)
    })
  }

  render() {
    const { name, background } = this.props
    const { copied } = this.state

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className="colorBox">
          <div
            style={{ background }}
            className={`copy-overlay ${copied && 'show'}`}
          />
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
