import React, {useState} from 'react'
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import {WebView} from 'react-native-webview'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const [isLoaded, setLoaded] = useState(false)

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <WebView
        source={{
          uri: 'https://www.set.or.th/project/caltools/www/html/tax/index.html',
        }}
        style={{flex: 1}}
        onLoadEnd={() => setLoaded(true)}
      />
      {isLoaded && (
        <Text style={{textAlign: 'center', backgroundColor: 'white'}}>
          ข้อมูลโดย www.set.or.th
        </Text>
      )}
    </SafeAreaView>
  )
}

export default App
