import { IonButton, IonIcon } from '@ionic/react';
import { basketballSharp } from 'ionicons/icons';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import './ExploreContainer.css';

interface ContainerProps extends RouteComponentProps<{}> {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name,history }) => {
  return (
    <div className="container">
     <IonButton size="large" onClick={()=>{
       history.push("/level/1")
     }}>
      <IonIcon slot="start" icon={basketballSharp} />
      Start Game
    </IonButton>
    </div>
  );
};

export default ExploreContainer;
