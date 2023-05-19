import React from 'react'
import NavMenu from '../NavMenu'
import manikarnika_img from '../../style/img/manikarnika-ghat.jpg'
import last_rites_img from '../../style/img/last-rites.jpg'
import maha_mritunjay from '../../style/img/maha-mritunjay.jpg'
import { Row, Col, Container, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import vid1 from '../../style/img/landingVid.mp4'

function LandingPage() {
  return (
    <div>
        <NavMenu />
        <Container fluid style={{padding: '5rem'}}>
            <h1>Antim Sanskar</h1>
            <p>
            My experience at Manikarnika Ghat was a deeply moving one. The amount of wood I could see
around must have been thousands of kilos sent a shiver down my spine. And it seemed to be

announcing a preparation of death of the ultimate reality. I saw a body being slowly consumed
by fire and another that was almost ashes and yet another that had been brought there for
burning. It is a sobering reminder of the fragility of life and the finality of death. It was a
powerful experience.

Seeing me all intrigued a simple looking ordinarily dressed man approached me and offered to
show me around. He was DOM the man who lit pyres. I took several pictures and videos and he
was very forthcoming in sharing what all is done there and how.

The process of cremation at Manikarnika Ghat is one that has been carried out for centuries and
is still observed by Hindus today. It is a powerful and ancient rite of passage, symbolizing the
passing of the soul from this world to the next. It is a powerful reminder of the cycle of life and
death and the importance of respecting the deceased.
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
            <div className='vid' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '2rem' }}>
                <video controls="controls">
                    <source src={vid1} />
                </video>
            </div>
        </Container>
    </div>
  )
}

export default LandingPage