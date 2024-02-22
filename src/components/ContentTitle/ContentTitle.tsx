import { Button, Typography } from '@mui/material'
import { DESCRIPTION_CONTENT, RENT_WITH_US, TITLE_PAGE } from '@/constants/ui'

import React from 'react'

export const ContentTitle = () => {
    return (
        <section className='container row py-desktop-13' style={{ background: '#E9F5FE' }}>
            <article className='col-6-8-4' >
                <Typography component={'header'} variant='h3' color={'info'} style={{ fontWeight: '300', fontStyle: 'normal' }}>
                    {TITLE_PAGE}
                </Typography>
                <Typography className='mt-13 mb-8' component={'p'} variant='body1' color={'info'} style={{ fontWeight: '300', fontStyle: 'normal' }}>
                    {DESCRIPTION_CONTENT}
                </Typography>
                <Button className='d-phone-flex mx-phone-auto mx-tablet-auto mx-desktop-0 mb-8 mb-desktop-0' variant='contained' color='primary'>{RENT_WITH_US}</Button>
            </article>
            <article className='col-6-8-4 text-desktop-end'>
                <video autoPlay muted loop src="/FifthPart.mp4" width='95%' aspect-ratio='675/380' style={{ borderRadius: '24px' }}></video>
            </article>
        </section>


    )
}

