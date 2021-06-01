import React, { useEffect, useState } from "react";

import './dash.css'
import Ranking from './ranking';
import ChatReport from './ChatReport'
import VentasChart from './ventasChart'

function All (){
    return(
        <div>
            <div className="c1">
                
                <VentasChart/>
            </div>
            <div className="c2">
                <ChatReport/>
            </div>
            <div className="c1">
            <Ranking/>
            </div>
        </div>
    )
}

export default All;