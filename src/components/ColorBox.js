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
    const overlayClassName = copied ? 'copy-overlay show' : 'copy-overlay'
    const copyMsgClassName = copied ? 'copy-msg show' : 'copy-msg'

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className="colorBox">
          <div style={{ background }} className={overlayClassName} />
          <div className={copyMsgClassName}>
            <h1>copied</h1>
            <p>{background}</p>
          </div>
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
