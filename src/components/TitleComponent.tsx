import { VStack, Text, ITextProps } from 'native-base'

interface TitleComponentProps extends ITextProps {
    title: string
}

export default function TitleComponent({title, ...rest} : TitleComponentProps){
    return (
        <VStack>
            <Text fontSize="2xl" 
                fontWeight="bold" 
                color="gray.500" 
                textAlign="center" 
                {...rest}
            >{title}</Text>
        </VStack>
    )
}