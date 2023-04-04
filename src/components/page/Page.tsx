import { IonBackButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "./Page.css";

export interface PageProps {
	title: string;
	children?: React.ReactNode;
	backButton?: boolean;
	type?: "small" | "large";
}

export const Page = (props: PageProps) => {
	const type = props.type || "small";
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">{props.backButton ? <IonBackButton></IonBackButton> : <IonMenuButton />}</IonButtons>
					<IonTitle>{props.title}</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				{type === "small" ? (
					<IonHeader collapse="fade"></IonHeader>
				) : (
					<IonHeader collapse="fade">
						<IonToolbar>
							<IonTitle size="large">{props.title}</IonTitle>
						</IonToolbar>
					</IonHeader>
				)}

				{props.children}
			</IonContent>
		</IonPage>
	);
};
