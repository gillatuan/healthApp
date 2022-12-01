import ReactHighcharts from "react-highcharts"

import { createLineChart } from "@brightlayer-ui/highcharts"
import * as BLUIColors from "@brightlayer-ui/colors"

export const BodyGraph = () => {
  const lineConfig = {
    colors: [
      BLUIColors.black[500],
      BLUIColors.black[200],
      BLUIColors.black[200],
    ],
  }

  const graphStyles = {
    domProps: {
      style: {
        backgroundColor: "#2E2E2E",
        height: "100%",
      },
    },
  }
  return (
    <div className="panel" style={{ height: 316, backgroundColor: "#2E2E2E" }}>
      <ReactHighcharts config={createLineChart(lineConfig)} {...graphStyles} />
    </div>
  )
}
