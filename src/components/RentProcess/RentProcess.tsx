import { RENT_PROCESS, TITLE_RENT_PROCESS } from '@/constants/ui'

import { Card } from '../Card/Card'
import FondoSillaDeRuedas from '@/assets/images/FondoSillaDeRuedas.png'
import Image from 'next/image'
import React from 'react'
import { Typography } from '@mui/material'
import styles from './RentProcess.module.sass'

export const RentProcess = () => {
    return (
        <section className={`${styles.Card} container`}>
            <Typography  component={'header'} variant='h3' textAlign={'right'} position={'relative'} zIndex={1} dangerouslySetInnerHTML={{ __html: TITLE_RENT_PROCESS }}></Typography>
            <Image src={FondoSillaDeRuedas} alt=':)' className={styles.ImgBackground}></Image>
            {RENT_PROCESS.map((x, index) => {
                return (
                    <Card key={index} data={x}/>
                )
            })}
        </section>
    )
}
