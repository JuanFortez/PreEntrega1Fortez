import { Flex, Text } from "@chakra-ui/react";
import { IoMdCart } from "react-icons/io";


const CartWidget = () => {
  return (
    <Flex alignItems={"center"} height={"100%"} justifyContent={"space-between"} width={"60px"}>
      <IoMdCart size={30} />
      <Text fontSize={"1.5rem"}>0</Text>
    </Flex>
  );
};

export default CartWidget;

