import {
	IonTabs,
	IonTabBar,
	IonTabButton,
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonModal,
	IonAvatar,
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonImg,
	IonItem,
	IonList,
	IonTitle,
	IonToolbar,
	IonToast,
} from "@ionic/react";
import {
	addCircleOutline,
	addCircleSharp,
	homeOutline,
	homeSharp,
	personCircleOutline,
	personCircleSharp,
	statsChartOutline,
	statsChartSharp,
	chatboxEllipsesOutline,
	chatboxEllipsesSharp,
} from "ionicons/icons";
import { Redirect, Route } from "react-router";
import { GroupRoute } from "./groupRoute/GroupRoute";
import { HomeRoute } from "./homeRoute/HomeRoute";
import { SettingsRoute } from "./settingsRoute/SettingsRoute";
import { QuotesRoute } from "./quotesRoute/QuotesRoute";
import { InsightsRoute } from "./insightsRoute/InsightsRoute";
import { useEffect, useRef, useState } from "react";
import { AppSliceActions } from "../stores/appSlice/AppReducer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../stores/Store";
import { GroupSwitcherModal } from "../components/modals/GroupSwitcher";
import { CreateQuoteModal } from "../components/modals/CreateQuoteModal";

export const MainTabs = () => {
	const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);
	const { appSlice } = useSelector((state: RootState) => state);
	const dispatch = useDispatch<AppDispatch>();
	const page = useRef(null);

	useEffect(() => {
		dispatch(AppSliceActions.fetchGroups());
		setPresentingElement(page.current);
	}, []);

	useEffect(() => {
		if (appSlice.selectedGroup?.id) {
			dispatch(AppSliceActions.fetchQuotes(appSlice.selectedGroup.id));
		}
	}, [, appSlice.selectedGroup?.id]);

	return (
		<>
			<IonTabs>
				<IonRouterOutlet>
					<Route path="/" exact={true}>
						<Redirect to="/home" />
					</Route>

					{/* Tab routes */}
					<Route path="/home" exact={true}>
						<HomeRoute />
					</Route>
					<Route path="/quotes" exact={true}>
						<QuotesRoute />
					</Route>
					<Route path="/insights" exact={true}>
						<InsightsRoute />
					</Route>

					{/* Menu routes */}
					<Route path="/account" exact={true}>
						<SettingsRoute />
					</Route>
					<Route path="/groups/:id" exact={true}>
						<GroupRoute />
					</Route>
				</IonRouterOutlet>
				<IonTabBar slot="bottom">
					<IonTabButton tab="home" href="/home">
						<IonIcon ios={homeOutline} md={homeSharp} />
						<IonLabel>Dashboard</IonLabel>
					</IonTabButton>

					<IonTabButton tab="quotes" href="/quotes">
						<IonIcon ios={chatboxEllipsesOutline} md={chatboxEllipsesSharp} />
						<IonLabel>Quotes</IonLabel>
					</IonTabButton>

					<IonTabButton tab="create" onClick={() => dispatch(AppSliceActions.setCreateQuoteModalIsOpen(true))}>
						<IonIcon ios={addCircleOutline} md={addCircleSharp} />
					</IonTabButton>

					<IonTabButton tab="insights" href="/insights">
						<IonIcon ios={statsChartOutline} md={statsChartSharp} />
						<IonLabel>Insights</IonLabel>
					</IonTabButton>

					<IonTabButton tab="account" href="/account">
						<IonIcon ios={personCircleOutline} md={personCircleSharp} />
						<IonLabel>Profile</IonLabel>
					</IonTabButton>
				</IonTabBar>
			</IonTabs>

			{appSlice.groupSwitcherModal.isOpen && <GroupSwitcherModal presentingElement={presentingElement} />}
			{appSlice.createQuoteModal.isOpen && <CreateQuoteModal presentingElement={presentingElement} />}
		</>
	);
};
