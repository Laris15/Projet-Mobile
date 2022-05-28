import { IonContent, IonGrid, IonHeader, IonPage, IonTitle, IonFooter, IonToolbar, IonText } from '@ionic/react';
import { buttons } from '../utilitaires/buttons';
import Line from '../components/Line';
import ButtonR from '../components/ButtonR';
import { useState, useEffect } from 'react';
import styles from "./Home.module.css"
// import Button from '../components/Button'


const Home = () => {

  // Declaration des HOOKS 
  const [affTitre, setAffTitre] = useState("")
  const [somme, setSomme] = useState(0)
  const [historiqueSomme, setHistoriqueSomme] = useState("")

  const handleClick = (e, operateur) => {
    console.log(e)
    const historiqueTmp = historiqueSomme.replace(" ", "")

    if (operateur === "=") {
        calcluer()
    } else if (operateur === "C") {
        reinitialiser()
    } else if (operateur === "Del") {
        effacer()
    } else {
        e.target.classList.add("animate__headShake");
        setTimeout(() => {
            setHistoriqueSomme(historiqueTmp + operateur)
            e.target.classList.remove("animate__headShake");
        }, 100)
    }
}

useEffect(() => {
  calcluer()
}, [historiqueSomme])

const calcluer = () => {
  try {
      // Effectuer le calcul  
      setSomme(eval(historiqueSomme).length > 5 ? eval(historiqueSomme).toFixed(4) : eval(historiqueSomme))
      setAffTitre("")
  } catch (e) {

  }
}

const reinitialiser = () => {
  setHistoriqueSomme("")
  setSomme(0)
  setAffTitre("")
}

const effacer = () => {
  const sommeTmp = historiqueSomme.substr(0, historiqueSomme.length - 1)
  setHistoriqueSomme(sommeTmp)
}

const afficher = () => {
  if (somme.toString().length > 9) {
      return somme.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").substr(0, 10).concat("..")
  } else {
      return somme.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculatrice</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonText>
                    <div className={styles.containerSomme}>
                        {affTitre && <h4>{affTitre}</h4>}
                        <p>{historiqueSomme}</p>
                        <h1 className="animate_animated animate_headShake">
                            {afficher()}
                        </h1>
                    </div>
                </IonText>
      </IonContent>
      <IonFooter>
        <IonGrid> 
            {
              buttons.map((line, index) =>{
                return (
                  <Line key={index}>
                      {
                        line.map((boutton)=>{
                          return(
                            <ButtonR valeur={boutton.valeur} speciale={boutton.speciale} clickEvent = { handleClick}/>
                          )
                        })
                      }
                  </Line>
                )
              })
            }
          </IonGrid> 
      </IonFooter>
    </IonPage>
  );
};

export default Home