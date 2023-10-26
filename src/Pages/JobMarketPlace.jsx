import React, {useState} from 'react';
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import MarketplaceLayout from '../Components/Layout/MarketplaceLayout';
import {SearchIcon} from '@chakra-ui/icons';
import InfoSvg from '../assets/svgs/InfoSvg';

import data from '../data';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';
import BodyDot from '../Components/BodyDot';
import ChatSvg from '../assets/svgs/ChatSvg';
import {FiEye} from 'react-icons/fi';

const itemsPerPage = 8;
const JobMarketPlace = () => {
  const [currentPage, setCurrentPage] = useState (1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the data for the current page
  const itemsToDisplay = data.slice (startIndex, endIndex);

  const totalPages = Math.ceil (data.length / itemsPerPage);

  const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage (newPage);
    }
  };
  return (
    <MarketplaceLayout>
      <Box mb={4}>
        <Box h={'96px'} background={'#FFFFFF'} borderRadius={'8px'} p={'16px'}>
          <Box
            background={'#F8F8F8'}
            borderRadius={'6px'}
            h={'64px'}
            px={'10px'}
            py={'12px'}
            display={'flex'}
            flexDirection={'row'}
            textAlign={'center'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Stack direction={'row'}>
              <Box h={'18px'} w={'18px'}>
                <InfoSvg />
              </Box>
              <Heading
                fontSize={'18px'}
                color={'#4B4B4B'}
                fontWeight={600}
                textAlign={'left'}
              >
                My Network Connections (8)

              </Heading>
            </Stack>
            <Stack
              direction={'row'}
              spacing={'12px'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >

              <Box
                sx={{px: '13px', py: '16px'}}
                style={{
                  border: '1px solid #4B465C',
                  borderRadius: '8px',
                  width: '400px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  flexGrow={1}
                >
                  <InputGroup
                    display={'flex'}
                    justifyContent={'center'}
                    textAlign={'center'}
                    alignItems={'center'}
                  >
                    <InputLeftElement mt={'-7px'}>
                      <SearchIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                      color={'#B7B5BE'}
                      variant="unstyled"
                      placeholder="Sale force Project manager"
                    />
                  </InputGroup>
                </Box>
              </Box>
              <Button
                leftIcon={<SearchIcon />}
                backgroundColor="#7367F0"
                fontSize={'15px'}
                fontWeight={500}
                color={'#FFFF'}
                variant="solid"
              >
                Search
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box
        mb={4}
        borderRadius={'8px'}
        h={'902px'}
        p={'16px'}
        background={'#FFFFFF'}
      >
        {itemsToDisplay.map ((item, index) => (
          <Box
            key={index}
            mb={'10px'}
            h={'100px'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            borderRadius={'8px'}
            p={'16px'}
            border={'1px solid #E5E5E5'}
          >
            <Stack direction="row" display={'flex'} gap={'12px'}>
              <Avatar name={item.name} src={item.avatarSrc}>
                <AvatarBadge boxSize="1em" bg={item.avatarBadgeColor} />
              </Avatar>
              <Stack direction="column">
                <Text
                  fontSize="13px"
                  lineHeight={'14px'}
                  color={'#4B4B4B'}
                  fontWeight={600}
                >
                  {item.name}
                  <Text
                    fontSize="13px"
                    mt={'8px'}
                    fontWeight={400}
                    color={'#A8AAAE'}
                  >
                    Saleforce Developer at Conga Works
                  </Text>
                  <Text
                    fontSize="13px"
                    mt={'5px'}
                    fontWeight={400}
                    color={'#A8AAAE'}
                  >
                    Connected 1 month ago
                  </Text>
                </Text>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              gap={'12px'}
            >
              <Button
                leftIcon={<ChatSvg />}
                width={'102px'}
                background={'#E9E7Fd'}
                colorScheme="purple"
                border={'none'}
                color={'#7367F0'}
                fontSize={'15px'}
                variant="outline"
              >
                Chat
              </Button>
              <Button
                leftIcon={<FiEye />}
                height={'38px'}
                backgroundColor="#7367F0"
                width={'155px'}
                fontSize={'15px'}
                fontWeight={500}
                color={'#FFFF'}
                variant="solid"
              >
                View Profile
              </Button>
              <BodyDot />
            </Stack>
          </Box>
        ))}
      </Box>
      <Box
        mb={4}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'flex-end'}
        borderRadius={'8px'}
        h={'52px'}
        p={'16px'}
        background={'#FFFFFF'}
      >

        {currentPage > 1 &&
          <Button
            style={{
              margin: '4px',
              padding: '4px 8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              background: '#F1F0F2',
              color: '#6F6B7D',
              cursor: 'pointer',
            }}
            fontSize={'13px'}
            onClick={() => handlePageChange (currentPage - 1)}
          >
            <Box display={'flex'} margin={'auto'}>
              <BsChevronLeft />
            </Box>
          </Button>}
        {Array.from ({length: totalPages}, (_, index) => (
          <Button
            key={index}
            onClick={() => handlePageChange (index + 1)}
            style={{
              margin: '4px',
              padding: '4px 8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontWeight: '400',
              fontSize: '13px',
              background: currentPage === index + 1 ? '#7367F0' : '#F1F0F2',
              color: currentPage === index + 1 ? 'white' : '#6F6B7D',
              cursor: 'pointer',
            }}
          >
            {index + 1}
          </Button>
        ))}

        {currentPage < totalPages &&
          <Button
            style={{
              margin: '4px',
              padding: '4px 8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              background: '#F1F0F2',
              color: '#6F6B7D',
              fontWeight: '400',
              cursor: 'pointer',
            }}
            fontSize={'13px'}
            onClick={() => handlePageChange (currentPage + 1)}
          >
            <Box display={'flex'} margin={'auto'}>
              <BsChevronRight />
            </Box>
          </Button>}
      </Box>
    </MarketplaceLayout>
  );
};

export default JobMarketPlace;
