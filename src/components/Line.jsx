import React from 'react'
import { IonRow } from '@ionic/react'

const Line = (props)=> {
    return (
        <IonRow>
            {
                props.children
            }
        </IonRow>
    )
}

export default Line