import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { PieChart } from "react-native-chart-kit";
import styles from "./style";
import Addform from "./addexpense";
import ExpenseComponent from "./expenseComponent";

export default function App() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [expenses, setExpenses] = useState([]);
  const categories = ["Food", "Clothes", "Bills", "Others"];
  const [addForm, setAddForm] = useState(false);

  const addExpense = () => {
    setAddForm(true);
  };

  const [chartData, setChartData] = useState([
    {
      name: "Food",
      amount: 0,
      color: "#e62d20",
      legendFontColor: "#e5e7eb",
      legendFontSize: 15,
    },
    {
      name: "Clothes",
      amount: 0,
      color: "#27e620",
      legendFontColor: "#e5e7eb",
      legendFontSize: 15,
    },
    {
      name: "Bills",
      amount: 0,
      color: "#1c6bd9",
      legendFontColor: "#e5e7eb",
      legendFontSize: 15,
    },
    {
      name: "Others",
      amount: 0,
      color: "#5adbac",
      legendFontColor: "#e5e7eb",
      legendFontSize: 15,
    },
  ]);

  return (
  <SafeAreaView style={styles.container}>
    <StatusBar style="light" />

    <ScrollView
      contentContainerStyle={{ paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>Monthly Budget Tracker</Text>
        <Text style={styles.heading2}>For 2026</Text>
      </View>

      {/* Chart Card */}
      <View style={styles.card}>
        <PieChart
          data={chartData}
          width={300}
          height={200}
          chartConfig={{
            backgroundGradientFrom: "#020617",
            backgroundGradientTo: "#020617",
            color: (opacity = 1) => `rgba(34, 197, 94, ${opacity})`,
            labelColor: () => "#e5e7eb",
          }}
          accessor="amount"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>

      {/* Form or Add button */}
      {addForm ? (
        <View style={styles.card}>
          <Addform
            name={name}
            setName={setName}
            amount={amount}
            setAmount={setAmount}
            category={category}
            setCategory={setCategory}
            categories={categories}
            setExpenses={setExpenses}
            expenses={expenses}
            chartData={chartData}
            setChartData={setChartData}
            setAddForm={setAddForm}
          />
        </View>
      ) : (
        <View style={styles.row}>
          <TouchableOpacity style={styles.primaryButton} onPress={addExpense}>
            <Text style={styles.primaryButtonText}>Add Expense</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Expense list */}
      <View style={styles.card}>
        <ExpenseComponent
          expenses={expenses}
          setExpenses={setExpenses}
          chartData={chartData}
          setChartData={setChartData}
        />
      </View>
    </ScrollView>
  </SafeAreaView>
  );
}

