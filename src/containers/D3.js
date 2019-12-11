import React from 'react';

import { TemperatureList, BarChart, BarChart2, WorldMap } from '../components';

export class D3 extends React.Component {
  render() {
    return <div>
      <h2>Temperature list</h2>
      <TemperatureList/>
      <h2>Bar chart</h2>
      <BarChart/>
      <h2>Bar chart 2 example</h2>
      <BarChart2 data={[5,10,1,3]} size={[200,200]} />
      <h2>Wordmap</h2>
      <WorldMap/>
    </div>
  }
}
