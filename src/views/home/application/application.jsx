import { Box, Input, Stack, Text } from "@chakra-ui/react";

const Application = () => {
  return (
    <Stack direction={{base:"column",lg:"row"}}  justifyContent={'space-between'}>
    <Box width={{base:"100%",lg:"24%"}}>
      <Box display={'flex'} gap={1}>
        <Text fontWeight={'500'}>Application Number</Text>
        <Text color={'red'}>*</Text>
      </Box>
      <Box width={'100%'}>
        <Input
          type="number"
          placeholder="Enter Application Number"
        />
      </Box>
    </Box>

    <Box width={{base:"100%",lg:"24%"}}>
      <Box mb={1} display={'flex'} gap={1}>
        <Text fontWeight={'500'}>Transaction Number</Text>
        <Text color={'red'}>*</Text>
      </Box>
      <Box width={'100%'}>
        <Input
          type="number" // Use "text" to allow displaying as text
          placeholder="Enter Transaction Number"
          fontFamily="monospace" // Ensure a fixed-width font for proper alignment
          onFocus={(e) => e.target.select()} // Optional: auto-select input content on focus
        />
      </Box>
    </Box>
    <Box width={{base:"100%",lg:"24%"}}>
      <Box mb={1} display={'flex'} gap={1}>
        <Text fontWeight={'500'}>Payment Date</Text>
        <Text color={'red'}>*</Text>
      </Box>
      <Box width={'100%'}>
        <Input type="date" placeholder="Enter Payment Date" />
      </Box>
    </Box>
  </Stack>
  )
}

export default Application