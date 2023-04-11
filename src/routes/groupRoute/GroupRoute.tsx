import { useParams } from "react-router";
import { mockGroups } from "../../mocks/mocks";
import { Page } from "../../components/page/Page";

export const GroupRoute: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const group = mockGroups.filter((x) => x.id === id)[0];

	return (
		<Page title={group?.name || id} backButton>
			Group content
		</Page>
	);
};
