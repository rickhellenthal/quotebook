import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "./Page.css";

export interface PageProps {
	title: string;
	children?: React.ReactNode;
}

export const Page = (props: PageProps) => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>{props.title}</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{props.title}</IonTitle>
					</IonToolbar>
				</IonHeader>

				{props.children}
			</IonContent>
		</IonPage>
	);
};
