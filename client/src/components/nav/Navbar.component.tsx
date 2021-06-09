import { Flex } from '@chakra-ui/react';
import React from 'react';
import Branding from './Branding.component';
import NavMenu from './NavMenu.component';
import Searchbar from './Searchbar.component';

export interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
  return (
    <React.Fragment>
      <Flex align='center' justify='space-evenly' marginY={5}>
        <Branding />
        <Searchbar />
        <NavMenu />
      </Flex>
    </React.Fragment>
  );
};

export default Navbar;
