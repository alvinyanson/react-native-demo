import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { UpdateCard, type UpdateEntry } from './components/UpdateCard';

// To add a new update in subsequent steps/branches, simply prepend a new entry to this array!
const UPDATE_HISTORY: UpdateEntry[] = [
  {
    id: 'update-1',
    version: 'Update #1',
    branch: 'main',
    channel: 'development',
    title: 'Baseline Project Setup',
    description: [
      'Scaffolded clean Expo SDK 57 app',
      'Configured expo-dev-client and deep-linking scheme',
      'Created reusable Update Showcase Card component',
    ],
    timestamp: 'Initial Setup',
    isCurrent: true,
  },
];

export default function App() {
  const currentUpdate = UPDATE_HISTORY.find((u) => u.isCurrent) ?? UPDATE_HISTORY[0];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.logoTag}>
            <Text style={styles.logoTagText}>🚀 EAS DEMO</Text>
          </View>
          <Text style={styles.headerTitle}>Update Showcase</Text>
          <Text style={styles.headerSubtitle}>
            Track Over-The-Air updates and PR previews visually across branches.
          </Text>
        </View>

        {/* Status Callout Banner */}
        <View style={styles.statusCallout}>
          <Text style={styles.statusCalloutLabel}>Currently Displaying:</Text>
          <Text style={styles.statusCalloutValue}>
            {currentUpdate.version} • Branch: {currentUpdate.branch}
          </Text>
        </View>

        {/* Section Label */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>CHANGELOG & TIMELINE</Text>
          <Text style={styles.countBadge}>{UPDATE_HISTORY.length}</Text>
        </View>

        {/* List of Update Cards */}
        {UPDATE_HISTORY.map((entry) => (
          <UpdateCard key={entry.id} entry={entry} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingTop: 32,
    paddingBottom: 48,
  },
  header: {
    marginBottom: 20,
  },
  logoTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#EEF2FF',
    borderWidth: 1,
    borderColor: '#C7D2FE',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 10,
  },
  logoTagText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#4F46E5',
    letterSpacing: 0.5,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },
  statusCallout: {
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#BFDBFE',
    borderRadius: 12,
    padding: 12,
    marginBottom: 24,
  },
  statusCalloutLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#3B82F6',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  statusCalloutValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E40AF',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#94A3B8',
    letterSpacing: 0.8,
  },
  countBadge: {
    backgroundColor: '#E2E8F0',
    color: '#475569',
    fontSize: 11,
    fontWeight: '700',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
