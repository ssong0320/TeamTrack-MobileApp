import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Calendar } from 'react-native-calendars';

function CustomCalendar(props) {
  return (
    <Calendar
      initialDate="2022-12-01"
      minDate="2022-12-01"
      maxDate="2023-01-30"
      disableAllTouchEventsForDisabledDays={true}
      {...props}
    />
  );
}

function App() {
  const marked = {
    '2022-12-10': { marked: true },
    '2022-12-12': { selected: true }
  };
  return (
    <SafeAreaView style={styles.container}>
      <CustomCalendar onDayPress={(day) => console.log(`Date pressed: ${day.dateString}`)} />
      <Agenda
        selected="2022-12-01"
        items={{
          '2022-12-01': [{name: 'Cycling'}, {name: 'Walking'}, {name: 'Running'}],
          '2022-12-02': [{name: 'Writing'}]
        }}
        renderItem={(item, isFirst) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
