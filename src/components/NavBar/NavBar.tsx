'use client'

import { AppBar, Box, Button, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { LINK_ONE, LINK_TWO } from '@/constants/ui'
import React, { useState } from 'react'

import ColcamasLogo from '@/assets/images/ColcamasLogo.png'
import Image from 'next/image'
import { MenuIcon } from '@/assets/icons/config'
import styles from './NavBar.module.sass'

export default function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleAnchor = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleCloseMenu = () => {
        setAnchorEl(null)
    }
    return (
        <header className='pb-10' style={{ background: '#E9F5FE' }}>
            <nav className='container row ai-center py-7' >
                <Box className='col-1-2-1' component={'article'} sx={{ display: { xs: 'flex', lg:'none' } }}>
                    <IconButton onClick={handleAnchor}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        onBlur={handleCloseMenu}
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        sx={{
                            display: { xs: 'block', lg: 'none' },
                        }}
                    >
                        {LINK_ONE.map((page) => (
                            <MenuItem onClick={handleCloseMenu} key={page.name}>
                                <Typography component={'a'} textAlign="center">{page.name}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Image className='col-3-6-3  mx-desktop-0 mx-tablet-10' src={ColcamasLogo} alt='Logo de Colcamas con colores azul y rojo' title='Logo Colcamas'  />
                <Box className='col-4-1-1' component={'article'} sx={{ display: { xs: 'none', lg: 'flex' } }} >
                    {LINK_ONE.map((page) => (
                        <Button role='link' key={page.name} sx={{ color: 'black' }} href={page.redirect}>
                            {page.name}
                        </Button>
                    ))}
                </Box>
                <Box className='col-5-1-1 js-end' component={'article'} sx={{ display: { xs: 'none', lg: 'flex' } }}>
                    {LINK_TWO.map((page, index) => (
                        <Button  className={styles.Button} role='link'  variant='outlined' color='primary' key={page}>
                            <Typography color='primary' fontSize={'14px'}>{page}</Typography>
                        </Button>
                    ))}
                </Box>
            </nav>
        </header>

    )
}
