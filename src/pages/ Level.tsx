import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import Canvas from '../components/Canvas';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Level: React.FC = () => {

  const { level } = useParams<{ level: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Game</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Level {level}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Canvas></Canvas>
      </IonContent>
    </IonPage>
  );
};

export default Level;
