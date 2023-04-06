import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from "@ionic/react";
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

export const MainTabs = () => {
	return (
		<IonTabs>
			<IonRouterOutlet>
				<Route path="/" exact={true}>
					<Redirect to="/home" />
				</Route>

				{/* Tab routes */}
				<Route path="/home" exact={true}>
					<HomeRoute />
				</Route>
				<Route path="/create" exact={true}>
					<CreateRoute />
				</Route>

				{/* Menu routes */}
				<Route path="/settings" exact={true}>
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
	);
};
