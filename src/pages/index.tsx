import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { useForm } from 'react-hook-form';

export default function SignIn() {
  const { register, handleSubmit } = useForm();

  function handleSignin() {

  }

  return (
    <Flex
      w='100vw'
      h='100vh'
      alignItems='center'
      justifyContent='center'
    >
      <Flex
        as='form'
        w='100%'
        maxW={360}
        bg='gray.800'
        p='8'
        borderRadius={8}
        flexDir='column'
      >
        <Stack
          spacing='4'
        >
          <Input
            name='email'
            type='email'
            label='E-mail'
          />
          <Input
            name='password'
            type='password'
            label='Senha'
          />
        </Stack>
        <Button type='submit' mt='6' colorScheme='pink' size='lg'>Entrar</Button>
      </Flex>
    </Flex>
  )
}
