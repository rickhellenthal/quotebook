import { IonBackButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "./Page.css";

export interface PageProps {
	title: string;
	header?: boolean;
	children?: React.ReactNode;
	backButton?: boolean;
}

export const Page = (props: PageProps) => {
	return (
		<IonPage>
			<IonHeader>
				{props.header && (
					<IonToolbar>
						<IonButtons slot="start">{props.backButton ? <IonBackButton></IonBackButton> : <IonMenuButton />}</IonButtons>
						<IonTitle>{props.title}</IonTitle>
					</IonToolbar>
				)}
			</IonHeader>

			<IonContent fullscreen>{props.children}</IonContent>
		</IonPage>
	);
};
