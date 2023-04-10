import { Header } from "@/components/Header";
import { SideBar } from "@/components/Sidebar";
import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react";

export default function Dashboard() {
    return (
        <Flex
            direction='column'
            h='100vh'
        >
            <Header />
            <Flex
                w='100%'
                my='6'
                maxWidth={1400}
                mx='auto'
                px='6'
            >
                <SideBar />
                <SimpleGrid
                    flex='1'
                    gap='4'
                    minChildWidth='320px'
                >
                    <Box
                        p='8'
                        bg='gray.800'
                        borderRadius={8}
                    >
                        <Text
                            fontSize='lg'
                            mb='4'
                        >Inscritos da semana</Text>
                    </Box>
                    <Box
                        p='8'
                        bg='gray.800'
                        borderRadius={8}
                    >
                        <Text
                            fontSize='lg'
                            mb='4'
                        >Taxa de abertura</Text>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}