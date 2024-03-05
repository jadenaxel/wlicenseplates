import type { FC } from "react";

import { StyleSheet } from "react-native";

import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";

import Filter from "@/assets/images/icons/filter.svg";
import { Color } from "@/config";

interface Props {
	isFilter?: string;
	setIsFilter: any;
}

const Popup: FC<Props> = (props: Props): JSX.Element => {
	const { setIsFilter } = props;

	return (
		<MenuProvider style={styles.container}>
			<Menu>
				<MenuTrigger
					customStyles={{
						triggerWrapper: {
							top: -20,
						},
					}}
				>
					<Filter />
				</MenuTrigger>
				<MenuOptions optionsContainerStyle={{ backgroundColor: Color.gray }}>
					<MenuOption style={styles.other} onSelect={() => setIsFilter("Random")} text="Z-A" />
					<MenuOption style={styles.name} onSelect={() => setIsFilter("Name")} text="A-Z" />
				</MenuOptions>
			</Menu>
		</MenuProvider>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: "flex-end",
		justifyContent: "center",
		borderEndStartRadius: 6,
	},
	other: {
		borderBottomColor: Color.black,
		borderBottomWidth: 0.5,
	},
	name: {},
});

export default Popup;
