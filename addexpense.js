import { Picker } from "@react-native-picker/picker";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import styles from "./style";

export default function Addform({
  name,
  setName,
  amount,
  setAmount,
  category,
  setCategory,
  categories,
  setExpenses,
  expenses,
  chartData,
  setChartData,
  setAddForm,
}) {
  return (
    <View>
      <Text style={styles.heading3}>Add Expense</Text>

      {/* Expense name */}
      <Text style={styles.label}>Expense Name</Text>
      <TextInput
        onChangeText={(value) => setName(value)}
        value={name}
        style={styles.textInput}
        placeholder="Enter the expense name"
        placeholderTextColor="#6b7280"
      />

      {/* Amount */}
      <Text style={styles.label}>Amount</Text>
      <TextInput
        keyboardType="numeric"
        onChangeText={(value) => {
          const numeric = value.replace(/[^0-9]/g, "");
          setAmount(numeric);
        }}
        value={amount}
        style={styles.textInput}
        placeholder="Amount"
        placeholderTextColor="#6b7280"
      />

      {/* Category */}
      <Text style={styles.label}>Category</Text>
      <Picker
        style={styles.textInput}
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
        dropdownIconColor="#e5e7eb"
      >
        {categories.map((cat, index) => (
          <Picker.Item key={index} label={cat} value={cat} color="#ffffff" />
        ))}
      </Picker>

      {/* Buttons */}
      <View style={[styles.row, { gap: 12 }]}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => {
            const amountNumber = parseInt(amount);
            if (amountNumber <= 0 || name === "") {
              alert("Please enter a valid amount and name");
              return;
            }

            setExpenses([
              ...expenses,
              {
                id: new Date().getTime(),
                category,
                name,
                amount: amountNumber,
              },
            ]);

            const newChartData = [...chartData];
            const index = newChartData.findIndex(
              (item) => item.name === category
            );
            newChartData[index].amount += amountNumber;
            setChartData(newChartData);

            setAddForm(false);
            setName("");
            setAmount("");
            setCategory("Food");
          }}
        >
          <Text style={styles.primaryButtonText}>Add Expense</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => setAddForm(false)}
        >
          <Text style={styles.secondaryButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}