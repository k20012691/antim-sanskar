import React from 'react'
import NavMenu from '../NavMenu'
import { Container, Row, Col } from 'reactstrap'
import pic1 from '../../style/img/s2-1.jpg'
import pic2 from '../../style/img/s2-2.jpg'
import pic3 from '../../style/img/s2-3.jpg'
import pic4 from '../../style/img/s2-4.jpg'
import pic5 from '../../style/img/s205.jpg'

function LastRites() {
  return (
    <div>
      <NavMenu />
      <Container fluid style={{ padding: '5rem' }}>
        <h1>Last Rites</h1>
        <img src={pic1} alt='Last Rites' height='300px' style={{ float: 'right', marginLeft: '30px' }} />
        <p>
        The last rites are usually completed within a day of death. While practices vary among sects, generally, his or her body is washed, sandalwood paste and turmeric is applied on the body, wrapped in a dhoti for a man and a saree for women. The big toes are tied together with a string and a Tilak (red, yellow or white mark) is placed on the forehead. A bed is made out of bamboo sticks on which the deceased is taken to the Shamshan. The dead adult's body is carried to the cremation ground near a river or water, by family and friends, and placed on a pyre with feet facing south. 
        </p><p>
        The eldest son, or a male mourner, or a priest – called the lead cremator or lead mourner – then bathes himself and his hair is cut leaving only one strand of hair called shikha before leading the cremation ceremony. He circumambulates the dry wood pyre with the body, says a eulogy or recites a hymn, places sesame seeds or rice called as pind on the deceased's chest, hand and legs. He sprinkles the body and the pyre with ghee (clarified butter), then draws three lines signifying Yama (deity of the dead), Kala (time, deity of cremation) and the dead. Prior to lighting the pyre, an earthen pot is filled with water, and the lead mourner circles the body with it, before lobbing the pot over his shoulder so it breaks near the head. Once the pyre is ablaze, the lead mourner and the closest relatives may circumambulate the burning pyre one or more times. 
        </p><p>
        The ceremony is concluded by the lead cremator, during the ritual, is kapala kriya, or the ritual of piercing the burning skull with a stave (bamboo fire poker) to make a hole or break it, in order to release the spirit. All those who attend the cremation, and are exposed to the dead body or cremation smoke take a shower as soon as possible after the cremation, as the cremation ritual is considered unclean and polluting. The cold collected ash from the cremation is later consecrated to the nearest river or sea. 
        </p><p>
        In some regions, the male blood members of the deceased shave their head on the 9th day called as NAUVAR and then invite all friends and relatives, on the thirteenth (13th) day, to eat a meal together in remembrance of the deceased called as Tehrvi Sanskar. This day, in some communities, also marks a day when the poor and needy are offered food in memory of the dead.
        </p>
        <Row style={{ marginBottom: '2rem' }}>
          <Col>
            <img src={pic2} height='300px' alt='Cremation' />
          </Col>
          <Col>
          <img src={pic3} height='300px' alt='Cremation' />
          </Col>
          <Col>
          <img src={pic4} height='300px' alt='Cremation' />
          </Col>
        </Row>
        <h5>Burials in Hinduism</h5>
        <img src={pic5} alt='Last Rites' height='200px' style={{ float: 'right', marginLeft: '20px' }} />
        <p>
        Apart from the cremation method. several sects in Hinduism follow the practice of burial of the dead. In some sects, the important sadhus are buried. The preparatory rituals are more or less similar to cremation viz, washing the body, applying vibuthi or chandam on the forehead of the deceased etc., but instead of cremating, the deceased is buried. The body is either placed in sleeping position or in some Shaivite and tribal traditions is in Padmasana sitting position with legs folded and arms resting on the thigh simulating meditative position. The burial pit is prepared in the community burial ground called Shamshana, usually situated outside the city or village. Some affluent will bury their dead in their own field. The burial pit for sleeping position is generally three feet width and six feet in length and for sitting position it is three feet by three feet. As a thumb rule in all the sects invariable the saints are buried in sitting position in a separate place where later on a Samadhi is built which becomes a place of worship.
        </p>
        <h5>Post-antyesti Rituals</h5>
        <p>
          <b>Niravapanjali</b> is a sacred ritual in Hinduism where after the cremation rites, the ashes are ceremonially immersed in holy water by the closest relatives, so that the soul may rise to heaven. In Hinduism, king Bhagiratha performed a tapasya to bring down the river Ganges upon earth, so that he could immerse the ashes of sixty thousand of his slain ancestors in her sacred waters.
        </p>
        <p>
          <b>Tarpana</b> is a sacred ritual whereupon the closest relatives make a sacred offering to the Gods so that the departed soul may enter Swarga. In Hindu mythology, the Great Parasurama offered a tarpana for his father Jamadagni with the blood of his father's killer.
          Tarpana is usually performed at a holy site such as ghats on sacred rivers or sites.
        </p>
        <p>
          <b>Rasam Pagri</b>, prevalent in Punjab and Rajasthanis, is conducted upon the death of the eldest male member in a family to appoint his heir, in which the eldest surviving male member of the family ties a turban (pagri) on his head in the presence of the extended family or clan. Ceremony is usually performed by the father of the wife of the eldest, surviving male member. The ceremony usually takes place on the fourth day from the day of funeral rites (Antim Sanskar, also known as Uthala), or on the thirteenth day, Tehravin. The turban signifies honor of the family, and the ceremony signifies the transition of responsibility for the protection and welfare of the family from the deceased to the surviving oldest male member. 
        </p>
        <p>
          <b>Pind Sammelan</b> also called Spindi or terahvin in North India, is a ritual performed in Hinduism on the 13th day of death of somebody. This ritual is performed to place the departed soul with the ancestors and God. It is believed that before the ritual the departed soul is a preta (evil spirit), and after performing this ritual, the soul will become "pitr" (good spirit) and will be included in the ancestors.
        </p>
      </Container>
    </div>
  )
}

export default LastRites