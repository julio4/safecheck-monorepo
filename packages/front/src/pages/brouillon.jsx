<>
      <Grid
      templateAreas={`"header header"
                      "main main"
                      "footer footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'150px 1fr'}
      h='200px'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
      >
      <GridItem pl='2' area={'header'}>
        <Center>
          <Container>
          <Heading as='h1' color='orange' size='3xl' margin="1rem auto auto auto">
            SafeCheck
          </Heading>
          </Container>
          <Container as='h1' color='orange' size='3xl' margin="1rem auto auto auto">
            Get some insights on your transactions
          </Container>
        </Center>
      </GridItem>
      <GridItem pl='2'  area={'main'}>
        Main
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={'footer'}>
        Footer
      </GridItem>
      </Grid>
      <Input placeholder='large size' size='lg' />
      <h1>Contracts</h1>
      <span>ADRESS: {a.address}</span>
      <p>
        Should have:
        <ul>
          <li>Searchbar for new address</li>
          <li>Address information, score...</li>
        </ul>
      </p>
    </>