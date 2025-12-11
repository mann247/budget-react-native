import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // layout
  container: {
    flex: 1,
    backgroundColor: "#050509", // dark background
    paddingTop: 40,
    paddingHorizontal: 16,
  },

  header: {
    marginBottom: 12,
    alignItems: "center",
  },

  heading: {
    color: "#a7f3d0", // soft mint
    fontSize: 26,
    textAlign: "center",
    fontWeight: "700",
  },

  heading2: {
    color: "#e5e7eb",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
    marginTop: 4,
  },

  // card container for chart, form, list
  card: {
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 16,
    marginTop: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 8,
    borderWidth: 1,
    borderColor: "rgba(148,163,184,0.3)",
  },

  // row for buttons
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
  },

  // buttons
  primaryButton: {
    backgroundColor: "#22c55e",
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 28,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#22c55e",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.45,
    shadowRadius: 12,
    elevation: 6,
  },

  primaryButtonText: {
    color: "#f9fafb",
    fontSize: 16,
    fontWeight: "600",
  },

  secondaryButton: {
    backgroundColor: "#4b5563",
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  secondaryButtonText: {
    color: "#e5e7eb",
    fontSize: 14,
    fontWeight: "500",
  },

  deleteButton: {
    backgroundColor: "#ef4444",
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  deleteButtonText: {
    color: "#f9fafb",
    fontSize: 13,
    fontWeight: "600",
  },

  // form/inputs (add form)
  heading3: {
    color: "#6ee7b7",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 8,
    fontWeight: "600",
  },

  label: {
    color: "#e5e7eb",
    fontSize: 14,
    textAlign: "left",
    fontWeight: "600",
    marginLeft: 4,
    marginBottom: 4,
  },

  textInput: {
    borderRadius: 10,
    borderColor: "#4b5563",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 4,
    backgroundColor: "#020617",
    color: "#e5e7eb",
    fontSize: 14,
  },

  // expense list
  expenseTile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#020617",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#1f2937",
  },

  expenseTileText: {
    fontSize: 14,
    color: "#e5e7eb",
    width: "22%",
    textAlign: "center",
  },

  amountText: {
    color: "#6ee7b7",
    fontWeight: "600",
  },

  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  listHeaderText: {
    fontSize: 12,
    color: "#9ca3af",
    width: "22%",
    textAlign: "center",
    fontWeight: "600",
  },
});

export default styles;
