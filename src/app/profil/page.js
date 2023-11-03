import React from 'react'
import BoxIntro from '../components/boxIntro'

const ProfilStat = () => {
  return (
    <div className="profilStat">
        <BoxIntro
         title1={"Ton  profil"}
         txt1={
           <>
             Tu vas pouvoir ajouter des cartes en un tour de main. Tu vas faire grandir ta collection en un rien de temps. {" "}
           </>
         }
         link1={<>Ajoute une carte </>}
         src1={"/ajouterCarte"}
         link2={<>Voir ta collection</>}
         src2={"/collection"}
         srcImg={
           "https://images.unsplash.com/photo-1668720028726-c4997f31f216?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         }
       />
    </div>
  )
}

export default ProfilStat