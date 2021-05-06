import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { relative } from 'node:path';
import React from 'react';
import { RouteComponentProps, useParams } from 'react-router';
import Canvas from '../components/Canvas';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

interface ContainerProps extends RouteComponentProps<{}> {
}

const Level: React.FC<ContainerProps> = ({ history, location, match }) => {

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

      <IonContent scrollY={false} scrollX={false} fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Level {level}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Canvas level={level} history={history} location={location} match={match}></Canvas>
      </IonContent>
    </IonPage>
  );
};

export default Level;
