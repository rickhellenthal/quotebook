import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote } from "@ionic/react";

import { useLocation } from "react-router-dom";
import { settingsOutline, settingsSharp, peopleCircleOutline, peopleCircleSharp, homeOutline, homeSharp } from "ionicons/icons";
import "./Menu.css";
import { mockGroups } from "../mocks/mocks";

interface AppPage {
	url: string;
	iosIcon: string;
	mdIcon: string;
	title: string;
}

const appPages: AppPage[] = [
	{
		title: "Settings",
		url: "/settings",
		iosIcon: settingsOutline,
		mdIcon: settingsSharp,
	},
];

const Menu: React.FC = () => {
	const location = useLocation();

	return (
		<IonMenu contentId="main" type="overlay">
			<IonContent>
				<IonList id="inbox-list">
					<IonListHeader>Quotebook</IonListHeader>
					<IonNote>Rick Hellenthal</IonNote>
					{appPages.map((appPage, index) => {
						return (
							<IonMenuToggle key={index} autoHide={false}>
								<IonItem
									className={location.pathname === appPage.url ? "selected" : ""}
									routerLink={appPage.url}
									routerDirection="forward" // https://ionicframework.com/docs/api/nav to maybe go to forware
									lines="none"
									detail={false}
								>
									<IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
									<IonLabel>{appPage.title}</IonLabel>
								</IonItem>
							</IonMenuToggle>
						);
					})}
				</IonList>

				<IonList id="labels-list">
					<IonListHeader>Jouw groepen</IonListHeader>
					{mockGroups.map((group, index) => {
						return (
							<IonMenuToggle key={index} autoHide={false}>
								<IonItem
									className={location.pathname === `/groups/${group.id}` ? "selected" : ""}
									routerLink={`/groups/${group.id}`}
									routerDirection="forward"
									lines="none"
									detail={false}
								>
									<IonIcon aria-hidden="true" slot="start" ios={peopleCircleOutline} md={peopleCircleSharp} />
									<IonLabel>{group.name}</IonLabel>
								</IonItem>
							</IonMenuToggle>
						);
					})}
				</IonList>
			</IonContent>
		</IonMenu>
	);
};

export default Menu;
