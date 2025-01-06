import React, { useEffect, useState } from "react";
import MemeCard from "../components/Card";
import { getAllMemes } from "../api/memes";
import { Row, Col, Container } from "react-bootstrap";

const Homepage = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        getAllMemes().then(memes => setData(memes.data.memes));
    }, []);

    return (
        <Container className="mt-5">
            <Row>
                {data.map((el, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <MemeCard img={el.url} title={el.name} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Homepage;
