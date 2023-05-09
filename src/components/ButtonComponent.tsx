import { Button, ITextProps } from 'native-base'

interface ButtonProps extends ITextProps {
    label: string
}

export default function ButtonComponent({label, ...rest} : ButtonProps){
    return (
        <Button {...rest} >{label}</Button>
    )
}