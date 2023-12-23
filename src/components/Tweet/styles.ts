import { COLORS } from "../../utils/constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 12,
    borderBottomWidth: 1,
    borderBlockColor: COLORS.exexlight_gray,
  },
  content: {
    flexDirection: "row",
  },
  body: {
    marginLeft: 10,
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  username: {
    fontSize: 16,
    fontWeight: "500",
  },
  userTagName: {
    paddingLeft: 5,
    color: COLORS.dark_gray,
  },
  dot: {
    backgroundColor: COLORS.dark_gray,
    marginHorizontal: 4,
    width: 1.5,
    height: 1.5,
    borderRadius: 3,
  },
  time: {
    color: COLORS.dark_gray,
  },
  msg: {
    flex: 1,
  },
});
