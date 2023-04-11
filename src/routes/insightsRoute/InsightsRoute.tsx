import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import { Page } from "../../components/page/Page";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/Store";
import { GroupToolbar } from "../../components/toolbar";

export const InsightsRoute: React.FC = () => {
	const { appSlice: groupSlice } = useSelector((state: RootState) => state);

	return (
		<Page title={"Insights"} toolbar={<GroupToolbar groupName={groupSlice.selectedGroup?.name} />}>
			<IonCard>
				<IonCardHeader>
					<IonCardSubtitle>Je laatste quote</IonCardSubtitle>
					<IonCardTitle>09/04/2023</IonCardTitle>
				</IonCardHeader>
			</IonCard>
		</Page>
	);
};
