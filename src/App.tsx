import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { MainTabs } from "./routes/MainTabs";

import { Provider } from "react-redux";
import { store } from "./stores/Store";

setupIonicReact();

export const App: React.FC = () => {
	return (
		<IonApp>
			<Provider store={store}>
				<IonReactRouter>
					<IonSplitPane contentId="main">
						<IonRouterOutlet id="main">
							<MainTabs />
						</IonRouterOutlet>
					</IonSplitPane>
				</IonReactRouter>
			</Provider>
		</IonApp>
	);
};
