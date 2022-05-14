import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// Amplitude JS
import amplitude from 'amplitude-js';

import CartPlusIcon from "./components/CartPlusIcon";

function App() {
  // Initialize Amplitude
  const AmplitudeInstance = amplitude.getInstance().init("71b8a9d6b70f4f483351c4c200f5f1f4");

  // Mimic a unique UserId
  const UserId = 5697;
  amplitude.getInstance(AmplitudeInstance).setUserId(UserId);

  // This value can change based on a feature flag configured on ConfigCat.
  const DiscountAmount = "20%"

  const handleClick = () => {
    // Logging clicks to Amplitude
    amplitude.getInstance(AmplitudeInstance).logEvent("Shop Now");
  }

  return (
    <Container className="custom-jumbotron py-5 text-center">
      <Row className="py-lg-5">
        <Col lg={6} md={8} className="mx-auto">
          <h1 className="fw-light">Limited Time Discount</h1>
          <p className="subtext lead text-muted">Get <span className="fw-bold">{DiscountAmount}</span> OFF! when you shop today!</p>
          <Button onClick={handleClick} variant="dark">Shop Now <CartPlusIcon/></Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
