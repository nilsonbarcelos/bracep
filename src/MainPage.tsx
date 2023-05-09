import { VStack, Text, Button } from 'native-base'
import IconComponent from './components/IconComponent'
import TitleComponent from './components/TitleComponent'
import ButtonComponent from './components/ButtonComponent'
import ContentComponent from './components/ContentComponent'

export default function MainPage({ navigation }) {
    return (
        <VStack m={5} flex={1} justifyContent='center'>
            <VStack alignItems='center' mb={5}>
                <IconComponent size={150} />
                <TitleComponent title='BraCep' fontSize='7xl' color='yellow.500' />
                <ContentComponent text='Brazilian zipcode validator' />
            </VStack>
            <ButtonComponent onPress={() => navigation.navigate('Tabs')}
                bg='blue.600'
                label='Access' />
        </VStack>
    )
}