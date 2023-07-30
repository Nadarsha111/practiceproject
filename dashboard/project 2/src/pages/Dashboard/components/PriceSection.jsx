import { Button, Flex, HStack, Icon, Img, Stack, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  AiFillPlusCircle,
  AiOutlineInfoCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const PriceSection = () => {
  const timeStamp = ["10.00", "11.00", "12.00", "1.00", "2.00", "3.00", "4.00"];

  return (
    <CustomCard >
      <HStack justify="space-between">
        <HStack>
          <Stack>
            <HStack color="black.80">
              <Text fontSizes="sm">Total Portfolio Value</Text>
              <Icon as={AiOutlineInfoCircle} />
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                ₹134,563,35
              </Text>
              <HStack fontWeight="medium" color="green.500" fontSize="sm">
                <Icon as={BsArrowUpRight} />
                <Text>99%</Text>
              </HStack>
            </HStack>
          </Stack>
        </HStack>
        <HStack>
          <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Deposit</Button>
          <Button leftIcon={<Icon as={AiOutlineMinusCircle} />}>
            Withdraw
          </Button>
        </HStack>
      </HStack>

      <Tabs variant="soft-rounded" colorScheme="purple">
        <Flex justify="end">
          <TabList bg="black.5" borderRadius="xl" p="3px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                key={tab}
                fontSize="sm"
                p="6px"
                borderRadius="4px"
                _selected={{ bg: "white" }}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Img width="100%" src="/graph.svg" mg="48px" />
      <HStack justify="space-between">
        {timeStamp.map((time) => (
          <Text key={time} fontSize="sm" color="black.80">
            {time}
          </Text>
        ))}
      </HStack>
    </CustomCard>
  );
};

export default PriceSection;
