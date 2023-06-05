import { Flex, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import News from './News'
import { news } from '../../data/news';

export default function AllNews() {
  return (
    <Flex justifyContent="center" py='2rem' alignItems='center'direction='column' bg='gray.400' gap='2rem'>
      <Heading>Noticias</Heading>
      <Stack direction="row" wrap="wrap" gap="2rem" alignItems='center' justifyContent='center'>
        {news.map((el) => {
          return <News
            key={el.id}
            text={el.text}
            title={el.title}
          ></News>
        })}
      </Stack>
    </Flex>
  );
}
