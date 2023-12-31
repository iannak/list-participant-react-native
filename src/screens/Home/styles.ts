import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#686B68",
    fontSize: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "#1F1E25",
    height: 56,
    borderRadius: 5,
    padding: 16,
    color: "#FDFCFE",
    fontSize: 16,
    marginRight: 12,
  },
  buttonText: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  emptyText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  emptyContainer: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
