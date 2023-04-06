import {
	IonAvatar,
	IonBackButton,
	IonButton,
	IonButtons,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonContent,
	IonFab,
	IonFabButton,
	IonHeader,
	IonIcon,
	IonImg,
	IonItem,
	IonLabel,
	IonList,
	IonMenuButton,
	IonModal,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { Page } from "../../components/page/Page";
import { addOutline, swapHorizontalOutline } from "ionicons/icons";
import { mockGroups, mockQuotes } from "../../mocks/mocks";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../stores/Store";
import { useEffect, useRef, useState } from "react";
import { IGroup } from "../../interfaces/IGroup";
import { GroupSliceActions } from "../../stores/appSlice/AppReducer";

export const QuotesRoute: React.FC = () => {
	const modal = useRef<HTMLIonModalElement>(null);
	const page = useRef(null);
	const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);

	useEffect(() => {
		setPresentingElement(page.current);
	}, []);

	const setGroup = (group: IGroup | null) => {
		dispatch(GroupSliceActions.setGroup(group));
		modal.current?.dismiss();
	};
	function dismiss() {
		modal.current?.dismiss();
	}

	const { groupSlice } = useSelector((state: RootState) => state);
	const dispatch = useDispatch();
	const quotes = mockQuotes;

	const renderToolBar = () => {
		return (
			<IonToolbar>
				<IonTitle>{groupSlice.group?.name || "group"}</IonTitle>
				<IonButtons slot="primary">
					<IonButton id="open-modal" expand="block">
						<IonIcon slot="icon-only" icon={swapHorizontalOutline}></IonIcon>
					</IonButton>
				</IonButtons>
			</IonToolbar>
		);
	};

	// TODO: Add title of selected group to toolbar and a button to switch group.
	return (
		<Page title={"Quotes"} toolbar={renderToolBar()}>
			{quotes.map((quote) => (
				<IonCard key={quote.id}>
					<IonCardHeader>
						<IonCardSubtitle>{quote.quote}</IonCardSubtitle>
					</IonCardHeader>
					<IonCardContent>
						{quote.author} in {quote.group.name}
					</IonCardContent>
				</IonCard>
			))}

			<IonModal ref={modal} trigger="open-modal" presentingElement={presentingElement!}>
				<IonHeader>
					<IonToolbar>
						<IonTitle>Switch group</IonTitle>
						<IonButtons slot="end">
							<IonButton onClick={() => dismiss()}>Close</IonButton>
						</IonButtons>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonList>
						{mockGroups.map((group) => (
							<IonItem onClick={() => setGroup(group)}>
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
		</Page>
	);
};
