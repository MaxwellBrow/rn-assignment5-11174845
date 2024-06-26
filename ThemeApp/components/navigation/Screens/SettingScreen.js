//screens/SettingsScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { ThemeContext } from '../Screens/Theme';

const SettingsScreen = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, isDarkTheme ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.text, isDarkTheme ? styles.darkText : styles.lightText]}>Settings</Text>
      <View style={styles.settingItem}>
        <Text style={[styles.text, isDarkTheme ? styles.darkText : styles.lightText]}>Theme</Text>
        <Switch value={isDarkTheme} onValueChange={toggleTheme} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  settingItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 },
  text: { fontSize: 16 },
  darkContainer: { backgroundColor: '#333' },
  lightContainer: { backgroundColor: '#fff' },
  darkText: { color: '#fff' },
  lightText: { color: '#000' },
});

export default SettingsScreen;