import {
	IonModal,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonButtons,
	IonButton,
	IonContent,
	IonInput,
	IonItem,
	IonList,
	IonToast,
} from "@ionic/react";
import { AppSliceActions } from "../../stores/appSlice/AppReducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../stores/Store";

export interface IGroupSwitcherProps {
	presentingElement: HTMLElement | null;
}

export const CreateQuoteModal = (props: IGroupSwitcherProps) => {
	const { createQuoteModal } = useSelector((state: RootState) => state.appSlice);
	const dispatch = useDispatch<AppDispatch>();

	return (
		<IonModal isOpen={createQuoteModal.isOpen} presentingElement={props.presentingElement!}>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Create Quote</IonTitle>
					<IonButtons slot="end">
						<IonButton onClick={() => dispatch(AppSliceActions.setCreateQuoteModalIsOpen(false))}>Cancel</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<IonList>
					<IonItem>
						<IonInput label="Wat is er gezegd?" labelPlacement="floating"></IonInput>
					</IonItem>
				</IonList>

				<IonButton expand="block">Add</IonButton>
			</IonContent>
		</IonModal>
	);
};
