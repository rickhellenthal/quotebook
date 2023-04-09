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
} from "@ionic/react";
import {
	playCircle,
	radio,
	library,
	search,
	addCircleOutline,
	addCircleSharp,
	homeOutline,
	homeSharp,
	addOutline,
	addSharp,
	chatboxOutline,
	chatboxSharp,
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
import { CreateRoute } from "./createRoute/CreateRoute";
import { QuotesRoute } from "./quotesRoute/QuotesRoute";
import { InsightsRoute } from "./insightsRoute/InsightsRoute";
import { useEffect, useRef, useState } from "react";
import { mockGroups } from "../mocks/mocks";
import { IGroup } from "../interfaces/IGroup";
import { AppSliceActions, appSlice } from "../stores/appSlice/AppReducer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../stores/Store";

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
		if (appSlice.group?.id) {
			dispatch(AppSliceActions.fetchQuotes(appSlice.group.id));
		}
	}, [, appSlice.group?.id]);

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
					<Route path="/create" exact={true}>
						<CreateRoute />
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

					<IonTabButton tab="create" href="/create">
						<IonIcon ios={addCircleOutline} md={addCircleSharp} />
					</IonTabButton>

					<IonTabButton tab="insights" href="/insights">
						<IonIcon ios={statsChartOutline} md={statsChartSharp} />
						<IonLabel>Insights</IonLabel>
					</IonTabButton>

					<IonTabButton tab="account" href="/account">
						<IonIcon ios={personCircleOutline} md={personCircleSharp} />
						<IonLabel>Account</IonLabel>
					</IonTabButton>
				</IonTabBar>
			</IonTabs>

			<IonModal isOpen={appSlice.groupSwitcher.isOpen} presentingElement={presentingElement!}>
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
		</>
	);
};
