import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ZipPage from './ZipPage'
import AboutPage from './AboutPage'

const Tab = createBottomTabNavigator()

const tabs = [
    {
        name: 'Zip Validator',
        component: ZipPage,
        icon: 'navigate'
    },
    {
        name: 'About BraCep',
        component: AboutPage,
        icon: 'reorder-three'
    }
]

const screenOptions = {
    tabBarStyle:{
        backgroundColor: "#002851",
        paddingTop: 5,
        paddingBottom: 5 
    },
    tabBarActiveTintColor: "#339cff",
    tabBarInactiveTintColor: "#FFF"
}

export default function Tabs(){
    return(
        <Tab.Navigator screenOptions={screenOptions}>
            {tabs.map(tab => {
                return (<Tab.Screen name={tab.name} component={tab.component} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size}) => (
                        <Ionicons name={tab.icon} color={color}  size={size}/>
                    )
                }} key={tab.name}/>)
            })}
        </Tab.Navigator>
    )
}