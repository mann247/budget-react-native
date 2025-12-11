import { Alert, ScrollView, Text, View, TouchableOpacity } from "react-native";
import styles from "./style";

export default function ExpenseComponent({
  expenses,
  setExpenses,
  chartData,
  setChartData,
}) {
  return (
    <ScrollView style={{ marginBottom: 12 }}>
      {/* Optional header row */}
      {expenses.length > 0 && (
        <View style={styles.listHeader}>
          <Text style={styles.listHeaderText}>Name</Text>
          <Text style={styles.listHeaderText}>Category</Text>
          <Text style={styles.listHeaderText}>Amount</Text>
          <Text style={styles.listHeaderText}></Text>
        </View>
      )}

      {expenses.map((expense) => (
        <ExpenseListTile
          key={expense.id}
          expense={expense}
          chartData={chartData}
          expenses={expenses}
          setChartData={setChartData}
          setExpenses={setExpenses}
        />
      ))}

      {expenses.length === 0 && (
        <Text style={{ color: "#9ca3af", fontStyle: "italic" }}>
          No expenses yet. Tap “Add Expense” to begin.
        </Text>
      )}
    </ScrollView>
  );
}

const ExpenseListTile = ({
  expense,
  expenses,
  setExpenses,
  chartData,
  setChartData,
}) => {
  return (
    <View style={styles.expenseTile}>
      <Text style={styles.expenseTileText}>{expense.name}</Text>
      <Text style={styles.expenseTileText}>{expense.category}</Text>
      <Text style={[styles.expenseTileText, styles.amountText]}>
        ${expense.amount}
      </Text>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => {
          Alert.alert("Delete", "Are you sure you want to delete?", [
            {
              text: "Yes",
              onPress: () => {
                const newExpenses = expenses.filter(
                  (item) => item.id !== expense.id
                );
                setExpenses(newExpenses);

                const newChartData = [...chartData];
                const index2 = newChartData.findIndex(
                  (item) => item.name === expense.category
                );
                newChartData[index2].amount -= expense.amount;
                setChartData(newChartData);
              },
            },
            { text: "No", style: "cancel" },
          ]);
        }}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};



