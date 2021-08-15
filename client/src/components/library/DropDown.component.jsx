import { Menu } from '@headlessui/react'
import css from '@styled-system/css';
import { Flex, View } from 'components/index';
import styled from 'styled-components';
import { background, color, compose, typography } from 'styled-system';

const StyledMenuButton = styled(Menu.Button)(
    css({
        position: 'flex',
        outline: 'none',
        border: 'none',
        fontFamily: 'body',
        fontWeight: 'semibold',
        fontSize: 'base',
        cursor: 'pointer'
    }),
    compose(color, background, typography)
)

const MyDropdown = ({ btnbg, btncolor }) => {

  return (
    <Menu as={View} position="relative">
      <StyledMenuButton bg={btnbg || 'transparent'} color={btncolor} fontSize="ms">More</StyledMenuButton>
      <Menu.Items as={Flex} flexDirection="column" alignItems="center" position="absolute" bg="white">
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default MyDropdown;