import { FormControl, VStack, Text, Input, ITextProps } from 'native-base'
import IconComponent from '../components/IconComponent'
import TitleComponent from '../components/TitleComponent'
import ButtonComponent from '../components/ButtonComponent'
import { useState } from 'react'
import { getZipCode } from '../service/zipcode/zipCodeService'

type zip = {
    cep?: number;
    logradouro?: string;
    bairro?: string;
    localidade?: string;
    uf?: string
  }


export default function ZipPage() {     
    const [zipValue, setZipValue] = useState('')
    const [zipResponse, setZipResponse] = useState<null | zip>({});
    const [showZipError, setShowZipError] = useState(false)
    const [msgError, setMsgError] = useState('')
    const [invalidNumber, setInvalidNumber] = useState(false)

    function validateZipValue(){
        var zipCodeNumber: number = +zipValue;
        return zipValue.length == 8 || !Number.isNaN(zipCodeNumber)
    }

    async function validateZipCode(){
        setShowZipError(false)
        if(!validateZipValue()){
            setShowZipError(true)
            setZipResponse({})
            setMsgError('Not a valid zipcode!')
        } else {
            const result = await getZipCode(zipValue)
            if (result == 'error'){
                setShowZipError(true)
                setMsgError('Service not available')
            } 
            setZipResponse(result)
            setZipValue('')
        }
    }

    function cleanSearch() {
        setShowZipError(false)
        setZipResponse({})
        setZipValue('')
    }

    return (
        <VStack flex={1} alignItems="center" mt={5}>
            <IconComponent size={100} />
            <TitleComponent title='Zipcode Validator' mb={3} />

            <VStack p={2}>
                <FormControl mb={5}>
                    <Input placeholder='Type your zipcode'
                        borderRadius='lg'
                        size='lg'
                        w='100%'
                        backgroundColor='gray.100'
                        shadow={3}
                        value={zipValue}
                        onChangeText={ e => setZipValue(e)}
                    />
                </FormControl>
                <ButtonComponent label='Validate' bg='blue.600' onPress={() => validateZipCode()} />

                { zipResponse.cep &&
                <>
                <VStack  bg='blue.300' borderRadius="lg" shadow={2} p={5} mt={5}>
                        <Text>ZIPCODE: {zipResponse.cep}</Text>
                        <Text>Street: {zipResponse.logradouro}</Text>
                        <Text>Neighborhood: {zipResponse.bairro}</Text>
                        <Text>City: {zipResponse.localidade}</Text>
                        <Text>State: {zipResponse.uf}</Text>
                    </VStack>
                <ButtonComponent label='Clean search' bg='gray.400' onPress={() => cleanSearch()} mt={5}/>
                </>
                    
                }
                { showZipError && 
                <>
                <VStack  bg='red.500' borderRadius="lg" shadow={2} p={5} mt={5}>
                    <Text>{msgError}</Text>  
                </VStack>
                    <ButtonComponent label='Clean search' bg='gray.400' onPress={() => cleanSearch()} mt={5}/>        
                </>
                    
                }
                
            </VStack>
        </VStack>

    )
}