import React from 'react';
import d3 from '../d3-import';

/**
 * Get Dat by props
 */
class BarChart2 extends React.Component {
  constructor(props) {
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
  }

  componentDidMount() {
    this.createBarChart();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.createBarChart();
  }

  createBarChart() {
    const node = this.node;
    const dataMax = d3.max(this.props.data);
    const yScale = d3.scaleLinear()
      .domain([0, dataMax])
      .range([0, this.props.size[1]]);

    d3.select(node)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect');

    d3.select(node)
      .selectAll('rect')
      .data(this.props.data)
      .exit()
      .remove();

    d3.select(node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', 'red')
      .attr('x', (d, i) => i * 30)
      .attr('y', d => this.props.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 25);
  }

  render() {
    return <svg ref={node => this.node = node } width={500} height={500}/>;
  }
}

export default BarChart2;
