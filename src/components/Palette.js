import React from 'react'
import ColorBox from './ColorBox'
import '../components/style/Palette.css'

class Palette extends React.Component {
  render() {
    const colorBoxes = this.props.colors.map((color) => (
      <ColorBox background={color.color} name={color.name} />
    ))
    return (
      <div className="palette">
        {/* NavBar */}
        <div className="palette-colorBox">
          <h2 className="palette-name">{this.props.paletteName}</h2>
          {colorBoxes}
        </div>
      </div>
    )
  }
}

export default Palette
