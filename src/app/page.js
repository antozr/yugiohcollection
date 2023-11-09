"use client"

import { useEffect, useState } from "react";
import BigCard from "./components/CardBIg";
import BoxIntro from "./components/boxIntro";


export default function Home() {

  let apiUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php?level=2";
  console.log(apiUrl);

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{
    fetch(apiUrl)
    .then((res)=> res.json())
    .then((data) =>{
      setData(data)
      console.table(data)
      console.log(data.data[0].id);
      setLoading(false)
    })
  }, []);

  if(!data) return<p> no data</p> 
  return (
    <main className="main">
      <BoxIntro 
      title1={"Bien le bonjour "}
      txt1={<>Bienvenus dans ton gestionnaire de carte. Tu vas avoir un aperçu en un rien de temps de ta collection. </>}
      link1={<>Ajouter des cartes</>}
      src1={"/ajouterCarte"}
      link2={<>Voir ta collection</>}
      src2={"/collection"}
      srcImg={"https://images.unsplash.com/photo-1668720028726-c4997f31f216?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      />
<p>{data.data[0].id}</p>
      <BigCard/>
    </main>
  )
}
