import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle } from "@ionic/react";
import { Page } from "../../components/page/Page";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../stores/Store";
import { GroupToolbar } from "../../components/toolbar";

export const QuotesRoute: React.FC = () => {
	const { appSlice } = useSelector((state: RootState) => state);
	const dispatch = useDispatch();
	return (
		<Page title={"Quotes"} toolbar={<GroupToolbar groupName={appSlice.selectedGroup?.name} />}>
			{appSlice.quotes.data.map((quote) => (
				<IonCard key={quote.id}>
					<IonCardHeader>
						<IonCardSubtitle>{quote.quote}</IonCardSubtitle>
					</IonCardHeader>
					<IonCardContent>
						{quote.author} in {quote.group.name}
					</IonCardContent>
				</IonCard>
			))}
		</Page>
	);
};
