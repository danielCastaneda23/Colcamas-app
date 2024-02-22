import { ContentTitle } from '@/components/ContentTitle/ContentTitle'
import Estela from '@/assets/images/Estela.png'
import Image from 'next/image'
import NavBar from '@/components/NavBar/NavBar'
import { RENT_PROCESS } from '@/constants/ui'
import { RentProcess } from '@/components/RentProcess/RentProcess'
import { SelectContent } from '@/components/SelectContent/SelectContent'
import { Typography } from '@mui/material'

export default function Home() {
    return (
        <>
            <NavBar />
            <main>
                <ContentTitle />
                <SelectContent />
                <Image layout='responsive' src={Estela} alt=":)" />
                <RentProcess />


            </main>
        </>
    )
}
