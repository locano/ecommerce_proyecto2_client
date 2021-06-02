import React, { useState } from 'react'
import './chatRep.css'
import img from './failedColor.png'
import img2 from './completedColor.png'
import img3 from './inProgresColor.png'
import {db} from '../../../config/firebase.config';

import domtoimage from 'dom-to-image';
import { jsPDF } from "jspdf";


function toF(){
 
  const input = document.getElementById('chart2');
  const pdf = new jsPDF('landscape');
  if (pdf) {
    domtoimage.toPng(input)
      .then(imgData => {
        pdf.addImage(imgData, 'PNG',10, 50,280,120);
        pdf.save('chart2.pdf');
      });
  }
}

function ChatReport() {

const [chats, setChats] = useState([])

let failed = 0
let inProgres = 0
let completed = 0
let data = false;

db.collection('chats').get()
  .then(snapshot => {     
      let dat = []
      snapshot.forEach(doc => {
          data = doc.data()
          dat.push(data.status)
         
      })  
      
     if (dat.length > chats.length)
     {
       setChats(dat)
     }
  })


chats.forEach(l => 
  {
    console.log(l)
    if (l === 'fail') failed += 1
    if (l === 'Finished') completed += 1
    if (l === 'completed') inProgres += 1
  })


    let max = 0
    if (failed > max) max = failed
    if (inProgres > max) max = inProgres
    if (completed > max) max = completed
    const graphSpace = max > 0 ? 100 : 0
    const fdisplay = (failed/max*graphSpace).toString().concat('%')
    const pdisplay = (inProgres/max*graphSpace).toString().concat('%')
    const cdisplay = (completed/max*graphSpace).toString().concat('%')

    const failedStyle = {
        backgroundColor: "#ff6f8b",
        height: fdisplay,
        borderRadius: '5%',
        width: '100%'
      }

      const inProgrestyle = {
        backgroundColor: "#8675ff",
        height: pdisplay,
        borderRadius: '5%'
      }


      const completedStyle = {
        backgroundColor: "#19ffd6",
        height: cdisplay,
        borderRadius: '5%'
      }
      console.log(cdisplay)
    return (

        data !== [] ?  <><div className="all" id="chart2"><div className = 'chatRep' >

            <div className = 'chartHeader'>
        

            <h2 >Chats</h2>
            
            <div className='separator'/>
            <div style = {{display: 'flex', flexDirection: 'column', flexGrow: 6}}>

            
            <div style = {{width:'5%', height:'auto'}}>
            <div style = {{display:'flex', flexDirection: 'row', whiteSpace:'nowrap'}}>
            <img src = {img} alt=''/>
            <strong>Fallidos</strong>
            </div>
            </div>

            <div style = {{height:'5px', width:'5px'}}/>

            <div style = {{width:'5%', height:'auto'}}>
            <div style = {{display:'flex', flexDirection: 'row', whiteSpace:'nowrap'}}>
            <img src = {img3} alt=''/>
            <strong >En progreso</strong>
            </div>
            </div>

            <div style = {{height:'5px', width:'3px'}}/>

            <div style = {{width:'5%', height:'auto'}}>
            <div style = {{display:'flex', flexDirection: 'row', whiteSpace:'nowrap'}}>
            <img src = {img2} alt=''/>
            <strong style={{fontSize:'1.25rem'}}>Completados</strong>
            </div>
            </div>

            </div>

            <div className="razada"></div>
            </div>
            
            
            <div className = 'chartSpace'>
            <div style = {{width: '6.25%', order:1}} />


            <div style = {{height:'100%', width:'25%', display:'flex', textAlign: 'center', flexDirection:'column', order:2}}>
            <div style={{flexGrow:10}} / >
            {failed}
            <div style={failedStyle} />
            </div>

            
            <div style = {{width: '6.25%', order:3}} />

            <div style = {{height:'100%', width:'25%', display:'flex', textAlign: 'center', flexDirection:'column', order:4}}>
            <div style={{flexGrow:10}} / >
            {inProgres}
            <div style={inProgrestyle}/>
            </div>

            <div style = {{width: '6.25%', order:5}} />

            <div style = {{height:'100%', width:'25%', display:'flex', textAlign: 'center', flexDirection:'column', order:6}}>
            <div style={{flexGrow:10}} / >
            {completed}
            <div style={completedStyle}/>
            </div>
            
            <div style = {{width: '6.25%', order:7}} />
            
            
            </div>
          
            </div>

            
            </div>   <div className="forB">
            <button class="bt btn-accep" onClick= {()=>toF()} > Descarga pdf</button>
            </div></>: <div className = 'chatRep'>No se encontraron datos sobre chats</div>

    )
}


export default ChatReport