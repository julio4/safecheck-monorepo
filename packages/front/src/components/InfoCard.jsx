import React from 'react';
import {
  Flex,
  Skeleton,
  Text,
  Stat,
  StatLabel,
} from '@chakra-ui/react';
import { TimeIcon, AtSignIcon, DragHandleIcon } from '@chakra-ui/icons';

import IconBox from './IconBox';
import Card from './Card';

import { valueToDisplay } from '../utils/utils';

export const InfoCard = function (props) {
  return (
    <Card>
      <Flex
        flexDirection='row'
        align='center'
        justify='center'>
        <Stat me='auto'>
          <StatLabel
            fontSize='xs'
            color='gray.400'
            fontWeight='bold'
            textTransform='uppercase'>
            {props.label}
          </StatLabel>
          {(() => {
            var text = <Text display={valueToDisplay(props.value)} fontSize='sm' fontWeight='bold' color='orange.500'>{props.value}</Text>
            return props.url ? <a href={props.url}>{text}</a> : text;
          })()}
          <Skeleton display={valueToDisplay(props.value, true)} height='20px' width={"95%"} />
        </Stat>
        <IconBox
          borderRadius='1rem'
          as='box'
          h={"45px"}
          w={"45px"}
          padding={"0.5rem"}
          bg={'orange'}>
          {
            (() => {
              switch (props.icon) {
                case "time":
                  return <TimeIcon h={"24px"} w={"24px"} color={"white"} />
                case "at":
                  return <AtSignIcon h={"24px"} w={"24px"} color={"white"} />
                case "drag":
                  return <DragHandleIcon h={"24px"} w={"24px"} color={"white"} />
                default:
                  break;
              }
            })()
          }
          {/* <WalletIcon h={"24px"} w={"24px"} color={"white"} /> */}

        </IconBox>
      </Flex>
    </Card>
  );
}

