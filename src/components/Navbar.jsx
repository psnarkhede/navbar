import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  StylesProvider,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div>
      <div >
        <Breadcrumb
          separator=""
          borderBottom="1px solid silver"
          padding="20px"
          h="60px"
          fontSize="16px"
          display="flex"
          alignItems="center"
          fontFamily="heading"
          fontWeight="500"
          color="gray"
        >

          <BreadcrumbItem>
            <BreadcrumbLink _hover="none" color="black" cursor='initial'  padding="10px" href="#" fontWeight="700">Logo</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink _hover="none" marginLeft="10%" padding="10px" href="#">Inspiration</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink _hover="none" padding="10px" href="#">Find Work</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink _hover="none" padding="10px" href="#">Learn Design</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink _hover="none"  padding="10px" href="#">Hire Designers</BreadcrumbLink>
          </BreadcrumbItem>
        

       
          <BreadcrumbItem>
            <BreadcrumbLink _hover="none" color="gray" marginLeft="580" padding="10px" href="#">Sign in</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Button  colorScheme='pink' color="white">Button</Button>
          </BreadcrumbItem>
        
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Navbar;
