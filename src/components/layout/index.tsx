import { Flex, Text } from '@chakra-ui/react'
import { ConnectButton } from '@iota/dapp-kit'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" w="full" bgColor="white" h="56px" px={6} mb={8}>
        <Text fontWeight="bold">IOTA Move Example dApp</Text>
        <ConnectButton />
      </Flex>

      <Flex w="full" p={6} justifyContent="center" alignItems="center">
        {children}
      </Flex>
    </>
  )
}

export default Layout
