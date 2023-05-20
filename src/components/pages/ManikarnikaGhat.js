import React from 'react'
import NavMenu from '../NavMenu'
import { Container, Row, Col } from 'reactstrap'
import pic1 from '../../style/img/s1-1.jpg'
import pic2 from '../../style/img/s1-2.jpg'
import pic3 from '../../style/img/s1-3.jpg'
import pic4 from '../../style/img/s1-4.jpg'
import pic5 from '../../style/img/s1-5.jpg'
import pic6 from '../../style/img/s1-6.jpg'
import vid1 from '../../style/img/v1-1.mp4'

function ManikarnikaGhat() {
  return (
    <div>
      <NavMenu />
      <Container fluid style={{ padding: '5rem' }}>
        <h1>Manikarnika Ghat</h1>
        <p style={{ marginBottom: '2rem' }}>
        Manikarnika Ghat (Hindi: मणिकर्णिका घाट) is one of the holiest cremation grounds among the sacred riverfronts (ghats),
        located on the Ganges, in the city of Varanasi in the Indian state of Uttar Pradesh. In Hinduism, death is considered
        a gateway to another life marked by the result of one's karma. It is believed that a human's soul attains moksha, and 
        hence breaks the cycle of rebirth when cremated here. 
        The ghat is named after Sati's earrings which fell here. The Hindu genealogy registers at Varanasi are kept here.
        </p>
        <Row className='my-auto' style={{ margin: '1rem' }}>
          <Col>
          <img src={pic1} alt='Inside the Ghats' height='300px' />
          </Col>
          <Col>
          <img src={pic2} alt='Inside the Ghants' height='300px' />
          </Col>
          <Col>
          <img src={pic3} alt='Inside the Ghants' height='300px' />
          </Col>
        </Row>
        <h5 style={{ marginTop: '2rem' }}>Location</h5>
        <p>The Manikarnika Ghat is flanked by the Dashashwamedh Ghat and the Scindia Ghat. It is situated in Varanasi, Kashi region, India.</p>
        <h5>Mythological Origin</h5>
        <img src={pic4} alt='Ghat Shrine' style={{ float: 'right', marginLeft: '30px', height: '300px' }} />
        <p>
        The Manikarnika Ghat is one of the oldest ghats in Varanasi. It is mentioned in a Gupta inscription of 5th century.
        It is revered in Hindu religion. When Mata Sati (Adi Shakti) sacrificed her life and set her body ablaze after Raja
        Daksh Prajapati (one of the sons of Lord Brahma) tried to humiliate Lord Shiva in a Yagya practiced by Daksh, Lord
        Shiva took her burning body to the Himalaya. On seeing the unending sorrow of Lord Shiva, Vishnu sent the Divine
        chakra to cut the body into 51 parts, which then fell to earth. These are called "Ekannya Shaktipeeth". Lord Shiva 
        established Shakti Peeth wherever Sati's body had fallen. Mata Sati's ear ornament fell at Manikarnika Ghat.
        </p>
        <p>
        The Manikarnika shrine is an important place of worship for Shaktism sect of Hinduism. It is near to the Kashi
        Vishwanath Temple. The mythology of Daksha yaga and Sati's self immolation is the mythology behind the origin of
        Shakti Peethas. The etymology of the place is due to this mythology. Shakti Peethas are shrines that are believed 
        to be enshrined with the presence of Shakti due to the falling of body parts of the corpse of Sati Devi, when Lord 
        Shiva carried it and wandered. There are 51 Shakti Peeth linking to the 51 letters or akshar in Sanskrit. Each 
        temple have shrines for Shakti. The Shakti of Manikarnika is addressed as Vishalakshi & Manikarni.
        </p>
        <div className='vid' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '2rem' }}>
                <video controls="controls">
                    <source src={vid1} />
                </video>
            </div>
        <h5>Significance</h5>
        <p>
        Hindu mythology teaches that the ghat is especially sacred and that people cremated there receive moksha.
        As the myth goes, Vishnu, after several thousand years of tapasya, trying to please Shiva, to convince him
        to not destroy the holy city of Kashi when he destroys the world, managed to do so. Lord Shiva along with
        Parvati came to Kashi before Vishnu to grant him his wish Vishnu dug a kund (well) on the bank of Ganges
        for the bath of the couple When Lord Shiva was bathing a Mani (Jewel) from his earring fell into the kund,
        hence the name Manikarnika (Mani:Beads Karnam:Ear Angad: Ornament. There is another myth about the ghat:
        the ear jewel from lord Shiva fell down while he was dancing angrily, which fell on the earth and thus Manikarnika Ghat formed.
        </p>
        <h5>The experience at Manikarnika</h5>
        
        <p>
        Manikarnika Ghat is a sacred cremation site located on the banks of the Ganges River in the holy city of Varanasi, India. The ghat is a popular and important Hindu pilgrimage site, where the remains of the dead are cremated and their souls are believed to ascend to the heavens. Every day, hundreds of people come to Manikarnika Ghat to witness the cremations and to pay their respects to the dead.
        The process of cremation at Manikarnika Ghat is one of the oldest and most sacred rituals in Hinduism. The body is bathed in the Ganges and then placed on a pyre of logs, covered in ghee (clarified butter) and sandalwood. The eldest son then lights the pyre and, with the help of mourners, keeps the fire burning until the body is completely reduced to ash. The ashes are then collected and scattered in the Ganges.
        </p>
        <p>
        Witnessing a cremation at Manikarnika Ghat is a powerful experience. The intense heat and smoke of the fire, combined with the prayers and chants of the mourners, create a remarkable atmosphere. The sight of a body slowly being consumed by the flames is both awe-inspiring and heartbreaking. It is a reminder of the fragility of life and the finality of death. 
        The rituals of cremation at Manikarnika Ghat have been carried out for centuries and are still observed by Hindus today. It is a powerful and ancient rite of passage, symbolizing the passing of the soul from this world to the next. It is a reminder of the cycle of life and death and the importance of respecting the deceased.
        </p>
        <Row>
          <Col>
            <img src={pic5} alt='Shrines' height='300px' />
          </Col>
          <Col>
          <img src={pic6} alt='Shrines' height='300px' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ManikarnikaGhat