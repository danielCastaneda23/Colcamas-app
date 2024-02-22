import Image, { StaticImageData } from 'next/image'

import React from 'react'
import { Typography } from '@mui/material'
import styles from './Card.module.sass'

interface Props {
    data: {
        image: StaticImageData;
        icon: React.JSX.Element;
        title: string;
        description: string;
    }
}

export const Card: React.FC<Props> = ({data }) => {
    return (
        <article className='d-flex fd-column fd-desktop-row  my-13 mx-phone-10'  >
            <Image src={data.image} alt={`Foto de ${data.title}`} className={styles.ImgCard} />
            <section className={`d-flex fd-column p-5 ${styles.Description}`}>
                <header className='d-flex fd-row ai-center '>
                    {data.icon}
                    <Typography className='pl-5' component={'h6'} variant='h6'>{data.title}</Typography>
                </header>
                <Typography className='d-flex jc-center ai-center pt-5 pt-desktop-0  text-justify' component={'p'} variant='body2' style={{ flex: 1 }}>{data.description}</Typography>
            </section>
        </article>
        )
}

