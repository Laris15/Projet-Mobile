import React from 'react'
import { IonCol } from '@ionic/react'
import styles from "./ButtonR.module.css"

const ButtonR = (props) => {
    const {valeur,speciale, clickEvent} = props 
    return (
        <IonCol className={`${speciale ? styles.speciale : styles.nonSpeciale} animate_animated animate_faster`} onClick={(e) => clickEvent(e, valeur)}>
            {valeur === "/" ? <>&divide;</> : valeur === "*" ? <>&times;</> : valeur}
        </IonCol>
    )
}

export default ButtonR