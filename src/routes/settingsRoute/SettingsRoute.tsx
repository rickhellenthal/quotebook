import { IonAvatar, IonItem, IonLabel, IonList } from "@ionic/react";
import { Page } from "../../components/page/Page";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/Store";

export const SettingsRoute: React.FC = () => {
	const { appSlice } = useSelector((state: RootState) => state);
	return (
		<Page title={"settings"} backButton>
			<IonLabel>
				<h1>Groups</h1>
			</IonLabel>

			<IonList>
				{appSlice.groups.data.map((group) => (
					<IonItem key={group.id}>
						<IonAvatar slot="start">
							<img alt={group.name} src={group.thumbnailUrl} />
						</IonAvatar>
						<IonLabel>{group.name}</IonLabel>
					</IonItem>
				))}
			</IonList>
		</Page>
	);
};
