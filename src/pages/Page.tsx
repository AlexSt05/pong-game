import { IonButtons, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import { RouteComponentProps } from 'react-router';
interface ContainerProps extends RouteComponentProps<{}> {
 
}
const Page: React.FC<ContainerProps> = ({history,location,match}) => {

  const { name } = useParams<{ name: string; }>();

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
            <IonTitle size="large">Game</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonImg style={{width: "200px",
    margin: "0 auto",}} src={"https://www.nicepng.com/png/detail/13-137328_cool-logo-png-transparent-cool-band-logos-to.png"} />
        <ExploreContainer name="Game" history={history} location={location} match={match}/>
      </IonContent>
    </IonPage>
  );
};

export default Page;
