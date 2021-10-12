import React from "react";

import { FixedSizeGrid as Grid } from "react-window";

const Cell = ({ columnIndex, rowIndex, style }) => (
  <div style={style}>
    Item {rowIndex},{columnIndex}
  </div>
);

export function Table() {
  return (
    <Grid
      columnCount={5}
      columnWidth={100}
      height={150}
      rowCount={1000} //make this a state hook and count from mongodb
      rowHeight={35}
      width={300} //size of grid on page
    >
      {Cell}
    </Grid>
  );
}

// export function Table(){

//     return(
// <div>
//     <table>
//         <caption>
//             Data Table
//         </caption>

//             <tr>
//                 <th>Date and Time</th>
//                 <th>Sensor 1</th>
//                 <th>Sensor 2</th>
//                 <th>Sensor 3</th>
//                 <th>Sensor 4</th>
//             </tr>

// <tbody>
//     {/* for each new data entry add a table row with the json data */}
//     <tr>

//     </tr>
// </tbody>

//     </table>
// </div>

//     )

// }
