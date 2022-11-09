import React from 'react'
import styled from 'styled-components'
import { VictoryPie } from 'victory'

const data = [
  { x: "Cats", y: 35 },
  { x: "Dogs", y: 40 },
  { x: "Birds", y: 55 }
]

const StyledChartDonut = styled(VictoryPie)`

`
export const ChartDonut = () => {
  return (
    <StyledChartDonut 
      data={data}
      innerRadius={100}
    />
  )
}