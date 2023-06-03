// import {   IconButton,
//   Box,
//   CloseButton,
//   Flex,
//   Icon,
//   useColorModeValue,
//   Link,
//   Drawer,
//   DrawerContent,
//   Text,
//   useDisclosure,
//   BoxProps,
//   FlexProps, } from "@chakra-ui/react";
// // import {
// //   FiHome,
// //   FiTrendingUp,
// //   FiCompass,
// //   FiStar,
// //   FiSettings,
// //   FiMenu,
// // } from 'react-icons/fi';

// const LinkItems = [
//   { name: "Home" },
//   { name: "Trending" },
//   { name: "Explore" },
//   { name: "Favourites" },
//   { name: "Settings" },
// ];

// const Header = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <Box bg="papayawhip" minH="100vh" w="100%" color="black">
//       <SidebarContent
//         onClose={() => onClose}
//         display={{ base: "none", md: "block" }}
//       />
//       {/* <Drawer
//         autoFocus={false}
//         isOpen={true}
//         placement="left"
//         onClose={onClose}
//         returnFocusOnClose={false}
//         onOverlayClick={onClose}
//         // size="full"
//       >
//         hy
//         <DrawerContent>
//           hy
//           <SidebarContent onClose={onClose} />
//         </DrawerContent>
//       </Drawer> */}
//     </Box>
//   );
// };

// const SidebarContent = ({ onClose, ...rest }) => {
//   return (
//     <Box
//       bg={useColorModeValue("white", "gray.900")}
//       borderRight="1px"
//       borderRightColor={useColorModeValue("gray.200", "gray.700")}
//       // w={{ base: "full", md: 60 }}
//       // pos="fixed"
//       // h="full"
//       h="100vh"
//       {...rest}
//     >
//       <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
//         <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
//           Logo
//         </Text>
//         <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
//       </Flex>
//       {LinkItems.map((link) => (
//         <NavItem key={link.name} icon={link.icon}>
//           {link.name}
//         </NavItem>
//       ))}
//     </Box>
//   );
// };

// const NavItem = ({ icon, children, ...rest }) => {
//   return (
//     <Link
//       href="#"
//       style={{ textDecoration: "none" }}
//       _focus={{ boxShadow: "none" }}
//     >
//       <Flex
//         align="center"
//         p="4"
//         mx="4"
//         borderRadius="lg"
//         role="group"
//         cursor="pointer"
//         _hover={{
//           bg: "cyan.400",
//           color: "white",
//         }}
//         {...rest}
//       >
//         {icon && (
//           <Icon
//             mr="4"
//             fontSize="16"
//             _groupHover={{
//               color: "white",
//             }}
//             as={icon}
//           />
//         )}
//         {children}
//       </Flex>
//     </Link>
//   );
// };

// export default Header;

import { Box, Flex, Text, Icon, Link } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
const LinkItems = [
  { name: "Home", icon: PhoneIcon },
  { name: "Explore", icon: PhoneIcon },
  { name: "Notifications", icon: PhoneIcon },
  { name: "Messages", icon: PhoneIcon },
  { name: "Lists", icon: PhoneIcon },
  { name: "Bookmarks", icon: PhoneIcon },
  { name: "Twitter Blue", icon: PhoneIcon },
  { name: "Profile", icon: PhoneIcon },
  { name: "More", icon: PhoneIcon },
];
const Header = () => {
  return (
    <>
      <Box bg="papayawhip" minH="100vh" w="100%" color="black">
        <SidebarContent display={{ base: "none", md: "block" }} />
      </Box>
    </>
  );
};

const SidebarContent = (display) => {
  return (
    <Box
      // bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      // borderRightColor={useColorModeValue("gray.200", "gray.700")}
      // w={{ base: "full", md: 60 }}
      // pos="fixed"
      // h="full"
      h="100vh"
      {...display}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
      </Flex>

      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        justifyContent="left"
        // p="4"
        // mx="4"
        // borderRadius="30"
        role="group"
        cursor="pointer"
        // _hover={{
        //   bg: "cyan.400",
        //   color: "white",
        // }}
        {...rest}
      >
        <Box 
        pr="12"
        pl="4"
        py="3"
        mx="4"
        borderRadius="30"
          _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Box>
      </Flex>
    </Link>
  );
};

export default Header;
