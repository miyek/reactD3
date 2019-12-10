import React from 'react';
import * as d3 from 'd3';

class TemperatureList extends React.Component {
  temperatureData = [8, 5, 13, 9, 12];

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    d3.select(this.myRef.current)
      .selectAll('h2')
      .data(this.temperatureData)
      .enter()
      .append('h2')
      .text(t=> t + ' degrees')
      .attr('class', d => d > 10 ? 'red' : 'blue');
  }

  render() {
    return <div ref={this.myRef}/>
  }
}

export default TemperatureList;
