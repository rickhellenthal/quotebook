import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import { Page } from "../../components/page/Page";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/Store";
import { GroupToolbar } from "../../components/toolbar";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { informationOutline, informationCircleSharp, chatbox, peopleCircle, time } from "ionicons/icons";

const data = [
	{
		name: "Page A",
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Page B",
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "Page C",
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "Page D",
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "Page E",
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: "Page F",
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "Page G",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];
export const InsightsRoute: React.FC = () => {
	const { appSlice: groupSlice } = useSelector((state: RootState) => state);

	return (
		<Page title={"Insights"} toolbar={<GroupToolbar groupName={groupSlice.selectedGroup?.name} />}>
			<IonList inset>
				<IonItem>
					<IonIcon slot="start" size="medium" icon={peopleCircle} />
					<IonLabel>Aantal leden</IonLabel>
					<IonLabel slot="end">6</IonLabel>
				</IonItem>
				<IonItem>
					<IonIcon slot="start" size="medium" icon={chatbox} />
					<IonLabel>Aantal quotes</IonLabel>
					<IonLabel slot="end">56</IonLabel>
				</IonItem>
				<IonItem>
					<IonIcon slot="start" size="medium" icon={time} />
					<IonLabel>Actief sinds</IonLabel>
					<IonLabel slot="end">03/11/2022</IonLabel>
				</IonItem>
			</IonList>

			<IonCard>
				<IonCardContent>
					<ResponsiveContainer width="100%" height={200}>
						<LineChart
							title="Willekeurige data"
							data={data}
							margin={{
								top: 5,
								right: 20,
								left: -5,
								bottom: 5,
							}}
						>
							{/* <CartesianGrid strokeDasharray="3 3" /> */}
							<XAxis dataKey="name" />
							<YAxis />

							<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
							<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
						</LineChart>
					</ResponsiveContainer>
				</IonCardContent>
			</IonCard>
		</Page>
	);
};
