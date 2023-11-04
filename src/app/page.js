import BigCard from "./components/CardBIg";
import BoxIntro from "./components/boxIntro";


export default function Home() {
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

      <BigCard/>
    </main>
  )
}
