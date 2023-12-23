import { StyleSheet } from "react-native";
import { COLORS } from "./../../utils/constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
  },
  errorText: {
    fontWeight: "400",
    fontSize: 14,
    marginTop: 20,
  },
  reloadButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  reloadButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
