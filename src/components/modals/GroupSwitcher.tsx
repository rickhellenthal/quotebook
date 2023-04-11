import {
	IonModal,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonButtons,
	IonButton,
	IonContent,
	IonList,
	IonItem,
	IonAvatar,
	IonImg,
	IonLabel,
} from "@ionic/react";
import { mockGroups } from "../../mocks/mocks";
import { AppSliceActions } from "../../stores/appSlice/AppReducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../stores/Store";

export interface IGroupSwitcherProps {
	presentingElement: HTMLElement | null;
}

export const GroupSwitcherModal = (props: IGroupSwitcherProps) => {
	const { appSlice } = useSelector((state: RootState) => state);
	const dispatch = useDispatch<AppDispatch>();

	return (
		<IonModal isOpen={appSlice.groupSwitcherModal.isOpen} presentingElement={props.presentingElement!}>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Switch group</IonTitle>
					<IonButtons slot="end">
						<IonButton onClick={() => dispatch(AppSliceActions.setGroupSwitcherIsOpen(false))}>Close</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList>
					{mockGroups.map((group) => (
						<IonItem
							onClick={() => {
								dispatch(AppSliceActions.setGroup(group));
								dispatch(AppSliceActions.setGroupSwitcherIsOpen(false));
							}}
							key={group.id}
						>
							<IonAvatar slot="start">
								<IonImg src="https://i.pravatar.cc/300" />
							</IonAvatar>
							<IonLabel>
								<h2>{group.name}</h2>
							</IonLabel>
						</IonItem>
					))}
				</IonList>
			</IonContent>
		</IonModal>
	);
};
