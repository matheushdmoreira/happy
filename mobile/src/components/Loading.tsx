import { ActivityIndicator, View, StyleSheet } from 'react-native'

export function Loading() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator color="#15c3d6" />
    </View>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
