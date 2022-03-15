import { StyleSheet } from 'react-native'

const COLORS = {primary: '#1f145c', white: '#fff'};

export const styles = StyleSheet.create({
    inputContainer: {
      height: 50,
      paddingHorizontal: 20,
      elevation: 40,
      backgroundColor: COLORS.white,
      flex: 1,
      marginVertical: 20,
      marginRight: 20,
      borderRadius: 30,
    },
    iconContainer: {
      height: 50,
      width: 50,
      backgroundColor: COLORS.primary,
      elevation: 40,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
});