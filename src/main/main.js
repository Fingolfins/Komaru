import React from 'react';
import TypeNumber from '../components/arrayColoredNumber';
import ToggleCatMode from '../components/toggleCatMode';
import HexTable from '../components/hexaColorTable';


const Main = (props) => {
    return (
      <div>
        <TypeNumber />    
        <ToggleCatMode props={props}/>
        <HexTable />
      </div>
    )
  }

export default Main;  