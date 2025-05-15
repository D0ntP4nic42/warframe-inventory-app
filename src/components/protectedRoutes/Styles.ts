import { StyleSheet } from 'react-native';
import colors from '@/components/utils/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    topBar: {
      height: 60,
      backgroundColor: colors.secondary,
      paddingHorizontal: 16,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    
    topBarText: {
      color: colors.primary, 
      fontSize: 20,
      fontWeight: "bold",
    },
    topBarImage: {
      width: 40,
      height: 40,
    },
    content: {
      flex: 1,
    },
    bottomBar: {
      flexDirection: "row",
      height: 60,
      borderTopWidth: 1,
      borderTopColor: colors.surface,
      backgroundColor: colors.secondary,
    },
    bottomBarButton: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    bottomBarText: {
      color: colors.background,
    },
    activeButton: {
      borderTopWidth: 3,
      borderTopColor: colors.primary,
    },
  });

export default styles;
  