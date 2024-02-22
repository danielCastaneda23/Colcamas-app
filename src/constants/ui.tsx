import { CommunicationIcon, DeliveryIcon, FollowingIcon, InstallationIcon, ReservationIcon } from '@/assets/icons/config'

import Baston from '@/assets/images/Baston.png'
import Baston1 from '@/assets/images/Baston1.png'
import Baston2 from '@/assets/images/Baston2.png'
import Baston3 from '@/assets/images/Baston3.png'
import Baston4 from '@/assets/images/Baston4.png'
import CamaHospitalaria from '@/assets/images/CamaHospitalaria.png'
import CamaHospitalaria1 from '@/assets/images/CamaHospitalaria1.png'
import CamaHospitalaria2 from '@/assets/images/CamaHospitalaria2.png'
import CamaHospitalaria3 from '@/assets/images/CamaHospitalaria3.png'
import CamaHospitalaria4 from '@/assets/images/CamaHospitalaria4.png'
import Caminador from '@/assets/images/Caminador.png'
import Caminador1 from '@/assets/images/Caminador1.png'
import Caminador2 from '@/assets/images/Caminador2.png'
import Caminador3 from '@/assets/images/Caminador3.png'
import Caminador4 from '@/assets/images/Caminador4.png'
import ComodoSanitario from '@/assets/images/ComodoSanitario.png'
import ComodoSanitario1 from '@/assets/images/ComodoSanitario1.png'
import ComodoSanitario2 from '@/assets/images/ComodoSanitario2.png'
import ComodoSanitario3 from '@/assets/images/ComodoSanitario3.png'
import ComodoSanitario4 from '@/assets/images/ComodoSanitario4.png'
import Comunicacion from '@/assets/images/Comunicacion.png'
import Envio from '@/assets/images/Envio.png'
import Instalacion from '@/assets/images/Instalacion.png'
import Muleta from '@/assets/images/Muleta.png'
import Muleta1 from '@/assets/images/Muleta1.png'
import Muleta2 from '@/assets/images/Muleta2.png'
import Muleta3 from '@/assets/images/Muleta3.png'
import Muleta4 from '@/assets/images/Muleta4.png'
import Reserva from '@/assets/images/Reserva.png'
import Seguimiento from '@/assets/images/Seguimiento.png'
import SillaDeRuedas from '@/assets/images/SillaDeRuedas.png'
import SillaDeRuedas1 from '@/assets/images/SillaDeRuedas1.png'
import SillaDeRuedas2 from '@/assets/images/SillaDeRuedas2.png'
import SillaDeRuedas3 from '@/assets/images/SillaDeRuedas3.png'
import SillaDeRuedas4 from '@/assets/images/SillaDeRuedas4.png'

