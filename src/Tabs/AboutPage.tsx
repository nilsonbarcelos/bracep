import { VStack } from 'native-base'
import IconComponent from '../components/IconComponent'
import TitleComponent from '../components/TitleComponent'
import ContentComponent from '../components/ContentComponent'

export default function AboutPage(){
    return(
        <VStack flex={1} alignItems="center" mt={5}>
            <IconComponent size={100}/>
            <TitleComponent title='About BraCep'mb={3}/>

            <VStack p={2}>
                <ContentComponent mb={3} text='BraCep is a simple React Native application created to practice some 
                    development concepts such as the listed below:'/>
                
                <VStack>
                    <ContentComponent mb={2} text='- React app with Expo'/>
                    <ContentComponent mb={2} text='- Native Base framework for page layout'/>
                    <ContentComponent mb={2} text='- React Navigation with Stack'/>
                    <ContentComponent mb={2} text='- React Navigation with bottom Tabs'/>
                    <ContentComponent mb={2} text='- Best practice using components'/>
                    <ContentComponent mb={2} text='- Interactive component using rest service'/>
                </VStack>
            </VStack>
        </VStack>
    )
}