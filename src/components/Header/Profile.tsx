import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {


    return (
        <Flex
            align='center'
        >
            {showProfileData && (
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
            )}

            <Avatar size='md' name='Gabriel Yin' src='https://github.com/gabrielyin.png' />
        </Flex>
    )
}