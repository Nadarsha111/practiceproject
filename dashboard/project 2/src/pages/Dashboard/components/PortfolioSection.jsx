import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineInfoCircle,
} from "react-icons/ai";

const PortfolioSection = () => {
  return (
    <HStack
      bg="white"
      p="4"
      borderRadius="xl"
      justify="space-between"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <HStack>
        <Stack>
          <HStack color="black.80">
            <Text fontSizes="sm">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium">
            ₹134,563,35
          </Text>
        </Stack>
      </HStack>
      <HStack>
        <Stack>
          <HStack color="black.80">
            <Text fontSizes="sm">Wallet Balances</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <HStack
            spacing={2}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack spacing="4">
              <Text textStyle="h2" fontWeight="medium">
                ₹134,563,35
              </Text>
              <Tag colorScheme="gray">btc</Tag>
            </HStack>
            <HStack>
              <HStack>
                <Text textStyle="h2" fontWeight="medium">
                  ₹134,563,35
                </Text>
                <Tag colorScheme="gray">btc</Tag>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Button leftIcon={<Icon as={AiOutlineArrowDown} />}>Deposit</Button>
        <Button leftIcon={<Icon as={AiOutlineArrowUp} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
