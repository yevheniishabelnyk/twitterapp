import { COLORS } from "../../utils/constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  inputWrap: {
    width: "100%",
  },
  input: {
    height: 40,
    borderColor: COLORS.light_gray,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "100%",
  },
  inputErrorBorder: {
    borderColor: "red",
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  errorText: {
    position: "absolute",
    bottom: 3,
    color: "red",
    fontSize: 12,
  },
});
