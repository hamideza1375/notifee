import React from 'react';
import {Button,SafeAreaView,StyleSheet} from 'react-native';
import { useNotification } from './src/hooks/useNotification';

const App = () => {
  const {displayNotification,cancelAllNotifications,cancelNotification} = useNotification();

  return (
    <SafeAreaView style={styles.container}>
        <Button title="Display Notification" onPress={()=>displayNotification('NotificationTitle1', 'NotificationBody2')} />
        <Button title="Cancel All Notifications" onPress={cancelAllNotifications} />
        <Button title="Cancel All id" onPress={()=>cancelNotification('del')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