export const TITLE_PAGE = 'Alquila Con Nosotros, Brinda Bienestar, Confort y Seguridad.'
export const TITLE_RENT_PROCESS = '¿Como Funciona <br/> Nuestro Proceso De Alquiler?'
export const DESCRIPTION_CONTENT = 'Cuida de los que mas quieres con nuestra ultima tecnología para cuidado en el hogar. Ofrecemos el alquiler y venta de productos exclusivos para el manejo de pacientes en casa, realizamos adecuación, instalación y mantenimiento preventivo.'
export const LINK_ONE = [{name: 'Quienes Somos', redirect:'#ourProducts'}, {name: 'Nuestros Productos', redirect:'#ourProducts' }]
export const LINK_TWO = ['ALQUILAR PRODUCTOS', 'INICIAR SESION']
export const RENT_WITH_US = '¡Alquila Con Nosotros!'
export const SELECT_PRODUCTS = "Selecciona Tu Producto, <br/> Obtén Información De Alquiler Y Venta."
export const PRODUCTS = ['Cama Hospitalaria', 'Sillas De Ruedas', 'Caminadores', 'Comodo Sanitario', 'Bastones', 'Muletas']
export const CHARACTERISTICS: any = {
    camaHospitalaria: {
        mainImage: CamaHospitalaria,
        description: 'Imagen Cama hospitalaria Electrica',
        title: 'Cama Hospitalaria',
        buttonText: '¡Alquilar Cama Hospitalaria!',
        info: [
            {
                text: 'Una cama segura, cómoda y funcional, diseñada para apoyar las funciones del personal asistencial en la atención y recuperación de pacientes en Hospitalización.',
                image: CamaHospitalaria1
            },
            {
                text: 'Traslados suaves y seguros gracias a ruedas libres de mantenimiento. Sistema de bloqueo en cada rueda brindando seguridad en la entrada y salida del paciente',
                image: CamaHospitalaria2
            },
            {
                text: 'Fabricados en polímero ABS de alta resistencia, desmontables con pin de seguridad, de fácil limpieza y resistentes a la desinfección.',
                image: CamaHospitalaria3
            },
            {
                text: 'compuesto por 4 secciones: 1 fijo y 3 móviles, fabricados en lámina de acero facilitando la limpieza y desinfección.',
                image: CamaHospitalaria4
            }
        ]
    },
    sillaDeRuedas: {
        mainImage: SillaDeRuedas,
        description: 'Imagen Silla de RUEDAS',
        title: 'Silla de ruedas',
        buttonText: '¡Alquilar Silla De Ruedas!',
        info: [
            {
                text: 'Fabricado en acero martillable de medidas estándar para pacientes adultos con tapicería en cordobán que facilita su limpieza.',
                image: SillaDeRuedas3
            },
            {
                text: 'Cuenta con apoyabrazos y reposapiés removibles y ajustables para descanso y comodidad del usuario, proporcionando apoyo adicional.',
                image: SillaDeRuedas2
            },
            {
                text: 'Desplazamientos estables y fáciles de direccionar por sus llantas traseras en poliuretano (PU), se adaptan a todo tipo de terreno contribuyendo con la amortiguación.',
                image: SillaDeRuedas1
            },
            {
                text: 'Equipada con frenos que pueden ser activados por el usuario o por un cuidador cuando sea necesario.',
                image: SillaDeRuedas4
            }
        ]
    },
    caminador: {
        mainImage: Caminador,
        description: 'Imagen Caminador paso a paso',
        title: 'Caminador paso a paso',
        buttonText: '¡Alquilar Caminador!',
        info: [
            {
                text: 'Fabricado en aluminio, se ajusta a la altura del usuario gracias a la fácil graduación en altura por medio del pin.',
                image: Caminador1
            },
            {
                text: 'Cuenta con una empuñadura en vinilo para facilitar su limpieza y agarre ',
                image: Caminador2
            },
            {
                text: 'Desplazamientos estables y fáciles de direccionar por sus llantas traseras en poliuretano (PU) se adaptan a todo tipo de terreno contribuyendo con la amortiguación.',
                image: Caminador3
            },
            {
                text: 'Mecanismo de plegado accionado con la palma de la mano o con un dedo. que facilita su transporte.',
                image: Caminador4
            }
        ]
    },
    comodoSanitario: {
        mainImage: ComodoSanitario,
        description: 'Imagen Comodo Sanitario plegable',
        title: 'Comodo sanitario',
        buttonText: '¡Comprar Comodo Sanitario!',
        info: [
            {
                text: 'Sus ruedas permiten desplazar al usuario en trayectos cortos.',
                image: ComodoSanitario1
            },
            {
                text: 'Permite ajustarse a la altura del usuario por medio del pin. ',
                image: ComodoSanitario2
            },
            {
                text: 'Desplazamientos estables y fáciles de direccionar por sus llantas traseras en poliuretano (PU), se adaptan a todo tipo de terreno contribuyendo con la amortiguación.',
                image: ComodoSanitario3
            },
            {
                text: 'Equipada con sus accesorios son removibles y fáciles de lavar.',
                image: ComodoSanitario4
            }
        ]
    },
    baston: {
        mainImage: Baston,
        description: 'Imagen Baston Cuatro ',
        title: 'Baston',
        buttonText: '¡Comprar Baston!',
        info: [
            {
                text: 'Estructura en aluminio con base pequeña en acero cromado, fácil de armar no requiere ensamblaje. ',
                image: Baston1
            },
            {
                text: 'Empuñadura forrada en vinilo para personas con destreza limitadas y manija curva para mayor estabilidad.',
                image: Baston2
            },
            {
                text: 'Fácil graduación de su altura por medio de pin, según la necesidad del usuario. ',
                image: Baston3
            },
            {
                text: 'Base de cuatro puntos, tapones antideslizantes de goma para una mejor tracción.',
                image: Baston4
            }
        ]
    },
    muleta: {
        mainImage: Muleta,
        description: 'Imagen Muletas Grises',
        title: 'Muletas',
        buttonText: '¡Comprar Muletas!',
        info: [
            {
                text: 'Axilares para muletas elaborados en goma eva, bordes reforzados y acondicionamiento interior corrugado y antideslizante.',
                image: Muleta1
            },
            {
                text: 'Centro reforzado que provee mayor fuerza de carga, contribuye a la independencia de las personas con movilidad reducida.',
                image: Muleta2
            },
            {
                text: 'Se ajustan a la altura del usuario gracias a la fácil graduación por medio del pin y al centro reforzado la muleta que soporta una mayor carga.',
                image: Muleta3
            },
            {
                text: 'Tapón antideslizante de goma reforzado para una mejor tracción, que brindan mayor seguridad durante su uso.',
                image: Muleta4
            }
        ]
    }
}
export const RENT_PROCESS = [
    {
        image: Comunicacion,
        icon: <CommunicationIcon />,
        title: 'Comunicación telefónica o WhatsApp ',
        description: 'Lorem ipsum dolor sit amet consectetur. Enim sed amet in vestibulum varius libero nunc placerat. Lacus venenatis vivamus venenatis parturient lorem massa et arcu.'
    },
    {
        image: Reserva,
        icon: <ReservationIcon />,
        title: 'Realización de reserva del producto',
        description: 'Lorem ipsum dolor sit amet consectetur. Enim sed amet in vestibulum varius libero nunc placerat. Lacus venenatis vivamus venenatis parturient lorem massa et arcu.'
    },
    {
        image: Envio,
        icon: <DeliveryIcon />,
        title: 'Preparación y envió',
        description: 'Lorem ipsum dolor sit amet consectetur. Enim sed amet in vestibulum varius libero nunc placerat. Lacus venenatis vivamus venenatis parturient lorem massa et arcu.'
    },
    {
        image: Instalacion,
        icon: <InstallationIcon />,
        title: 'Instalación y Explicación',
        description: 'Lorem ipsum dolor sit amet consectetur. Enim sed amet in vestibulum varius libero nunc placerat. Lacus venenatis vivamus venenatis parturient lorem massa et arcu.'
    },
    {
        image: Seguimiento,
        icon: <FollowingIcon />,
        title: 'Seguimiento y finalización de servicio',
        description: 'Lorem ipsum dolor sit amet consectetur. Enim sed amet in vestibulum varius libero nunc placerat. Lacus venenatis vivamus venenatis parturient lorem massa et arcu.'
    }
]