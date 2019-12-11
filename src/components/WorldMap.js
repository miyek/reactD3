import React from 'react';

import d3 from '../d3-import';
import worlddata from '../data/word';

class WorldMap extends React.Component  {
  render() {
    const projection = d3.geoMercator();
    const pathGenerator = d3.geoPath().projection(projection);
    const countries = worlddata.features
      .map((d, i) => <path key={'path' + i} d={pathGenerator(d)}/>);
    return <svg width={'100%'} height={500}>{countries}</svg>
  }
}
export default WorldMap;
