import React from 'react'
import styled from 'styled-components'
import { VictoryPie } from 'victory'

const data = [
  { 
    x: "Communicating", 
    y: 9821, 
    segmentFill: '#DFECBC', 
    segmentStroke: '#671A70',
    segmentStrokeWidth: 4,
  },
  { 
    x: "Not Communicating", 
    y: 520, 
    segmentFill: '#F5F6F5', 
    segmentStroke: '#F5F6F5',
    segmentStrokeWidth: 5, 
  }
]

const StyledChartDonut = styled(VictoryPie)`

`
export const ChartDonut = () => {
  return (
    <StyledChartDonut 
      data={data}
      innerRadius={100}
      style={{
        data: {
          fill: (d) => d.slice.data.segmentFill,
          stroke: (d) => d.slice.data.segmentStroke,
          strokeWidth: (d) => d.slice.data.segmentStrokeWidth,
        }
      }}
    />
  )
}