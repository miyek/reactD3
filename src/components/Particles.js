import React from 'react';
import { event } from 'd3-selection';

import d3 from '../d3-import';

import './particles.css';

class Particles extends React.Component {
  width;
  height;

  constructor(props) {
    super(props);
    this.width = Math.max(960, window.innerWidth);
    this.height = 500;
    this.myRef = React.createRef();

  }

  componentDidMount() {
    this.drawParticles();
  }

  drawParticles() {
    let i = 0;

    const svgCanvas = d3.select(this.myRef.current)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height);

    svgCanvas.append('rect')
      .attr('width', this.width)
      .attr('height', this.height)
      .on('mousemove', particle);

    function particle() {
      const m = d3.mouse(this);

      svgCanvas.insert('circle', 'rect')
        .attr('cx', m[0])
        .attr('cy', m[1])
        .attr('r', 1e-6)
        .style('stroke', d3.hsl((i = (i + 1) % 360), 1, 0.5))
        .style("stroke-opacity", 1)
        .transition()
        .duration(2000)
        .ease(Math.sqrt)
        .attr("r", 100)
        .style("stroke-opacity", 1e-6)
        .remove();

      event.preventDefault();
    }
  }

  render() {
    return <div className='particles' ref={this.myRef}/>
  }
}

export default Particles;
