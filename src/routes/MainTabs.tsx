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
					<IonLabel>Home</IonLabel>
				</IonTabButton>

				<IonTabButton tab="create" href="/create">
					<IonIcon ios={addOutline} md={addSharp} />
					<IonLabel>Create</IonLabel>
				</IonTabButton>
			</IonTabBar>
		</IonTabs>
	);
};
