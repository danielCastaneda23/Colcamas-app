import { Box, Button, Typography } from '@mui/material'
import Image, { StaticImageData } from 'next/image'

import { CHARACTERISTICS } from '@/constants/ui'
import React from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import styles from './ProductContent.module.sass'

interface Props {
    product: {
        mainImage: StaticImageData,
        description: string,
        title: string,
        buttonText: string,
        info: Array<{ text: string, image: string | StaticImport }>
    }
    productDetails: {
        name: string,
        index: number
    },

}
export const ProductContent: React.FC<Props> = ({ product, productDetails }) => {
    return (
        <section key={productDetails.index} className={`container row ai-center ${productDetails.index % 2 ? `${styles.LayoutContent} ${styles.transitionsClassImpar}` : ` ${styles.transitionsClassNormal}`} `}>
            <article className='col-6-8-4'>
                <Image className='ai-center p-3 d-flex mx-auto ' src={product.mainImage} alt={product.description} title={product.title} style={{ width: '80%', height: 'auto' }} />
                <Button className='d-flex mx-auto my-12' variant='contained' color='primary' size='large'>{product.buttonText}</Button>
            </article>
            <article className='col-6-8-4'>
                {
                    product.info.map((element, index) => {
                        return (
                            <section key={index} className={`d-flex ${styles.Content} ${productDetails.name === 'camaHospitalaria' && index === 0 && styles.CamaHospitalaria} `}>
                                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                    <Image  src={element.image}  alt=':)' />
                                </Box>
                                <Typography className='px-3 py-phone-3 as-center' textAlign={'justify'} variant='body1' fontWeight={400} component={'p'}>
                                    {element.text}
                                </Typography>
                            </section>
                        )
                    })
                }
            </article>
        </section>
    )
}
