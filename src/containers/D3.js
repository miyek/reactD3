import React from 'react';

import { TemperatureList, BarChart } from '../components';

export class D3 extends React.Component {
  render() {
    return <div>
      <TemperatureList/>
      <BarChart/>
    </div>
  }
}
