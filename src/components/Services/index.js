import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-4.svg'

import { ServicesContainer, ServicesH1, ServicesCard, ServicesIcon, ServicesH2, ServicesP, ServicesWrapper, } from './ServiceElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1> My Services </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Individual online lessons</ServicesH2>
                    <ServicesP>In this modern age i provide online lessons</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Individual in person lectures </ServicesH2>
                    <ServicesP>If online lectures is not for you, we can meet face to face</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Selling premade video course</ServicesH2>
                    <ServicesP>After purchase, access video course whenever you like.</ServicesP>
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services