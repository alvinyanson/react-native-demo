import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface UpdateEntry {
  id: string;
  version: string;
  branch: string;
  channel?: string;
  title: string;
  description: string[];
  timestamp: string;
  isCurrent?: boolean;
  type?: 'initial' | 'feature' | 'hotfix' | 'release';
}

interface UpdateCardProps {
  entry: UpdateEntry;
}

export function UpdateCard({ entry }: UpdateCardProps) {
  const isCurrent = entry.isCurrent;

  return (
    <View style={[styles.card, isCurrent && styles.cardCurrent]}>
      {/* Top row: Version & Branch badges */}
      <View style={styles.badgeRow}>
        <View style={[styles.versionBadge, isCurrent && styles.versionBadgeCurrent]}>
          <Text style={[styles.versionText, isCurrent && styles.versionTextCurrent]}>
            {entry.version}
          </Text>
        </View>

        <View style={styles.branchBadge}>
          <Text style={styles.branchIcon}>🌿</Text>
          <Text style={styles.branchText}>{entry.branch}</Text>
        </View>

        {isCurrent && (
          <View style={styles.activePill}>
            <View style={styles.activeDot} />
            <Text style={styles.activeText}>ACTIVE</Text>
          </View>
        )}
      </View>

      {/* Title */}
      <Text style={styles.title}>{entry.title}</Text>

      {/* Timestamp / Channel metadata */}
      <View style={styles.metaRow}>
        <Text style={styles.metaText}>🕒 {entry.timestamp}</Text>
        {entry.channel && (
          <Text style={styles.metaText}>📡 Channel: {entry.channel}</Text>
        )}
      </View>

      {/* Changes list */}
      <View style={styles.changesList}>
        {entry.description.map((change, index) => (
          <View key={index} style={styles.changeItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.changeText}>{change}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardCurrent: {
    borderColor: '#3B82F6',
    borderWidth: 2,
    backgroundColor: '#F8FAFC',
    shadowColor: '#3B82F6',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  versionBadge: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  versionBadgeCurrent: {
    backgroundColor: '#3B82F6',
  },
  versionText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#475569',
  },
  versionTextCurrent: {
    color: '#FFFFFF',
  },
  branchBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
  },
  branchIcon: {
    fontSize: 12,
  },
  branchText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4F46E5',
    fontFamily: 'monospace',
  },
  activePill: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 5,
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#16A34A',
  },
  activeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#15803D',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 6,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
  },
  metaText: {
    fontSize: 12,
    color: '#64748B',
  },
  changesList: {
    backgroundColor: '#F8FAFC',
    borderRadius: 10,
    padding: 10,
    gap: 6,
  },
  changeItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
  },
  bullet: {
    fontSize: 14,
    color: '#3B82F6',
    fontWeight: 'bold',
    lineHeight: 20,
  },
  changeText: {
    fontSize: 13,
    color: '#334155',
    flex: 1,
    lineHeight: 20,
  },
});
