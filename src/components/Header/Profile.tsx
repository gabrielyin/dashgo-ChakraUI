import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex
            align='center'
        >
            <Box mr='4' textAlign='right'>
                <Text>
                    Gabriel Yin
                </Text>
                <Text
                    color='gray.300'
                    fontSize='small'
                >
                    2021gabrielyin@gmail.com
                </Text>
            </Box>

            <Avatar size='md' name='Gabriel Yin' src='https://github.com/gabrielyin.png' />
        </Flex>
    )
}