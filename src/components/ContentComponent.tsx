import {Text, ITextProps} from 'native-base'

interface ContentProps extends ITextProps {
    text: string
}

export default function ContentComponent({text, ...rest} : ContentProps) {
    return(
        <Text fontWeight="bold" color="gray.500" {...rest}>{text}</Text>
    )
}