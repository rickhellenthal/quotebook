import { IonButton, IonButtons, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import { swapHorizontalOutline } from "ionicons/icons";
import { useDispatch } from "react-redux";
import { AppSliceActions } from "../../stores/appSlice/AppReducer";

export interface IGroupToolbarProps {
	groupName: string | undefined;
}
export const GroupToolbar = (props: IGroupToolbarProps) => {
	const dispatch = useDispatch();
	return (
		<IonToolbar>
			<IonTitle>{props.groupName || "group"}</IonTitle>
			<IonButtons slot="primary">
				<IonButton expand="block" onClick={() => dispatch(AppSliceActions.setGroupSwitcherIsOpen(true))}>
					<IonIcon slot="icon-only" icon={swapHorizontalOutline}></IonIcon>
				</IonButton>
			</IonButtons>
		</IonToolbar>
	);
};
