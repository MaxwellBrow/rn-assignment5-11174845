//screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const transactions = [
  { id: '1', title: 'Apple Store', category: 'Entertainment', amount: '- $5.99' },
  { id: '2', title: 'Spotify', category: 'Music', amount: '- $12.99' },
  { id: '3', title: 'Money Transfer', category: 'Transaction', amount: '$300' },
  { id: '4', title: 'Grocery', category: 'Transaction', amount: '- $88' },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.profileImage} source={require('../assests/images/profile.png')} />
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.userName}>Maxwell Annor</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardNumber}>4562 1122 4595 7852</Text>
        <Text style={styles.cardDetails}>AR Jonson</Text>
        <Text style={styles.cardDetails}>Exp: 24/2000 CVV: 6986</Text>
      </View>
      <FlatList
        data={transactions}clear
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <Text>{item.title}</Text>
            <Text>{item.category}</Text>
            <Text>{item.amount}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  profileImage: { width: 50, height: 50, borderRadius: 25 },
  welcomeText: { fontSize: 16, marginLeft: 10 },
  userName: { fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
  card: { backgroundColor: '#333', padding: 20, borderRadius: 10, marginBottom: 20 },
  cardNumber: { fontSize: 18, color: '#fff', marginBottom: 10 },
  cardDetails: { fontSize: 14, color: '#fff' },
  transaction: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' },
});

export default HomeScreen;