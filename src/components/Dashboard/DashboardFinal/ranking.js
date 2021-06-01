import React, { useEffect, useState } from "react";
import domtoimage from 'dom-to-image';
import './rankign.css';
import {db, firebase, auth} from '../../../config/firebase.config';

import { jsPDF } from "jspdf";

import {

  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";





function toPDF(){
 
  const input = document.getElementById('chartrankning');
  const pdf = new jsPDF('landscape');
  if (pdf) {
    domtoimage.toPng(input)
      .then(imgData => {
        pdf.addImage(imgData, 'PNG',50, 50,320,80);
        pdf.save('chart.pdf');
      });
  }
}


  

function Ranking() {

  const [users, setUser] = useState([]);
  function getUser() {
    db.collection('panelchat').onSnapshot((querySnapshot) => {
        const items = []
        querySnapshot.forEach((doc) => {
            const Data = doc.data();
            Data.id = doc.id
            
            items.push(Data)
        })
        setUser(items)
    })
  }
  useEffect(() => {
    getUser();
  }, [])
  const ddb= []
  for(var i =0 ; i<users.length;i++)
  {
    const e= Object.entries(users[i])
    ddb.push(e)
  }
  const inda=[]
for(var j=0; j<ddb.length;j++)
{
  for(var i =0; i<ddb[j].length;i++){
    if (ddb[j][i].indexOf("id")!=-1)
     {
       inda.push(ddb[j][i][1])
     }   
     
  }
}
const indc=[]
for(var j=0; j<ddb.length;j++)
{
  for(var i =0; i<ddb[j].length;i++){
    if (ddb[j][i].indexOf("closed")!=-1)
     {
       indc.push(ddb[j][i][1])
     }   
     
  }
}

  console.log(ddb)
  console.log(inda)
  console.log(indc)

  const datas=[]
  for(var i=0; i <inda.length;i++)
  {
    datas.push({name:inda[i],chats:indc[i]})
  }
  console.log(datas)
  let mensajes = []



 
 
 return (
   
    <div style={{ textAlign: "center" }} id="chartadminr">
      <h1 className="tituloadmins">Administradores con mas chats completados</h1>
      <div className="cosa" id="chartrankning">
      {()=>toPDF()}
        <BarChart
          width={900}
          height={300}
          data={datas}
          margin={{
            top: 5,
            right: 100,
            left: 0,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="chats" fill="#474747" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
      <button class="btn69 btn-acceptt" onClick= {toPDF} > Descarga pdf</button>
    </div>
  );
};

export default Ranking;
