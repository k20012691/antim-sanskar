import React from 'react'
import NavMenu from '../NavMenu'
import manikarnika_img from '../../style/img/manikarnika-ghat.jpg'
import last_rites_img from '../../style/img/last-rites.jpg'
import maha_mritunjay from '../../style/img/maha-mritunjay.jpg'
import { Row, Col, Container, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

function LandingPage() {
  return (
    <div>
        <NavMenu />
        <Container fluid style={{padding: '5rem'}}>
            <h1>Antim Sanskar</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra placerat felis nec aliquet.
                Donec nec aliquam dolor, eu tempus velit. Duis tempus purus eget lectus pretium tincidunt.
                Quisque neque leo, viverra sit amet rutrum et, porttitor eget eros. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam pharetra placerat felis nec aliquet. Donec nec aliquam dolor,
                eu tempus velit. Duis tempus purus eget lectus pretium tincidunt. Quisque neque leo,
                viverra sit amet rutrum et, porttitor eget eros.
            </p>
            <Row style={{ marginTop: '3rem' }}>
                <Col>
                    <Card style={{ backgroundColor: '#E6E6E6', height: '100%', width: '70%' }}>
                        <img src={manikarnika_img} width='100%' alt='Manikarnika Ghat' />
                        <CardBody>
                            <CardTitle tag="h5">Manikarnika Ghat</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra placerat.</CardText>
                            <a href='/manikarnika-ghat'>
                            <Button>Explore</Button>
                            </a>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ backgroundColor: '#E6E6E6', height: '100%', width: '70%' }}>
                        <img src={last_rites_img} width='100%' height='187px' alt='Last Rites' />
                        <CardBody>
                            <CardTitle tag="h5">Last Rites</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra placerat.</CardText>
                            <a href='/last-rites'>
                            <Button>Explore</Button>
                            </a>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ backgroundColor: '#E6E6E6', height: '100%', width: '70%' }}>
                        <img src={maha_mritunjay} height='187px' alt='Maha Mritunjay Mantra' />
                        <CardBody>
                            <CardTitle tag="h5">Mahamritunjay Mantra</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra placerat.</CardText>
                            <a href='/maha-mritunjay'>
                            <Button>Explore</Button>
                            </a>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default LandingPage