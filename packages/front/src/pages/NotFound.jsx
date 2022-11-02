import { Container } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container marginTop={"20vh"}>
      <a href="/">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 mt-5 mb-5">
              <img src={require("../assets/404.png")} alt={"error_img"} />
            </div>
          </div>
        </div>
      </a>
    </Container>
  )
};

export default NotFound;
