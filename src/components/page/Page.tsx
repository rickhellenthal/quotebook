import { IonBackButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "./Page.css";

export interface PageProps {
	title: string;
	toolbar?: React.ReactNode;

	header?: boolean;
	children?: React.ReactNode;
	backButton?: boolean;
}

export const Page = (props: PageProps) => {
	return (
		<IonPage>
			<IonHeader>
				{props.toolbar ? (
					props.toolbar
				) : (
					<>
						{props.header && (
							<IonToolbar>
								<IonButtons slot="start">{props.backButton ? <IonBackButton /> : <IonMenuButton />}</IonButtons>
								<IonTitle>{props.title}</IonTitle>
							</IonToolbar>
						)}
					</>
				)}
			</IonHeader>

			<IonContent className="ion-padding">{props.children}</IonContent>
		</IonPage>
	);
};
