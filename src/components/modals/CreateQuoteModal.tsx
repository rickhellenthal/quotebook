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
	IonSelect,
	IonSelectOption,
	IonAlert,
	IonDatetime,
} from "@ionic/react";
import { AppSliceActions } from "../../stores/appSlice/AppReducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../stores/Store";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Field, useFormik } from "formik";
import { IAddQuoteRequest } from "../../interfaces/quotes/IAddQuoteRequest";
import { StatePieceStatus } from "../../enums/StatePieceStatus";

export interface IGroupSwitcherProps {
	presentingElement: HTMLElement | null;
}

export const CreateQuoteModal = (props: IGroupSwitcherProps) => {
	const { createQuoteModal, groups, selectedGroup, quotes } = useSelector((state: RootState) => state.appSlice);
	const dispatch = useDispatch<AppDispatch>();
	const formik = useFormik({
		initialValues: {
			groupId: selectedGroup?.id || "",
			quote: "",
			context: "",
			author: "",
			date: new Date(),
		},
		onSubmit: (values) => {
			console.log("submit!", values);
			const request: IAddQuoteRequest = {
				quote: values.quote,
				context: values.context,
				author: values.author,
				date: values.date.toString(),
				groupId: values.groupId,
			};
			dispatch(AppSliceActions.addQuote(request));
		},
	});

	const onClose = () => {
		dispatch(AppSliceActions.setCreateQuoteModalIsOpen(false));
	};

	const LABEL_PLACEMENT = "floating";

	console.log("values", formik.values);

	return (
		<IonModal isOpen={createQuoteModal.isOpen} presentingElement={props.presentingElement!} onDidDismiss={() => onClose()}>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Create Quote</IonTitle>
					<IonButtons slot="end">
						<IonButton onClick={() => onClose()}>Cancel</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<form onSubmit={formik.handleSubmit}>
					<IonList>
						<IonItem>
							<IonSelect
								name="groupId"
								aria-label="group"
								onIonChange={formik.handleChange}
								label={"In welke group hoort deze quote?"}
								justify="space-between"
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
						</IonItem>
						<IonItem>
							<IonInput
								name="quote"
								label="Wat is er gezegd?"
								labelPlacement={LABEL_PLACEMENT}
								onIonChange={formik.handleChange}
							></IonInput>
						</IonItem>
						<IonItem>
							<IonInput
								name="author"
								label="Door wie?"
								labelPlacement={LABEL_PLACEMENT}
								onIonChange={formik.handleChange}
							></IonInput>
						</IonItem>
						<IonItem>
							<IonInput
								name="date"
								label="Wanneer?"
								type="datetime-local"
								labelPlacement={LABEL_PLACEMENT}
								onIonChange={formik.handleChange}
							></IonInput>
						</IonItem>
						<IonItem>
							<IonInput
								name="context"
								label="Context"
								labelPlacement={LABEL_PLACEMENT}
								onIonChange={formik.handleChange}
							></IonInput>
						</IonItem>
					</IonList>

					<IonButton expand="block" type="submit">
						Add
					</IonButton>
				</form>
			</IonContent>
		</IonModal>
	);
};
