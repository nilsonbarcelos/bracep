
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainPage from './MainPage'
import Tabs from './Tabs'

const Page = createNativeStackNavigator()

export default function Routes(){
    return(
        <NavigationContainer>
            <Page.Navigator>
                <Page.Screen name='MainPage' component={MainPage} 
                options={{
                    headerShown:false
                }}/>
                <Page.Screen name='Tabs' component={Tabs}
                options={{
                    headerShown: false
                }}/>
            </Page.Navigator>
        </NavigationContainer>
    )
}