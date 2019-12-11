import React from 'react';
import d3 from '../d3-import';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const data = [2, 4, 2, 6, 8];
    this.drawBarChart(data);
  }

  drawBarChart(data) {
    const canvasHeight = 400;
    const canvasWidth = 600;
    const scale = 20;

    const svgCanvas = d3.select(this.myRef.current)
      .append('svg')
      .attr('width', canvasWidth)
      .attr('height', canvasHeight)
      .style('border', 'thin solid black');

    svgCanvas.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('width', 40)
      .attr('height', dataPoint => dataPoint * scale)
      .attr('fill', 'orange')
      .attr('x', (dataPoint, i) => i * 45)
      .attr('y', dataPoint => canvasHeight - dataPoint * scale);

    svgCanvas.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('x', (dataPoint, i) => i * 45 + 15)
      .attr('y', (dataPoint, i) => canvasHeight - dataPoint * scale - 10)
      .text(dataPoint => dataPoint);
  }

  render() {
    return <div ref={this.myRef}/>
  }
}

export default BarChart;
