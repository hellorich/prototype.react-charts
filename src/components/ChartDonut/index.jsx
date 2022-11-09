import React from 'react'
import styled from 'styled-components'
import { VictoryPie } from 'victory'

const data = [
  { 
    x: ' ', 
    y: 520, 
    segmentFill: '#F5F6F5', 
    segmentStroke: '#F5F6F5',
    segmentStrokeWidth: 7, 
  },
  {
    x: ' ',
    y: 341,
    segmentFill: '#DFECBC', 
    segmentStroke: '#671A70',
    segmentStrokeDashArray: '10,10',
    segmentStrokeWidth: 6,
  },
  { 
    x: ' ', 
    y: 9821, 
    segmentFill: '#DFECBC', 
    segmentStroke: '#671A70',
    segmentStrokeWidth: 6,
  }
]

const StyledChartDonut = styled.figure`
  height: 300px;
  width: 300px;
`

export const ChartDonut = () => {
  return (
    <StyledChartDonut>
      <VictoryPie
        className='hello-there'
        data={data}
        innerRadius={100}
        labels=''
        style={{
          data: {
            fill: (d) => d.slice.data.segmentFill,
            stroke: (d) => d.slice.data.segmentStroke,
            strokeWidth: (d) => d.slice.data.segmentStrokeWidth,
            strokeDashArray: (d) => d.slice.data.segmentStrokeDashArray,
          },
          parent: { transform: 'scaleX(-1)'}
        }}
      />
    </StyledChartDonut>
  )
}