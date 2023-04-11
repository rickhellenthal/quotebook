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
	IonSelect,
	IonSelectOption,
	IonIcon,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
} from "@ionic/react";
import { AppSliceActions } from "../../stores/appSlice/AppReducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../stores/Store";
import { useFormik } from "formik";
import { IAddQuoteRequest } from "../../interfaces/quotes/IAddQuoteRequest";
import { format } from "date-fns";
import { chatboxOutline, chatboxSharp, informationCircleSharp, informationOutline, personOutline, personSharp } from "ionicons/icons";

export interface IGroupSwitcherProps {
	presentingElement: HTMLElement | null;
}

interface InternalFormProps {
	groupId: string;
	quote: string | undefined;
	context: string | undefined;
	author: string | undefined;
	date: string | undefined;
}

const LABEL_PLACEMENT = "start";
export const CreateQuoteModal = (props: IGroupSwitcherProps) => {
	const { createQuoteModal, groups, selectedGroup } = useSelector((state: RootState) => state.appSlice);
	const dispatch = useDispatch<AppDispatch>();
	const formik = useFormik({
		initialValues: {
			groupId: selectedGroup?.id || "",
			quote: "",
			context: "",
			author: "",
			date: format(new Date(), "yyyy-MM-dd") + "T" + format(new Date(), "HH:mm"),
		} as InternalFormProps,
		onSubmit: (values) => {
			const request: IAddQuoteRequest = {
				quote: values.quote || "",
				context: values.context,
				author: values.author || "",
				date: values.date || "",
				groupId: values.groupId,
			};
			dispatch(AppSliceActions.addQuote(request));
		},
	});

	const onClose = () => {
		dispatch(AppSliceActions.setCreateQuoteModalIsOpen(false));
	};

	return (
		<IonModal isOpen={createQuoteModal.isOpen} presentingElement={props.presentingElement!} onDidDismiss={() => onClose()}>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Add a Quote</IonTitle>
					<IonButtons slot="end">
						<IonButton onClick={() => onClose()}>Cancel</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<form onSubmit={formik.handleSubmit}>
					<IonCard>
						<IonCardHeader>
							<IonCardTitle>
								<IonSelect
									name="groupId"
									onIonChange={formik.handleChange}
									aria-label={"In welke group hoort deze quote?"}
									placeholder={"In welke group hoort deze quote?"}
									labelPlacement={LABEL_PLACEMENT}
									interface="action-sheet"
									value={formik.values.groupId}
								>
									{groups.data.map((group) => (
										<IonSelectOption key={group.id} value={group.id}>
											{group.name}
										</IonSelectOption>
									))}
								</IonSelect>
							</IonCardTitle>
							<IonCardSubtitle>
								<IonInput
									name="date"
									aria-label="Wanneer?"
									placeholder="Wanneer?"
									value={formik.values.date}
									type="datetime-local"
									labelPlacement={LABEL_PLACEMENT}
									onIonChange={formik.handleChange}
									style={{ minHeight: 0 }}
								/>
							</IonCardSubtitle>
						</IonCardHeader>
						<IonCardContent className="ion-no-padding">
							<IonList>
								<IonItem>
									<IonIcon slot="start" size="medium" ios={chatboxOutline} md={chatboxSharp} />
									<IonInput
										name="quote"
										aria-label="Wat is er gezegd?"
										placeholder="Wat is er gezegd?"
										labelPlacement={LABEL_PLACEMENT}
										onIonChange={formik.handleChange}
										fill="solid"
									/>
								</IonItem>

								<IonItem>
									<IonIcon slot="start" size="medium" ios={personOutline} md={personSharp} />
									<IonInput
										name="author"
										aria-label="Door wie?"
										placeholder="Door wie?"
										labelPlacement={LABEL_PLACEMENT}
										onIonChange={formik.handleChange}
										fill="solid"
									/>
								</IonItem>

								<IonItem>
									<IonIcon slot="start" size="medium" ios={informationOutline} md={informationCircleSharp} />
									<IonInput
										name="context"
										aria-label="Context"
										placeholder="Context"
										labelPlacement={LABEL_PLACEMENT}
										onIonChange={formik.handleChange}
										fill="solid"
									/>
								</IonItem>
							</IonList>
						</IonCardContent>
					</IonCard>

					<IonButton expand="block" type="submit" className="ion-padding-horizontal">
						Add
					</IonButton>
				</form>
			</IonContent>
		</IonModal>
	);
};
