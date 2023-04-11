import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonLabel } from "@ionic/react";
import { Page } from "../../components/page/Page";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/Store";

export const HomeRoute: React.FC = () => {
	const { appSlice } = useSelector((state: RootState) => state);
	const randomQuote = appSlice.quotes.data ? appSlice.quotes.data[Math.floor(Math.random() * appSlice.quotes.data.length)] : null;

	return (
		<Page title={"Home"}>
			<h1>Home</h1>

			{randomQuote && (
				<>
					<IonLabel>Quote of the day</IonLabel>
					<IonCard color="secondary">
						<IonCardHeader>
							<IonCardSubtitle>{randomQuote.quote}</IonCardSubtitle>
						</IonCardHeader>

						<IonCardContent>
							{randomQuote.author} in {randomQuote.group.name}
						</IonCardContent>
					</IonCard>
				</>
			)}
		</Page>
	);
};
