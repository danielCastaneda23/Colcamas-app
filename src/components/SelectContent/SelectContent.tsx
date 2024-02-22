'use client'

import { BastonIcon, CamaIcon, CaminadorIcon, ComodoIcon, MuletasIcon, SillaDeRuedasIcon } from '@/assets/icons/config'
import { CHARACTERISTICS, PRODUCTS, SELECT_PRODUCTS } from '@/constants/ui'
import React, { useState } from 'react'

import { ProductContent } from '../ProductContent/ProductContent'
import { Typography } from '@mui/material'
import styles from './SelectContent.module.sass'

export const SelectContent = () => {
    const icons = [
        <CamaIcon key={1} />,
        <SillaDeRuedasIcon key={2} />,
        <CaminadorIcon key={3} />,
        <ComodoIcon key={4} />,
        <BastonIcon key={5} />,
        <MuletasIcon key={6} />
    ]

    const [product, setProduct] = useState<{ name: string, index: number }>({ name: 'camaHospitalaria', index: 0 })

    const handleSelectedProduct = (event: React.MouseEvent<HTMLElement>, key: string, index: number) => {
        event.preventDefault()
        setProduct({ name: key, index })
    }
    return (
        <>
            <section id='ourProducts' className='container row'>
                <article className='col-12-8-4 text-center pt-12 pb-desktop-12' >
                    <Typography variant='h3' component={'header'} dangerouslySetInnerHTML={{ __html: SELECT_PRODUCTS }} />
                    <ul className={`row py-desktop-8 ${styles.listParent}`}>
                        {
                            PRODUCTS.map((product, index) => {
                                const keys = Object.keys(CHARACTERISTICS)
                                return (
                                    <li role='button' key={index} className={`col-2-2-2 d-flex fd-column px-desktop-5 px-2 pt-5 pb-3 my-4 my-desktop-0  mx-auto  ${styles.listChild}`} onClick={(event: React.MouseEvent<HTMLElement>) => handleSelectedProduct(event, keys[index], index)}>
                                        <div className='' >{icons[index]}</div>
                                        <Typography variant='body1' className={`d-flex jc-center ai-center ${styles.button}`}>
                                            {product}
                                        </Typography>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </article>
            </section>
            <ProductContent product={CHARACTERISTICS[product.name]} productDetails={product} />
        </>


    )
}
