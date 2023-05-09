import { ITextProps } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'

interface IconProps extends ITextProps {
    size ?: number
}

export default function IconComponent({size}: IconProps){
    return(
        <Ionicons name="map" color="green" size={size} />
    )
}