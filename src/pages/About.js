import { Col, Row, Container } from "react-bootstrap";
import { Grid } from "@mui/material";
const About = () => {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${"https://unibasq.org/wp-content/uploads/2020/08/freedom-day-e1572604258870.jpg"})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      height: "100%",
    },
  };
  return (
    <>
      <Grid
        container
        justify="center"
        textAlign="center"
        style={styles.paperContainer}
      >
        <Container
          style={{ minHeight: "100vh", color: "black" }}
          className="mt-4"
        >
          <Row>
            <Col>
              <h1 className="pt-4 text-center">About Blog</h1>
              <p>
                Sie können alle Schönheiten, die Sie lieben, mögen und auf
                dieser Blog-Seite teilen möchten, zusammenbringen und anderen
                zeigen, wie sie aussehen.
              </p>
              <br />
              <p>
                Das Leben wird besser, wenn man es teilt, oder? Da Sie anderen
                Menschen helfen, diese Orte oder Schönheiten zu entdecken,
                können Sie auch ihre Ideen und Fragen erhalten, Ihre Erfahrungen
                teilen und kommunizieren.
              </p>
            </Col>
          </Row>
        </Container>
      </Grid>
    </>
  );
};

export default About;
