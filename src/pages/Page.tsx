import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useParams } from "react-router";
import { mockGroups } from "../mocks/mocks";
import "./Page.css";

const Page: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const group = mockGroups.filter((x) => x.id === id)[0];

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>{id}</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{group?.name || "ERROR"}</IonTitle>
					</IonToolbar>
				</IonHeader>
			</IonContent>
		</IonPage>
	);
};

export default Page;
