import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { Page } from "../../components/page/Page";
import { addOutline } from "ionicons/icons";
import { mockQuotes } from "../../mocks/mocks";

export const HomeRoute: React.FC = () => {
	const quotes = mockQuotes;

	return (
		<Page title={"Home"}>
			{quotes.map((quote) => (
				<IonCard key={quote.id}>
					<IonCardHeader>
						<IonCardSubtitle>{quote.quote}</IonCardSubtitle>
						{/* <IonCardTitle>{quote.date.toISOString()}</IonCardTitle> */}
					</IonCardHeader>
					<IonCardContent>
						{quote.author} in {quote.group.name}
					</IonCardContent>
				</IonCard>
			))}
		</Page>
	);
};
