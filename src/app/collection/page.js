import React from "react";
import BoxIntro from "../components/boxIntro";

const collectionYGH = () => {
  return (
    <div className="collect">
      <BoxIntro
        title1={"Ta  collection  "}
        txt1={
          <>
            Bien le bonjour, tu as 60 cartes dans ton inventaire. Mais tu peux en savoir plus sur elle si tu le souhaite. {" "}
          </>
        }
        link1={<>Ajouter des cartes</>}
        src1={"/ajouterCarte"}
        link2={<>Voir les stats </>}
        src2={"/profil"}
        srcImg={
          "https://images.unsplash.com/photo-1668720028726-c4997f31f216?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
    </div>
  );
};

export default collectionYGH;
