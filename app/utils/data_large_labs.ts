

interface dataLaboratory{
  description: string[];
  supervisor: string;
  arrayImages: string[]
  services: string[];
  files: { [key: string]: string }[];
  toolsGuide: { toolName: string; manuals: { [key: string]: string }[] }[];
}

interface keyLaboratories {
  [index: string]: dataLaboratory
}

const data_laboratories_large_array: keyLaboratories[] = [
  {
    'Automática': {  
      description: [

        'Aquí, nos dedicamos a impartir clases y cultivar habilidades en áreas clave como automatización, robótica y sistemas embebidos.',
        
        'Automatización: Sumérgete en el mundo de la automatización industrial y de procesos con equipos avanzados, incluyendo controladores lógicos programables (PLCs).',
        
        'Robótica: Construye tus propios robots, desde móviles hasta brazos industriales, a través de prácticas y proyectos que te enseñarán a programar y operar robots.',
        
        'Sistemas Embebidos: Explora el fascinante universo de los sistemas embebidos utilizando placas de desarrollo, microcontroladores y microprocesadores para diseñar sistemas en áreas como IoT y control de dispositivos.',
        
        'El Laboratorio de Automática te ofrece la oportunidad de adquirir habilidades prácticas y teóricas en automatización, robótica y sistemas, preparándote para enfrentar los desafíos de la industria y la tecnología del futuro. ¡Esperamos inspirar a mentes brillantes como la tuya a explorar nuevas fronteras en la ingeniería y desarrollar soluciones innovadoras para contribuir al progreso de la sociedad! ¡Bienvenido a un emocionante viaje educativo!',
        
      ],
      supervisor: 'Ing. Jesús Manuel Larguero Muñoz',
      arrayImages: ['/laboratories/lab_automatica/images/IMG_LAB_AUTOMATICA_1.JPG', '/laboratories/lab_automatica/images/IMG_LAB_AUTOMATICA_14.JPG', '/laboratories/lab_automatica/images/IMG_LAB_AUTOMATICA_12.JPG',],
      services: [
        'Formación en el uso de herramientas, equipos y tecnologías de automatización',
        'Asesoramiento a estudiantes, investigadores y profesionales de la industria',
        'Acceso a una amplia gama de recursos, incluyendo libros, revistas y artículos en línea',
        'Espacio para llevar a cabo experimentos y proyectos'
      ],
      files: [
        { 'MANUAL_DE_PRACTICAS_DE _AUTOMARIZACIÓN_Y_ROBÓTICA': '/laboratories/lab_automatica/pdf/MANUAL_DE_PRACTICAS_DE__AUTOMATIZACION_Y_ROBOTICA_(1).PDF' },
        { 'MANUAL_DE_PRÁCTICAS_NEUMÁTICA': '/laboratories/lab_automatica/pdf/MANUAL_DE_PRACTICAS_DE__NEUMATICA.PDF' }
      ],
      toolsGuide: [
        
      ]
    }
  },
  {
    'Centro Aeroespacial': {
      description: [
      'El Centro Aeroespacial de la Facultad de Ingeniería de la UACH se especializa en la enseñanza de Ingeniería Aeroespacial y cuenta con diversas instalaciones:',

        'Laboratorio de Propulsión: Equipado con túneles de viento y agua para experimentos de aerodinámica, incluyendo pruebas de arrastre, levantamiento, flujo de fluidos y ensayos de empuje de propulsores.',
        
        'Laboratorio de Aerodinámica y Prototipos: Se enfoca en diseño y construcción de prototipos aeroespaciales, colaborando con empresas para el desarrollo de aeronaves y UAV de ala fija.',
        
        'Laboratorio de Computación (LC12): Dispone de computadoras con software especializado en ingeniería aeroespacial, destacando MatLAB, SOLIDWORKS y NX.',
        
        'Biblioteca y Área de Estudio: Espacio para estudio individual y préstamo de equipo audiovisual.',
        
       ' Aulas de Clase: Dedicadas a la enseñanza teórica de la carrera, desde el 2° hasta el 9° semestre.'
      ],
      supervisor: 'Desconocido',
      arrayImages: 
        ['/laboratories/lab_aeroespacial/images/IMG_LAB_AEROESPACIAL_19.PNG','/laboratories/lab_aeroespacial/images/IMG_LAB_AEROESPACIAL_2.JPG', '/laboratories/lab_aeroespacial/images/IMG_LAB_AEROESPACIAL_4.JPG', '/laboratories/lab_aeroespacial/images/IMG_LAB_AEROESPACIAL_10.JPG']
      ,
      services: [
        
      ],
      files: [
        {'MANUAL_DE_PRACTICAS_DE_LABORATORIO_DE_AEROFLUIDOS': '/laboratories/lab_aeroespacial/pdf/MANUAL_DE_PRACTICAS_DE_LABORATORIO_DE_AEROFLUIDOS.PDF'}
      ],
      toolsGuide: [
        {'toolName': 'TUNEL DE VIENTO', 'manuals': [{'GUIA_PRÁCTICA_DE_USO_DE_TUNEL_DE_AGUA_PARA_VISUALIZACION': '/laboratories/lab_aeroespacial/tools_guides_pdf/GUIA_PRACTICA_DE_USO_DE_TUNEL_DE_AGUA_PARA_VISUALIZACION.PDF'}]},
        {'toolName': ' DE AGUA PARA VISUALIZACION', 'manuals': [{'GUIA_PRACTICA_DE_LA_INSTRUMENTACION_DEL_TUNEL_DE_VIENTO': '/laboratories/lab_aeroespacial/tools_guides_pdf/GUIA_PRACTICA_DE_LA_INSTRUMENTACION_DEL_TUNEL_DE_VIENTO.PDF'}]},
        {'toolName': 'TUNEL DE VIENTO', 'manuals': [{'GUIA_PRÁCTICA_DE_USO_DE_TUNEL_DE_VIENTO': '/laboratories/lab_aeroespacial/tools_guides_pdf/GUIA_PRACTICA_DE_USO_DE_TUNEL_DE_VIENTO.PDF'}]},
                
      ]
    },
  },

  {
    'Elctrónica, Cómputo y Redes': {
      description: [

        'Nuestro laboratorio integral es un espacio tecnológicamente avanzado y vital para el desarrollo académico de estudiantes de diversas ingenierías: Sistemas Computacionales en Hardware, Ciencias de la Computación, Tecnología de Procesos, Aeroespacial, Física y Civil. Ofrecemos un ambiente de aprendizaje multifacético, donde los estudiantes pueden experimentar, optimizar y desarrollar proyectos, adquiriendo competencias cruciales para el entorno laboral.',

        'El laboratorio fomenta habilidades disciplinarias específicas, proporcionando equipos y espacios adecuados para el diseño y desarrollo de proyectos y prototipos. Estos se enfocan en atender necesidades contemporáneas de la comunidad y la industria. Contamos con osciloscopios, fuentes de poder, generadores de ondas, multímetros, bancos de décadas y una infraestructura ethernet de alta velocidad, asegurando una instrumentación precisa para proyectos electrónicos y de redes.',
        
        'Priorizamos la seguridad con medidas como identificación obligatoria, extintores y un entorno climatizado para confort durante las prácticas. Además, nuestros 15 laboratorios están equipados con un total de 430 computadoras, fusionando tecnología y educación. Este espacio facilita el intercambio de experiencias entre estudiantes y profesores, aprovechando la informática para gestionar proyectos de manera eficiente.',
        
        'Además, el laboratorio de redes proporciona un espacio dedicado al aprendizaje integral de redes informáticas, abarcando diseño, desarrollo, experimentación y verificación de proyectos. Equipado con 15 equipos de cómputo, un rack de 19 con conexiones cableadas, switches y routers, los estudiantes realizan prácticas de conexión en un entorno que replica las condiciones del mundo laboral. Los equipos cuentan con el software necesario para prácticas y proyectos, permitiendo a los estudiantes adquirir habilidades prácticas en Tecnologías de la Información.',
      ],
      supervisor: 'Ing. Ramón Anchondo Pérez',
      arrayImages: ['/laboratories/lab_computo/images/IMG_LAB_COMPUTO_4.JPG', '/laboratories/lab_computo/images/IMG_LAB_COMPUTO_8.JPG', '/laboratories/lab_redes/images/IMG_LAB_REDES_10.JPEG', '/laboratories/lab_redes/images/IMG_LAB_REDES_7.JPEG', '/laboratories/lab_redes/images/IMG_LAB_REDES_6.JPG'],
      services: [
        ''
      ],
      files: [
        {'MANUAL_DE_PRÁCTICAS_DE_ELECTRONICA_ANALOGICA': '/laboratories/lab_electronica/pdf/MANUAL_DE_PRACTICAS_DE_ELECTRONICA_ANALOGICA.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_ELECTRONICA_DIGITAL': '/laboratories/lab_electronica/pdf/MANUAL_DE_PRACTICAS_DE_ELECTRONICA_DIGITAL.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_ANALISIS_DE_CIRCUITOS_ELECTRICOS': '/laboratories/lab_electronica/pdf/MANUAL_DE_PRACTICAS_DE_ANALISIS_DE_CIRCUITOS_ELECTRICOS.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_SISTEMAS_Y_CIRCUITOS': '/laboratories/lab_electronica/pdf/MANUAL_DE_PRACTICAS_DE_SISTEMAS_Y_CIRCUITOS.PDF'},
        { 'MANUAL_DE_PRÁCTICAS_DE_REDES': '/laboratories/lab_redes/pdf/MANUAL_DE_PRACTICAS_DE_REDES.PDF' },
      ],
      toolsGuide: [
        {
          toolName: 'PROGRAMA SAP 2000 V14',
          manuals: [
            {'MANUAL_DE_APLICACIÓN_PARA_EL_PROGRAMA_SAP_2000_V14': '/laboratories/lab_computo/tools_guides_pdf/MANUAL_DE_APLICACION_PARA_EL_PROGRAMA_SAP_2000_V14.PDF'}          ]
        },
        {
          toolName: 'AUTOCAD',
          manuals: [
            { 'MANUAL_DE_AUTOCAD': '/laboratories/lab_computo/tools_guides_pdf/MANUAL_DE_AUTOCAD.PDF' },
            {'MANUAL_DE_DISEÑO_VIAL_AUTOCAD_CIVIL_3D': '/laboratories/lab_computo/tools_guides_pdf/MANUAL_DE_DISENO_VIAL_AUTOCAD_CIVIL_3D.PDF'}
          ]
        },
        {
          toolName: 'MATLAB',
          manuals: [
            {'MANUAL_DE_INTRODUCCIÓN_PARA_MATLAB': '/laboratories/lab_computo/tools_guides_pdf/MANUAL_DE_INTRODUCCION_PARA_MATLAB.PDF'},
            { 'MANUAL_DE_USO_PARA_MATLAB': ' /laboratories/lab_computo/tools_guides_pdf/MANUAL_DE_USO_PARA_MATLAB.PDF' },
           
          ]
        },
        {
          toolName: 'SAAT PRO',
          manuals: [
            { 'MANUAL_DE_STAAD_PRO': '/laboratories/lab_computo/tools_guides_pdf/MANUAL_DE_STAAD_PRO.PDF' },
          ]
        },
        {
          toolName: 'GOOGLE EARTH',
          manuals: [
            { 'MANUAL_DE_TUTORIAL_PARA_GOOGLE_EARTH_PRO': '/laboratories/lab_computo/tools_guides_pdf/MANUAL_DE_TUTORIAL_PARA_GOOGLE_EARTH_PRO_.PDF' },
            { 'MANUAL_DE_USO_PARA_GOOGLE_EARTH': '/laboratories/lab_computo/tools_guides_pdf/MANUAL_DE_USO_PARA_GOOGLE_EARTH.PDF' },

          ]
        },
        {
          toolName: 'GLOBAL MAPPER',
          manuals: [
            { 'MANUAL_DE_USO_DE_GLOBAL_MAPPER': '/laboratories/lab_computo/tools_guides_pdf/MANUAL_DE_USO_DE_GLOBAL_MAPPER_.PDF' },
          ]
        },
        {
          toolName: 'RCSA',
          manuals: [
            { 'MANUAL_DE_USO_PARA_RAM_RCSA': '/laboratories/lab_computo/tools_guides_pdf/MANUAL_DE_USO_PARA_RAM_RCSA.PDF' },
          ]
        },

        {
          toolName: 'SOLID WORKS',
          manuals: [
            { 'MANUAL_DE_USO_PARA_SOLIDWORKS': '/laboratories/lab_computo/tools_guides_pdf/MANUAL_DE_USO_PARA_SOLIDWORKS.PDF' },
          ]
        },
        {
          toolName: 'ARCGIS',
          manuals: [
            { 'MANUAL_INTRODUCTORIO_PARA_ARCGIS_10.2': '/laboratories/lab_computo/tools_guides_pdf/MANUAL_INTRODUCTORIO_PARA_ARCGIS_10_2.PDF' },
            {'MANUAL_DE_TUTORIAL_DE_EDICIÓN_ARCGIS': '/laboratories/lab_computo/tools_guides_pdf/MANUAL_DE_TUTORIAL_DE_EDICION_ARCGIS.PDF'}
                    ]
        },
        {
          toolName: 'CAUTÍN',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_CAUTÍN': '/laboratories/lab_electronica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_CAUTIN.PDF'},
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_CAUTÍN_2': '/laboratories/lab_electronica/tools_guides_pdf/GUIA_CAUTIN.PDF'}
          ]
        },
        {
          toolName: 'MUTÍMETRO',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_MULTÍMETRO': '/laboratories/lab_electronica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_MULTIMETRO.PDF'},
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_MULTÍMETRO_2': '/laboratories/lab_electronica/tools_guides_pdf/GUIA_MULTIMETRO.PDF'}           
        
          ]
        },
        {
          toolName: 'PROTOBAORD',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_PROTOBOARD': '/laboratories/lab_electronica/tools_guides_pdf/GUIA_PROTOBOARD.PDF'},        
          ]
        },
        {
          toolName: 'OSCILOSCOPIO',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_OSILOSCOPIO': '/laboratories/lab_electronica/tools_guides_pdf/GUIA_OSCILOSCOPIO.PDF'},        
          ]
        },
        {
          toolName: 'GENERADOR DE FUNCIONES',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_GENERADOR_DE_FUNCIONES': '/laboratories/lab_electronica/tools_guides_pdf/GUIA_GENERADOR_FUNCIONES.PDF'},        
          ]
        },
        {
          toolName: 'FUENTE',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_FUENTE': '/laboratories/lab_electronica/tools_guides_pdf/GUIA_FUENTE.PDF'},        
          ]
        },
        {
          toolName: 'DECADA DE INDUCTANCIA',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_DECADA_INDUCTANCIA': '/laboratories/lab_electronica/tools_guides_pdf/GUIA_DECADA_INDUCTANCIA.PDF'},        
          ]
        },
      ]
    },
  },
  {
    'Física': {
      description: [
        'Dentro de las Ciencias Básicas, se destaca la rama de la física, una disciplina que estudia las propiedades e interacciones entre la materia y la energía. Gracias a este enfoque, se han establecido principios que explican diversos fenómenos naturales.',

        'Estos principios, fundamentales para comprender el mundo que nos rodea, se aplican de manera consciente o inconsciente en nuestras actividades diarias. Es crucial que cada estudiante de ingeniería reconozca y aplique estos conocimientos derivados de la física. Por esta razón, se enfatiza la importancia de realizar prácticas de laboratorio y de campo, fortaleciendo así las habilidades adquiridas en clase y fomentando un criterio analítico para abordar problemas reales que beneficien a la comunidad local y nacional.',

        'El laboratorio de física actualmente cuenta con equipos didácticos diseñados para cuantificar o cualificar variables, explorando y poniendo a prueba hipótesis desde el movimiento rectilíneo de la mecánica clásica hasta la física atómica. Entre sus proyectos se incluye la determinación de la longitud de onda del hidrógeno mediante la serie de Balmer, evidenciando su compromiso con la investigación y el avance científico.',
      ],
      supervisor: 'Ing. Graciela Carreón Espinoza',
      arrayImages: ['/laboratories/lab_fisica/images/IMG_LAB_FISICA_1.JPG', '/laboratories/lab_fisica/images/IMG_LAB_FISICA_14.JPG', '/laboratories/lab_fisica/images/IMG_LAB_FISICA_8.JPG'],
      services: [
        ''
      ],
      files: [
        {'MANUAL_DE_PRÁCTICAS_DE_DETERMINACIÓN_CALOR_ESPECÍFICO_PARA_SUSTANCIAS_SÓLIDAS': '/laboratories/lab_fisica/pdf/MANUAL_DE_PRACTICAS_DE_DETERMINACION_CALOR_ESPECIFICO_PARA_SUSTANCIAS_SOLIDAS.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_FÍSICA_BÁSICA': '/laboratories/lab_fisica/pdf/MANUAL_DE_PRACTICAS_DE_FISICA_BASICA.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_CALOR': '/laboratories/lab_fisica/pdf/MANUAL_DE_PRACTICAS_DE_CALOR.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_VELOCIDAD_DE_PROPAGACIÓN_DEL_SONIDO': '/laboratories/lab_fisica/pdf/MANUAL_DE_PRACTICAS_DE_VELOCIDAD_DE_PROPAGACION_DEL_SONIDO.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_MECANICA': '/laboratories/lab_fisica/pdf/MANUAL_DE_PRACTICAS_DE_MECANICA.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_FUERZAS_EN_EQUILIBRIO': '/laboratories/lab_fisica/pdf/MANUAL_DE_PRACTICAS_DE_FUERZAS_EN_EQUILIBRIO.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_EXPERIMENTOS_CON_EL_ENTRENADOR_DE_CIRCUITOS_ELÉCTRICOS': '/laboratories/lab_fisica/pdf/MANUAL_DE_PRACTICAS_DE_EXPERIMENTOS_CON_EL_ENTRENADOR_DE_CIRCUITOS_ELECTRICOS.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_SISTEMA_DE_ÓPTICA': '/laboratories/lab_fisica/pdf/MANUAL_DE_PRACTICAS_DE_SISTEMA_DE_OPTICA.PDF'},
        {'MANUAL_DE_PRACTICAS_ELECTRICIDAD_Y_MAGNETISMO': '/laboratories/lab_fisica/pdf/MANUAL_DE_PRACTICAS_ELECTRICIDAD_Y_MAGNETISMO.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_CALIBRACIÓN_DEL_CALORÍMETRO': '/laboratories/lab_fisica/pdf/MANUAL_DE_PRACTICAS_DE_CALIBRACION_DEL_CALORIMETRO.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_MECANICA_DE_MATERIALES_I': '/laboratories/lab_fisica/pdf/MANUAL_DE_PRACTICAS_DE_MECANICA_DE_MATERIALES_I.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_SISTEMA_PARA_EL_ESTUDIO_DE_LOS_FLUIDOS': '/laboratories/lab_fisica/pdf/MANUAL_DE_PRACTICAS_DE_SISTEMA_PARA_EL_ESTUDIO_DE_LOS_FLUIDOS.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_FÍSICA_BÁSICA(1)': '/laboratories/lab_fisica/pdf/MANUAL_DE_PRACTICAS_DE_FISICA_BASICA(1).PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_OSCILACIONES_MECANICAS': '/laboratories/lab_fisica/pdf/MANUAL_DE_PRACTICAS_DE_OSCILACIONES_MECANICAS.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_ONDAS_MECANICAS': '/laboratories/lab_fisica/pdf/MANUAL_DE_PRACTICAS_DE_ONDAS_MECANICAS.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_LABORATORIO_DE_DINAMICA': '/laboratories/lab_fisica/pdf/MANUAL_DE_PRACTICAS_DE_LABORATORIO_DE_DINAMICA.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_FÍSICA_GENERAL_1': '/laboratories/lab_fisica/pdf/MANUAL_DE_PRACTICAS_DE_FISICA_GENERAL_1.PDF'},
        
      ],
      toolsGuide: [
        {
          toolName: 'FUENTE REGULADA DE VOLTAJE',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_FUENTE_REGULADA_DE_VOLTAJE': '/laboratories/lab_fisica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_FUENTE_REGULADA_DE_VOLTAJE.PDF'},
          ]
        },
        {
          toolName: 'BAÑO DE TEMPERATURA CONSTANTE',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_BAÑO_DE_TEMPERATURA_CONSTANTE': '/laboratories/lab_fisica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_BANO_DE_TEMPERATURA_CONSTANTE.PDF'}
          ]
        },
        {
          toolName: 'CRONÓMETRO DIGITAL',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_CRONÓMETRO_DIGITAL': '/laboratories/lab_fisica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_CRONOMETRO_DIGITAL.PDF'}
          ]
        },
        {
          toolName: 'GENERADOR DE CHISPAS',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_GENERADOR_DE_CHISPAS': '/laboratories/lab_fisica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_GENERADOR_DE_CHISPAS.PDF'}
                    ]
        },
        {
          toolName: 'IMPULSO DE AIRE',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_IMPULSOR_DE_AIRE': '/laboratories/lab_fisica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_IMPULSOR_DE_AIRE.PDF'}          ]
        },
        {
          toolName: 'CAÍDA LIBRE',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_SISTEMA_DE_CAÍDA_LIBRE': '/laboratories/lab_fisica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_SISTEMA_DE_CAIDA_LIBRE.PDF'}
          ]
        },
        {
          toolName: 'SISTEMA DE DILATACIÓN',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_SISTEMA_DE_DILATACIÓN': '/laboratories/lab_fisica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_SISTEMA_DE_DILATACION.PDF'}
          ]
        },
        {
          toolName: 'SISTEMA DE ONDAS MECÁNICAS',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_SISTEMA_DE_ONDAS_MECÁNICAS': '/laboratories/lab_fisica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_SISTEMA_DE_ONDAS_MECANICAS.PDF'}
          ]
        },
        {
          toolName: 'SISTEMA DE ÓPTICA',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_SISTEMA_DE_ÓPTICA': '/laboratories/lab_fisica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_SISTEMA_DE_OPTICA.PDF'}
          ]
        },
        {
          toolName: 'SISTEMA DE TIRO PARABÓLICO',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_SISTEMA_DE_TIRO_PARABÓLICO': '/laboratories/lab_fisica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_SISTEMA_DE_TIRO_PARABOLICO.PDF'}
          ]
        },
        {
          toolName: 'SISTEMA DE OSCILACIONES MECÁNICAS',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_SITEMA_DE_OSCILACIONES_MECÁNICAS': '/laboratories/lab_fisica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_SITEMA_DE_OSCILACIONES_MECANICAS.PDF'}
          ]
        },
        {
          toolName: 'SISTEMA DE RESONANCIA DE SONIDO',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_SISTEMA_DE_RESONANCIA_DE_SONIDO': '/laboratories/lab_fisica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_SISTEMA_DE_RESONANCIA_DE_SONIDO.PDF'}
          ]
        },
      ]
    },
  },
  {
    'Fotogrametría': {
      description: [
      
      ],
      supervisor: '',
      arrayImages: ['/laboratories/lab_fotogrametria/images/IMG_LAB_FOTOGRAMETRIA_1.JPG', '/laboratories/lab_fotogrametria/images/IMG_LAB_FOTOGRAMETRIA_9.JPEG', '/laboratories/lab_fotogrametria/images/IMG_LAB_FOTOGRAMETRIA_10.JPG'],
      services: [
        
      ],
      files: [
        {'MANUAL_DE_PRÁCTICAS_DE_FOTOGRAMETRIA': '/laboratories/lab_fotogrametria/pdf/MANUAL_DE_PRACTICAS_DE_FOTOGRAMETRIA.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_FOTOINTERPRETACION': '/laboratories/lab_fotogrametria/pdf/MANUAL_DE_PRACTICAS_DE_FOTOINTERPRETACION.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_FOTOGEOLOGIA': '/laboratories/lab_fotogrametria/pdf/MANUAL_DE_PRACTICAS_DE_FOTOGEOLOGIA.PDF'},
      ],
      toolsGuide: [
        {'toolName': 'ESTEREOSCOPIO DE BOLSILLO', 'manuals': [{'GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_ESTEREOSCOPIO_DE_BOLSILLO': '/laboratories/lab_fotogrametria/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_ESTEREOSCOPIO_DE_BOLSILLO.PDF'}]},
        {'toolName': 'ESTEREOSCOPIO DE ESPEJOS', 'manuals': [{'GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_ESTEREOSCOPIO_DE_ESPEJOS': '/laboratories/lab_fotogrametria/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_ESTEREOSCOPIO_DE_ESPEJOS.PDF'}]},
      ]
    },
  },
  {
    'Geofisíca': {
      description: [
        'Bienvenidos al Laboratorio de Geofísica de la Facultad de ingeniería. Nuestro laboratorio un espacio de aprendizaje, dedicado a impartir clases para desarrollar habilidades y competencias fundamentales en el área de geofísica, geología, minería e ingeniería civil. En el laboratorio se cuenta con una variedad de equipos para la prospección geofísica como:',
        '1.-Equipos eléctricos',
        '2.-Equipos Magnéticos terrestres',
        '3.-Equipos electromagnéticos',
        '4.-Equipos sísmicos de refracción',
        'Nuestro equipo docente está altamente capacitado y experimentado para guiar a los estudiantes a lo largo del proceso educativo, brindando asesorías y apoyo en proyectos, así como prácticas de materias como: Métodos Geofísicos, Geofísica, Sismología, Métodos Eléctricos, Métodos Gravimétricos.',

      ],
      supervisor: '',
      arrayImages: ['/laboratories/lab_geofisica/images/IMG_LAB_GEOFISICA_3.JPEG', ],
      services: [
        
      ],
      files: [
        {'MANUAL_DE_PRÁCTICAS_DE_METODOS_ELECTRICOS': '/laboratories/lab_geofisica/pdf/MANUAL_DE_PRACTICAS_DE_METODOS_ELECTRICOS.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_METODOS_GEOFISICOS': '/laboratories/lab_geofisica/pdf/MANUAL_DE_PRACTICAS_DE_METODOS_GEOFISICOS.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_GRAVIMETICOS': '/laboratories/lab_geofisica/pdf/MANUAL_DE_PRACTICAS_DE_GRAVIMETICOS.PDF'},
      ],
      toolsGuide: [
        {'toolName': 'GUIA PRÁCTICA DE USO DE EQUIPO ELÉCTRICOS STING R1', 'manuals': [{'GUIA_PRÁCTICA_DE_USO_DE_EQUIPO_ELÉCTRICOS_STING_R1': '/laboratories/lab_geofisica/tools_guides_pdf/GUIA_PRACTICA_DE_USO_DE_EQUIPO_ELECTRICOS_STING_R1.PDF'}]},
        {'toolName': 'GUIA PRÁCTICA DE USO DE EQUIPO ELÉCTRICOS SYSCAL JR', 'manuals': [{'GUIA_PRÁCTICA_DE_USO_DE_EQUIPO_ELÉCTRICOS_SYSCAL_JR': '/laboratories/lab_geofisica/tools_guides_pdf/GUIA_PRACTICA_DE_USO_DE_EQUIPO_ELECTRICOS_SYSCAL_JR.PDF'}]},
        {'toolName': 'GUIA PRÁCTICA DE USO DE EQUIPO SISMÓGRAFO ES3000', 'manuals': [{'GUIA_PRÁCTICA_DE_USO_DE_EQUIPO_SISMÓGRAFO_ES3000': '/laboratories/lab_geofisica/tools_guides_pdf/GUIA_PRACTICA_DE_USO_DE_EQUIPO_SISMOGRAFO_ES3000.PDF'}]},
        {'toolName': 'GUIA PRÁCTICA DE USO DE GEORADAR', 'manuals': [{'GUIA_PRÁCTICA_DE_USO_DE_GEORADAR': '/laboratories/lab_geofisica/tools_guides_pdf/GUIA_PRACTICA_DE_USO_DE_GEORADAR.PDF'}]},
        {'toolName': 'GUIA PRÁCTICA DE USO DE MAGNETÓMETRO DE PROTÓN G856AX', 'manuals': [{'GUIA_PRÁCTICA_DE_USO_DE_MAGNETÓMETRO_DE_PROTÓN_G856AX': '/laboratories/lab_geofisica/tools_guides_pdf/GUIA_PRACTICA_DE_USO_DE_MAGNETOMETRO_DE_PROTON_G856AX.PDF'}]}
      ]
    },
  },
  {
    'Geología': {
      description: [
        'Bienvenidos al Laboratorio de Geología de nuestra Universidad, un espacio diseñado para el aprendizaje y desarrollo de habilidades en áreas como geología, petrología, petrografía, paleontología, tectónica y mineralogía, entre otras.',

        'Este laboratorio es un entorno dinámico para la enseñanza y la realización de prácticas tanto en laboratorio como en campo, ofreciendo:',
        
        'Colección de Paleontología: Una rica colección utilizada por docentes y estudiantes para estudiar y clasificar fósiles provenientes tanto del ámbito local como global.',
        
        'Taller de Preparación de Muestras: Un espacio dedicado a la preparación de muestras pétreas, mineralógicas y fosilíferas. Aquí, investigadores, docentes y estudiantes cuentan con equipos especializados para preparar adecuadamente cada muestra, facilitando un análisis detallado.',
        
        'Anfiteatro: Dispone de una extensa colección de muestras pétreas y minerales, permitiendo a alumnos y docentes identificar y describir diferentes tipos de materiales geológicos, tanto locales como internacionales.',
        
        'Laboratorio de Geología 1: Equipado con microscopios avanzados, este laboratorio es ideal para el estudio detallado de rocas y minerales colectados en campo, así como para el desarrollo de investigaciones innovadoras en el ámbito geológico.',
      ],
      supervisor: '',
      arrayImages: ['/laboratories/lab_geologia/images/IMG_LAB_GEOLOGIA_5.JPEG', '/laboratories/lab_geologia/images/IMG_LAB_GEOLOGIA_2.JPG', ],
      services: [
        
      ],
      files: [
      
      ],
      toolsGuide: [
        {'toolName': 'ESMERIL', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_ESMERIL': '/laboratories/lab_geologia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_ESMERIL.PDF'}]},
        {'toolName': 'ESTEREOSCOPIO', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_ESTEREOSCOPIO': '/laboratories/lab_geologia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_ESTEREOSCOPIO.PDF'}]},
        {'toolName': 'MICROSCOPIO', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_MICROSCOPIO': '/laboratories/lab_geologia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_MICROSCOPIO.PDF'}]},
        {'toolName': 'WALKIE TALKIE', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_WALKIE_TALKIE': '/laboratories/lab_geologia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_WALKIE_TALKIE.PDF'}]},
        {'toolName': 'BRIQUETAS', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_BRIQUETAS': '/laboratories/lab_geologia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_BRIQUETAS.PDF'}]},
        {'toolName': 'CORTADORA ACEITE 98107', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_CORTADORA_ACEITE_98107': '/laboratories/lab_geologia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_CORTADORA_ACEITE_98107.PDF'}]},
        {'toolName': 'CORTADORA ACEITE LS18', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_CORTADORA_ACEITE_LS18': '/laboratories/lab_geologia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_CORTADORA_ACEITE_LS18.PDF'}]},
        {'toolName': 'CORTADORA DE AGUA', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_CORTADORA_DE_AGUA': '/laboratories/lab_geologia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_CORTADORA_DE_AGUA.PDF'}]},
        {'toolName': 'LUPA DE CAMPO', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_LUPA_DE_CAMPO': '/laboratories/lab_geologia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_LUPA_DE_CAMPO.PDF'}]},
        {'toolName': 'PANTALLA', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_PANTALLA': '/laboratories/lab_geologia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_PANTALLA.PDF'}]},
        {'toolName': 'PARRILLA', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_PARRILLA': '/laboratories/lab_geologia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_PARRILLA.PDF'}]},
        {'toolName': 'PICA', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_PICA': '/laboratories/lab_geologia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_PICA.PDF'}]},
        {'toolName': 'PULIDORA', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_PULIDORA': '/laboratories/lab_geologia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_PULIDORA.PDF'}]},
        {'toolName': 'VARA DE JACOB', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_VARA_DE_JACOB': '/laboratories/lab_geologia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_VARA_DE_JACOB.PDF'}]},
        {'toolName': 'LÁMINAS DELGADAS', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LÁMINAS_DELGADAS': '/laboratories/lab_geologia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LAMINAS_DELGADAS.PDF'}]},
        
      ]
    },
  },
  {
    'Hidráulica': {
      description: ['El Laboratorio de Hidráulica desempeña un papel crucial en educación e investigación, respaldando asignaturas como Hidráulica, Hidráulica de Canales, Hidrología e Hidrogeología. Además, facilita experimentación en disciplinas vinculadas a las ciencias de la tierra. Es esencial en proyectos de posgrado, contribuyendo a la toma de decisiones informadas sobre efectos ambientales en proyectos de agua. Ofrece servicios de ingeniería especializada en áreas como diseño hidráulico, estudios hidrológicos e hidrogeológicos, evaluación de impacto ambiental y manejo de SIG, abriendo sus servicios a diversos sectores.'],
      supervisor: 'M.I. Heber Chávez',
      arrayImages: ['/laboratories/lab_hidraulica/images/IMG_LAB_HIDRAULICA_1.JPG', '/laboratories/lab_hidraulica/images/IMG_LAB_HIDRAULICA_2.JPG', '/laboratories/lab_hidraulica/images/IMG_LAB_HIDRAULICA_6.JPG',],
      services: [
        ''
      ],
      files: [
        {'FORMATO_10_HC': '/laboratories/lab_hidraulica/pdf/FORMATO_10_HC.PDF'},
        {'FORMATO_11_HC': '/laboratories/lab_hidraulica/pdf/FORMATO_11_HC.PDF'},
        {'FORMATO_2_HC': '/laboratories/lab_hidraulica/pdf/FORMATO_2_HC.PDF'},
        {'FORMATO_3_HC': '/laboratories/lab_hidraulica/pdf/FORMATO_3_HC.PDF'},
        {'FORMATO_4_HC': '/laboratories/lab_hidraulica/pdf/FORMATO_4_HC.PDF'},
        {'FORMATO_5_HC': '/laboratories/lab_hidraulica/pdf/FORMATO_5_HC.PDF'},
        {'FORMATO_6_HC': '/laboratories/lab_hidraulica/pdf/FORMATO_6_HC.PDF'},
        {'FORMATO_7_HC': '/laboratories/lab_hidraulica/pdf/FORMATO_7_HC.PDF'},
        {'FORMATO_8_HC': '/laboratories/lab_hidraulica/pdf/FORMATO_8_HC.PDF'},
        {'FORMATO_9_HC': '/laboratories/lab_hidraulica/pdf/FORMATO_9_HC.PDF'},
        {'MANUAL_DE_PRÁCTICAS_IB502': '/laboratories/lab_hidraulica/pdf/MANUAL_DE_PRACTICAS_IB502.PDF'},
        {'MANUAL_DE_PRÁCTICAS_IB606': '/laboratories/lab_hidraulica/pdf/MANUAL_DE_PRACTICAS_IB606.PDF'},
        {'PRÁCTICA_1': '/laboratories/lab_hidraulica/pdf/PRACTICA_1.PDF'},
        {'PRÁCTICA_10': '/laboratories/lab_hidraulica/pdf/PRACTICA_10.PDF'},
        {'PRÁCTICA_11': '/laboratories/lab_hidraulica/pdf/PRACTICA_11.PDF'},
        {'PRÁCTICA_12': '/laboratories/lab_hidraulica/pdf/PRACTICA_12.PDF'},
        {'PRÁCTICA_2': '/laboratories/lab_hidraulica/pdf/PRACTICA_2.PDF'},
        {'PRÁCTICA_3': '/laboratories/lab_hidraulica/pdf/PRACTICA_3.PDF'},
        {'PRÁCTICA_4': '/laboratories/lab_hidraulica/pdf/PRACTICA_4.PDF'},
        {'PRÁCTICA_5': '/laboratories/lab_hidraulica/pdf/PRACTICA_5.PDF'},
        {'PRÁCTICA_6': '/laboratories/lab_hidraulica/pdf/PRACTICA_6.PDF'},
        {'PRÁCTICA_7': '/laboratories/lab_hidraulica/pdf/PRACTICA_7.PDF'},
        {'PRÁCTICA_8': '/laboratories/lab_hidraulica/pdf/PRACTICA_8.PDF'},
        {'PRÁCTICA_9': '/laboratories/lab_hidraulica/pdf/PRACTICA_9.PDF'},
      ],
      toolsGuide: [
        {
          toolName: 'AFORADOR ULTRASÓNICO THERMO',
          manuals: [
            {'GUÍA_PRÁCTICA_DE_USO_DEL_AFORADOR_ULTRASÓNICO_THERMO': '/laboratories/lab_hidraulica/tools_guides_pdf/GUIA_PRACTICA_DE_USO_DEL_AFORADOR_ULTRASONICO_THERMO.PDF'}
          ]
        },
        {
          toolName: 'CANAL DE PENDIENTE VARIABLE',
          manuals: [
            {'GUÍA_PRÁCTICA_DE_USO_DEL_CANAL_DE_PENDIENTE_VARIABLE': '/laboratories/lab_hidraulica/tools_guides_pdf/GUIA_PRACTICA_DE_USO_DEL_CANAL_DE_PENDIENTE_VARIABLE.PDF'}
          ]
        },
        {
          toolName: 'MEDIDOR DE ESPESORES NOVOTEST',
          manuals: [
            {'GUÍA_PRÁCTICA_DE_USO_DEL_MEDIDOR_DE_ESPESORES_NOVOTEST': '/laboratories/lab_hidraulica/tools_guides_pdf/GUIA_PRACTICA_DE_USO_DEL_MEDIDOR_DE_ESPESORES_NOVOTEST.PDF'}
          ]
        },
        {
          toolName: 'CORRENTÓMETRO MICRO-PRICE GURLEY',
          manuals: [
            {'GUÍA_PRÁCTICA_DE_USO_DE_CORRENTÓMETRO_MICRO-PRICE_GURLEY': '/laboratories/lab_hidraulica/tools_guides_pdf/GUIA_PRACTICA_DE_USO_DE_CORRENTOMETRO_MICRO-PRICE_GURLEY.PDF'}

          ]
        },
        {
          toolName: ' CORRENTÓMETRO PRICE GURLEY',
          manuals: [
            {'GUÍA_PRÁCTICA_DE_USO_DE_CORRENTÓMETRO_PRICE_GURLEY': '/laboratories/lab_hidraulica/tools_guides_pdf/GUIA_PRACTICA_DE_USO_DE_CORRENTOMETRO_PRICE_GURLEY.PDF'},
          ]
        },
        {
          toolName: 'SONDA PIEZOMÉTRICA',
          manuals: [
            {'GUÍA_PRÁCTICA_DE_USO_DE_LA_SONDA_PIEZOMÉTRICA': '/laboratories/lab_hidraulica/tools_guides_pdf/GUIA_PRACTICA_DE_USO_DE_LA_SONDA_PIEZOMETRICA.PDF'}
          ]
        },
        {
          toolName: 'RED CERRADA',
          manuals: [
            {'GUÍA_PRÁCTICA_DE_USO_DE_RED_CERRADA': '/laboratories/lab_hidraulica/tools_guides_pdf/GUIA_PRACTICA_DE_USO_DE_RED_CERRADA.PDF'}
          ]
        },
        {
          toolName: 'BANCO DE GOLPE DE ARIETE',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_BANCO_DE_GOLPE_DE_ARIETE': '/laboratories/lab_hidraulica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_BANCO_DE_GOLPE_DE_ARIETE.PDF'}
          ]
        },
        // {
        //   toolName: 'DENSÍMETRO',
        //   manuals: [
        //     { 'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_DENSÍMETRO': '/laboratories/lab_hidraulica/tools_guides_pdf/GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_TABLERO_DE_GUNT.PDF' },
        //   ]
        // },
        {
          toolName: 'TABLERO DE GUNT',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_TABLERO_DE_GUNT': '/laboratories/lab_hidraulica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_TABLERO_DE_GUNT.PDF'}
          ]
        },
        {
          toolName: 'VISCOSÍMETRO',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_VISCOSÍMETRO': '/laboratories/lab_hidraulica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_VISCOSIMETRO.PDF'}
          ]
        },
        {
          toolName: 'BALANZA',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_BALANZA': '/laboratories/lab_hidraulica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_BALANZA.PDF'}
          ]
        },
        {
          toolName: 'BALANZA HIDROSTÁTICA',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_BALANZA_HIDROSTÁTICA': '/laboratories/lab_hidraulica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_BALANZA_HIDROSTATICA.PDF'}
          ]
        },
        {
          toolName: 'CUBA DANAIDE',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_CUBA_DANAIDE': '/laboratories/lab_hidraulica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_CUBA_DANAIDE.PDF'}
          ]
        },
        {
          toolName: 'MESA DE FLUJO LAMINAR',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_MESA_DE_FLUJO_LAMINAR': '/laboratories/lab_hidraulica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_MESA_DE_FLUJO_LAMINAR.PDF'},
          ]
        },
        {
          toolName: 'PILA AFORADORA',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_PILA_AFORADORA': '/laboratories/lab_hidraulica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_PILA_AFORADORA.PDF'}
          ]
        },
        {
          toolName: 'PONTONES',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_PONTONES': '/laboratories/lab_hidraulica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_PONTONES.PDF'}
          ]
        },
      ]
    },
  },
  {
    'Materiales, Suelos y Asfaltos': {
      description: ['El laboratorio de materiales se dedica al estudio y análisis de las propiedades de los materiales. Está equipado con equipos de prueba y caracterización para determinar propiedades físicas y químicas de diferentes materiales. Los estudiantes e investigadores pueden llevar a cabo investigaciones, realizar pruebas de resistencia, análisis de microestructurasy explorar las propiedades mecánicas, térmicas y eléctricas de los materiales.'],
      supervisor: 'Ing. Jorge Mendoza',
      arrayImages: ['/laboratories/lab_materiales/images/IMG_LAB_MATERIALES_1.JPG', '/laboratories/lab_materiales/images/IMG_LAB_MATERIALES_4.JPG',],
      services: [
        ''
      ],
      files: [
        {'MANUAL_DE_PRÁCTICAS_DE_LABORATORIO_DE_PAVIMENTOS': '/laboratories/lab_materiales/pdf/MANUAL_DE_PRACTICAS_DE_LABORATORIO_DE_PAVIMENTOS.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_LABORATORIO_DE_MECÁNICA_DE_SUELOS_2': '/laboratories/lab_materiales/pdf/MANUAL_DE_PRACTICAS_DE_LABORATORIO_DE_MECANICA_DE_SUELOS_2.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_LABORATORIO_DE_MACÁNICA_DE_SUELOS_1': '/laboratories/lab_materiales/pdf/MANUAL_DE_PRACTICAS_DE_LABORATORIO_DE_MACANICA_DE_SUELOS_1.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_LABORATORIO_DE_CONCRETO': '/laboratories/lab_materiales/pdf/MANUAL_DE_PRACTICAS_DE_LABORATORIO_DE_CONCRETO.PDF'},
      ],
      toolsGuide: [
        {'toolName': 'CILINDROS PARA CONCRETO', 'manuals': [{'GUIA_CILINDROS_PARA_CONCRETO': '/laboratories/lab_materiales/tools_guides_pdf/GUIA_CILINDROS_PARA_CONCRETO.PDF'}]},
        {'toolName': 'DESGASTE DE LOS ANGELES', 'manuals': [{'GUIA_DESGASTE_DE_LOS_ANGELES': '/laboratories/lab_materiales/tools_guides_pdf/GUIA_DESGASTE_DE_LOS_ANGELES.PDF'}]},
        {'toolName': 'C.B.R', 'manuals': [{'GUIA_DE_C.B.R': '/laboratories/lab_materiales/tools_guides_pdf/GUIA_DE_C.B.R.PDF'}]},
        {'toolName': 'COMPRENSION SIMPLE', 'manuals': [{'GUIA_DE_COMPRENSION_SIMPLE': '/laboratories/lab_materiales/tools_guides_pdf/GUIA_DE_COMPRENSION_SIMPLE.PDF'}]},
        {'toolName': 'GRAVIMETRIA Y VOLUMETRIA', 'manuals': [{'GUIA_DE_GRAVIMETRIA_Y_VOLUMETRIA': '/laboratories/lab_materiales/tools_guides_pdf/GUIA_DE_GRAVIMETRIA_Y_VOLUMETRIA.PDF'}]},
        {'toolName': 'LIMITES DE PLASTICIDAD', 'manuals': [{'GUIA_DE_LOS_LIMITES_DE_PLASTICIDAD': '/laboratories/lab_materiales/tools_guides_pdf/GUIA_DE_LOS_LIMITES_DE_PLASTICIDAD.PDF'}]},
        {'toolName': 'PROCTOR STANDAR Y MODIFICADA', 'manuals': [{'GUIA_DE_PROCTOR_STANDAR_Y_MODIFICADA': '/laboratories/lab_materiales/tools_guides_pdf/GUIA_DE_PROCTOR_STANDAR_Y_MODIFICADA.PDF'}]},
        {'toolName': 'REVENIMIENTO', 'manuals': [{'GUIA_DE_REVENIMIENTO': '/laboratories/lab_materiales/tools_guides_pdf/GUIA_DE_REVENIMIENTO.PDF'}]},
        {'toolName': 'TRIAXILAES', 'manuals': [{'GUIA_DE_TRIAXILAES': '/laboratories/lab_materiales/tools_guides_pdf/GUIA_DE_TRIAXILAES.PDF'}]},
        {'toolName': 'VELETAS Y PENETROMETRO DE BOLSILLO', 'manuals': [{'GUIA_DE_VELETAS_Y_PENETROMETRO_DE_BOLSILLO': '/laboratories/lab_materiales/tools_guides_pdf/GUIA_DE_VELETAS_Y_PENETROMETRO_DE_BOLSILLO.PDF'}]},
        {'toolName': 'VIGAS DE CONCRETO', 'manuals': [{'GUIA_DE_VIGAS_DE_CONCRETO': '/laboratories/lab_materiales/tools_guides_pdf/GUIA_DE_VIGAS_DE_CONCRETO.PDF'}]},
        {'toolName': 'PERMEABILIDAD CON CARGA CONSTANTE', 'manuals': [{'GUIA_PRACTICA_DE_PERMEABILIDAD_CON_CARGA_CONSTANTE': '/laboratories/lab_materiales/tools_guides_pdf/GUIA_PRACTICA_DE_PERMEABILIDAD_CON_CARGA_CONSTANTE.PDF'}]},
        {'toolName': 'CORTE DIRECTO', 'manuals': [{'GUÍA_CORTE_DIRECTO': '/laboratories/lab_materiales/tools_guides_pdf/GUIA_CORTE_DIRECTO.PDF'}]},
        {'toolName': 'CONSOLIDACIÓN', 'manuals': [{'GUÍA_DE_CONSOLIDACIÓN': '/laboratories/lab_materiales/tools_guides_pdf/GUIA_DE_CONSOLIDACION.PDF'}]},
        {'toolName': 'PERMEABILIDAD CON CARGA VARIABLE', 'manuals': [{'GUÍA_PRÁCTICA_DE_PERMEABILIDAD_CON_CARGA_VARIABLE': '/laboratories/lab_materiales/tools_guides_pdf/GUIA_PRACTICA_DE_PERMEABILIDAD_CON_CARGA_VARIABLE.PDF'}]},
        {'toolName': 'MALLAS DE GRANULOMETRIA', 'manuals': [{'MANUAL_DE_MALLAS_DE_GRANULOMETRIA': '/laboratories/lab_materiales/tools_guides_pdf/MANUAL_DE_MALLAS_DE_GRANULOMETRIA.PDF'}]},

      ]
    },
  },
  {
    'Metalurgia': {
      description: [
        'Bienvenido al Laboratorio de Metalurgia de nuestra destacada Universidad. Nuestro laboratorio es un espacio de experimentación y aprendizaje, dedicado a impartir clases y desarrollar habilidades en áreas fundamentales como separación de minerales, flotación de minerales y lixiviación de minerales.',
        'Descripción del laboratorio: ',
        '1. Quebradoras, pulverizadoras y molinos: el espacio de quebradoras es donde realizamos el inicio de la metalurgia extractiva, empezamos dándole al mineral el tamaño de partícula deseado a través de las quebradoras, pulverizadoras y molinos.',
        '2. Concentradores gravimétricos: es el espacio en el que después de darle un tamaño adecuado a los minerales se inicia con una separación gravimétrica en alguno de los separadores del laboratorio como el separador magnético, la mesa concentradora, el concentrador knelson.',
        '3. Las celdas de flotación y mesa de rodillos: otros métodos de separación como la flotación se llevan a cabo en las celdas de flotación con las que contamos en el laboratorio, así como también diversos reactivos que ayudan a la correcta separación de los minerales, así como la lixiviación en las botellas, con distintos químicos dependiendo el mineral, se lleva a cabo en las mesas de rodillos para lixiviación.',
        'Contamos con una gran capacitación a los estudiantes por parte de los docentes, que ayudarán al estudiante a desarrollar sus conocimientos a lo largo de su estancia en la carrera, además se proporcionarán asesoramientos y apoyo en sus prácticas.',
      ],
      supervisor: '',
      arrayImages: ['/laboratories/lab_metalurgia/images/IMG_LAB_METALURGIA_12.JPG', '/laboratories/lab_metalurgia/images/IMG_LAB_METALURGIA_8.JPG',],
      services: [
        
      ],
      files: [
        {'MANUAL_DE_PRÁCTICAS_DE_METALURGIA_III': '/laboratories/lab_metalurgia/pdf/MANUAL_DE_PRACTICAS_DE_METALURGIA_III.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_METALURGIA_I': '/laboratories/lab_metalurgia/pdf/MANUAL_DE_PRACTICAS_DE_METALURGIA_I.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_METALURGIA_IV': '/laboratories/lab_metalurgia/pdf/MANUAL_DE_PRACTICAS_DE_METALURGIA_IV.PDF'},
        {'MANUAL_DE_PRÁCTICAS_METALURGIA_II': '/laboratories/lab_metalurgia/pdf/MANUAL_DE_PRACTICAS_METALURGIA_II.PDF'},
      ],
      toolsGuide: [
        {'toolName': 'FILTRO DE PRENSA', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_FILTRO_DE_PRENSA': '/laboratories/lab_metalurgia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_FILTRO_DE_PRENSA.PDF'}]},
        {'toolName': 'HORNO DE SECADO', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_HORNO_DE_SECADO': '/laboratories/lab_metalurgia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_HORNO_DE_SECADO.PDF'}]},
        {'toolName': 'MOLINO DE BOLAS', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_MOLINO_DE_BOLAS': '/laboratories/lab_metalurgia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_MOLINO_DE_BOLAS.PDF'}]},
        {'toolName': 'RO-TAP', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_RO-TAP': '/laboratories/lab_metalurgia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_RO-TAP.PDF'}]},
        {'toolName': 'SEPARADOR MAGNÉTICO', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_SEPARADOR_MAGNÉTICO': '/laboratories/lab_metalurgia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_SEPARADOR_MAGNETICO.PDF'}]},
        {'toolName': 'CELDA DE FLOTACIÓN', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_CELDA_DE_FLOTACIÓN': '/laboratories/lab_metalurgia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_CELDA_DE_FLOTACION.PDF'}]},
        {'toolName': 'MESA CONCENTRADORA', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_MESA_CONCENTRADORA': '/laboratories/lab_metalurgia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_MESA_CONCENTRADORA.PDF'}]},
        {'toolName': 'MANEJO DE LA MUFLA', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_MUFLA': '/laboratories/lab_metalurgia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_MUFLA.PDF'}]},
      ]
    },
  },
  {
    'Minerología': {
      description: [
        'Los minerales, sustancias inorgánicas naturales, son esenciales en la formación de rocas y su estudio es crucial tanto desde perspectivas geológicas como industriales. Cada mineral posee una composición y estructura química únicas, otorgándole propiedades físicas específicas y una estructura cristalina definida.',

        'Para ingenieros en Minas y Geología, es vital distinguir los diferentes tipos de rocas existentes en la Tierra. Estas se componen de uno o más minerales, y a veces de sustancias amorfas, formando masas significativas e independientes geológicamente. Se clasifican en magmáticas, metamórficas y sedimentarias, según su origen.',

                'Es igualmente importante que los estudiantes en estas disciplinas identifiquen los diversos instrumentos de laboratorio, como el microscopio, que permite una mejor visualización de la estructura, granulometría, forma y composición de rocas tales como la caliza, antracita, arcilla y yeso. Observando sus características clave (color, clivaje, fractura, dureza, raspadura, peso específico, reacciones químicas), pueden aplicar teoría a la práctica, enriqueciendo su experiencia en campos como química y geología.',
      ],
      supervisor: '',
      arrayImages: ['/laboratories/lab_mineralogia/images/IMG_LAB_MINERALOGIA_6.JPG', '/laboratories/lab_mineralogia/images/IMG_LAB_MINERALOGIA_13.JPG', '/laboratories/lab_mineralogia/images/IMG_LAB_MINERALOGIA_4.JPG', '/laboratories/lab_mineralogia/images/IMG_LAB_MINERALOGIA_8.JPG'],
      services: [
        
      ],
      files: [
        {'MANUAL_DE_PRÁCTICAS_DE_MINERALOGIA': '/laboratories/lab_mineralogia/pdf/MANUAL_DE_PRACTICAS_DE_MINERALOGIA.PDF'}
      ],
      toolsGuide: [
      ]
    },
  },
  {
    'Química': {
      description: [
        'El Laboratorio de Química tiene como objetivo brindar a los estudiantes de ingeniería una experiencia práctica que complemente sus conocimientos teóricos en materias como química general, química orgánica, química analítica y fisicoquímica.',

        'En fisicoquímica, se busca que los alumnos adquieran comprensión práctica del comportamiento de la materia, fomentando una perspectiva interdisciplinaria y sostenible en sus proyectos.',

        'La materia de química general tiene como propósito que los estudiantes adquieran conocimientos prácticos de la química inorgánica, desarrollando habilidades para observar, cuantificar e interpretar fenómenos químicos y contribuir al desarrollo de tecnologías sustentables.',

        'En química orgánica, se pretende que los alumnos obtengan conocimientos sobre estructuras, propiedades y reacciones de compuestos orgánicos, vinculándolos con procesos químicos y aplicaciones ingenieriles sostenibles.',

        'La materia de química analítica busca desarrollar habilidades en los futuros ingenieros, desde análisis químicos cualitativos básicos hasta análisis precisos de muestras minerales, preparándolos para el manejo de instrumentos de alta tecnología.',

        'Contamos con un área de trabajo óptima para realizar prácticas de laboratorio de manera segura tanto para estudiantes como para docentes, proporcionando un entorno propicio para el aprendizaje práctico de la química.',

      ],
      supervisor: 'C. Jesús Pérez Carreón',
      arrayImages: ['/laboratories/lab_quimica/images/IMG_LAB_QUIMICA_7.JPG', '/laboratories/lab_quimica/images/IMG_LAB_QUIMICA_3.JPG'],
      services: [
        ''
      ],
      files: [
        {'MANUAL_DE_PRÁCTICAS_DE_QUÍMICA_ANALITICA': '/laboratories/lab_quimica/pdf/MANUAL_DE_PRACTICAS_DE_QUIMICA_ANALITICA.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_QUÍMICA_2': '/laboratories/lab_quimica/pdf/MANUAL_DE_PRACTICAS_DE_QUIMICA_2.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_QUÍMICA_1': '/laboratories/lab_quimica/pdf/MANUAL_DE_PRACTICAS_DE_QUIMICA_1.PDF'},
        {'MANUAL_DE_PRÁCTICAS_DE_FISICOQUIMICA': '/laboratories/lab_quimica/pdf/MANUAL_DE_PRACTICAS_DE_FISICOQUIMICA.PDF'},
      ],
      toolsGuide: [
        {
          toolName: 'HORNO DE SECADO',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_HORNO_DE_SECADO': '/laboratories/lab_quimica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_HORNO_DE_SECADO.PDF'},
          ]
        },
        {
          toolName: 'POTENCIÓMETRO',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_POTENCIÓMETRO': '/laboratories/lab_quimica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_POTENCIOMETRO.PDF'},
          ]
        },
        {
          toolName: 'BALANZA ANALÍTICA',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_BALANZA_ANALÍTICA': '/laboratories/lab_quimica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_BALANZA_ANALITICA.PDF'}
          ]
        },
        {
          toolName: 'BALANZA GRANATARIA',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_BALANZA_GRANATARIA': '/laboratories/lab_quimica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_BALANZA_GRANATARIA.PDF'}
          ]
        },
        {
          toolName: 'CENTRÍFUGA',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_CENTRÍFUGA': '/laboratories/lab_quimica/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_CENTRIFUGA.PDF'},
          ]
        },
      ]
    },
  },
  {
    'Sanitaria': {
      description: [
        'Este espacio dedicado a la enseñanza y práctica se centra en áreas clave, como el diseño de sistemas de tratamiento de agua, abastecimiento de agua potable, evacuación y tratamiento de aguas residuales, reúso de aguas tratadas y evaluación de la calidad del agua. Su misión es contribuir al cuidado del medio ambiente y prevenir riesgos para la salud asociados al consumo de agua potable.',

        'El laboratorio, además de sus funciones académicas e investigativas, presta servicios externos a la industria, dependencias gubernamentales y la comunidad en general. Sus principales funciones son académicas, de investigación y servicio externo, brindando apoyo tanto al aprendizaje de los estudiantes como a la generación de conocimiento a través de proyectos innovadores.',

        'En la dimensión académica, se busca que los alumnos relacionen los parámetros de calidad del agua con el diseño y control de sistemas de tratamiento, siguiendo la normatividad vigente. En investigación, el laboratorio fomenta la generación de conocimiento y la solución de problemas prácticos, promoviendo el trabajo en equipo. En el servicio externo, se ofrece una variedad de servicios basados en la legislación mexicana vigente, abordando necesidades relacionadas con caracterización del agua, control de descargas, muestreo y aforo, espectroscopía de absorción atómica, entre otros.',

        'El Laboratorio de Ingeniería Sanitaria tiene como objetivo proporcionar servicios de alta calidad, contribuyendo al mejoramiento de la Ingeniería Ambiental y el bienestar social de manera sustentable y ética. Su enfoque de Responsabilidad Social se extiende por todo el país, utilizando la mejor tecnología y promoviendo la mejora continua en la calidad de vida.',

      ],
      supervisor: 'Ing. Irma Peralta Segovia',
      arrayImages: ['/laboratories/lab_sanitaria/images/IMG_LAB_SANITARIA_2.JPG', '/laboratories/lab_sanitaria/images/IMG_LAB_SANITARIA_4.JPG', '/laboratories/lab_sanitaria/images/IMG_LAB_SANITARIA_7.JPG'],
      services: [
        ''
      ],
      files: [
        { 'MANUAL_DE_PRÁCTICAS_DE_LABORATORIO_DE_SANITARIA': '/laboratories/lab_sanitaria/pdf/MANUAL_DE_PRACTICAS_DE_LABORATORIO_DE_SANITARIA.PDF' },
      ],
      toolsGuide: [
        {
          toolName: 'COLORÍMETRO AQUA-TESTER DE HELLIGE',
          manuals: [
            { 'GUIA_PRÁCTICA_DE_USO_Y_MANEJO_DEL_COLORÍMETRO_AQUA-TESTER_DE_HELLIGE': '/laboratories/lab_sanitaria/tools_guides_pdf/GUIA_PRACTICA_DE_USO_Y_MANEJO_DEL_COLORIMETRO_AQUA-TESTER_DE_HELLIGE.PDF' },
          ]
        },
        {
          toolName: 'COLORÍMETRO PARA CLORO HACH',
          manuals: [
            { 'GUIA_PRÁCTICA_DE_USO_Y_MANEJO_DEL_COLORÍMETRO_PARA_CLORO_HACH': '/laboratories/lab_sanitaria/tools_guides_pdf/GUIA_PRACTICA_DE_USO_Y_MANEJO_DEL_COLORIMETRO_PARA_CLORO_HACH.PDF' },
          ]
        },
        {
          toolName: 'MEDIDOR DE CLORO EXSTIK CL200',
          manuals: [
            { 'GUIA_PRÁCTICA_DE_USO_Y_MANEJO_DEL_MEDIDOR_DE_CLORO_EXSTIK_CL200': '/laboratories/lab_sanitaria/tools_guides_pdf/GUIA_PRACTICA_DE_USO_Y_MANEJO_DEL_MEDIDOR_DE_CLORO_EXSTIK_CL200.PDF' },
          ]
        },
        {
          toolName: 'MEDIDOR DE PH HANNA HI 2210',
          manuals: [
            { 'GUIA_PRÁCTICA_DE_USO_Y_MANEJO_DEL_MEDIDOR_DE_PH_HANNA_HI_2210': '/laboratories/lab_sanitaria/tools_guides_pdf/GUIA_PRACTICA_DE_USO_Y_MANEJO_DEL_MEDIDOR_DE_PH_HANNA_HI_2210.PDF' },
          ]
        },
        {
          toolName: 'OXÍGENO DISUELTO YSI-5100',
          manuals: [
            { 'GUIA_PRÁCTICA_DE_USO_Y_MANEJO_DEL_OXÍGENO_DISUELTO_YSI-5100': '/laboratories/lab_sanitaria/tools_guides_pdf/GUIA_PRACTICA_DE_USO_Y_MANEJO_DEL_OXIGENO_DISUELTO_YSI-5100.PDF' },
          ]
        },
        {
          toolName: ' CENTRIFUGA SOLVAT C-40',
          manuals: [
            { 'GUIA_PRÁCTICA_DE_USO_Y_MANEJO_DE_LA_CENTRIFUGA_SOLVAT_C-40': '/laboratories/lab_sanitaria/tools_guides_pdf/GUIA_PRACTICA_DE_USO_Y_MANEJO_DE_LA_CENTRIFUGA_SOLVAT_C-40.PDF' },
          ]
        },
        {
          toolName: 'APARATOS DE JARRAS',
          manuals: [
            { 'GUIA_PRÁCTICA_DE_USO_Y_MANEJO_DE_LOS_APARATOS_DE_JARRAS': '/laboratories/lab_sanitaria/tools_guides_pdf/GUIA_PRACTICA_DE_USO_Y_MANEJO_DE_LOS_APARATOS_DE_JARRAS.PDF' },
          ]
        },
        
      ]
    },
  },
  {
    'Taller de máquinas y herramientas': {
      description: [
      
      'El Laboratorio de Máquinas y Herramientas de la Facultad de Ingeniería tiene el objetivo de desarrollar habilidades fundamentales en el manejo de instrumentos de medición y herramientas manuales, así como en el uso de máquinas-herramienta. Esto incluye el conocimiento de las normas de seguridad y su manejo adecuado, destacando la relevancia de estas competencias en la formación del Ingeniero.',

      'Los contenidos se dividen en tres áreas clave:',

      'Introducción al Taller Mecánico: Enfocado en familiarizar a los estudiantes con el funcionamiento y las normas de seguridad de herramientas manuales y máquinas básicas.',

      'Metrología y Precisión en Mediciones Mecánicas: Aborda el uso correcto de instrumentos de medición, comprendiendo las normativas, lineamientos y tolerancias en mediciones mecánicas.',

      'Manejo de Máquinas-Herramientas: Capacita en el uso adecuado de instrumentos de medición y trazo, así como en el manejo de herramientas manuales para el corte y desbaste de materiales. También se enseña sobre las máquinas y herramientas comunes en la industria y su funcionamiento básico.',

      'Este laboratorio es un recurso esencial que apoya y motiva a los estudiantes a crear proyectos, potenciando su desarrollo como ingenieros, independientemente de su especialidad. A través de prácticas de laboratorio, los alumnos adquieren habilidades y destrezas en el manejo de máquinas herramientas, fundamentales en el ámbito industrial.',
      ],
      supervisor: '',
      arrayImages: ['/laboratories/lab_maquinas/images/IMG_LAB_MAQUINAS_1.JPG', '/laboratories/lab_maquinas/images/IMG_LAB_MAQUINAS_2.JPG', '/laboratories/lab_maquinas/images/IMG_LAB_MAQUINAS_4.JPEG', '/laboratories/lab_maquinas/images/IMG_LAB_MAQUINAS_9.JPG'],
      services: [
        
      ],
      files: [
        {'PRÁCTICAS_DE_METROLOGIA': '/laboratories/lab_maquinas/pdf/MANUAL_DE_PRACTICAS_DE_METROLOGIA.PDF'}
      ],
      toolsGuide: [
        {'toolName': 'CALIBRADOR DE CARÁTULA', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_CALIBRADOR_DE_CARÁTULA': '/laboratories/lab_maquinas/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_CALIBRADOR_DE_CARATULA.PDF'}]},
        {'toolName': 'CALIBRADOR DIGITAL', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_CALIBRADOR_DIGITAL': '/laboratories/lab_maquinas/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_CALIBRADOR_DIGITAL.PDF'}]},
        {'toolName': 'CALIBRADOR VERNIER', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_CALIBRADOR_VERNIER': '/laboratories/lab_maquinas/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_CALIBRADOR_VERNIER.PDF'}]},
        {'toolName': 'COMPÁS DE EXTERIORES', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_COMPÁS_DE_EXTERIORES': '/laboratories/lab_maquinas/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_COMPAS_DE_EXTERIORES.PDF'}]},
        {'toolName': 'COMPÁS DE INTERIORES', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_COMPÁS_DE_INTERIORES': '/laboratories/lab_maquinas/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_COMPAS_DE_INTERIORES.PDF'}]},
        {'toolName': 'METALERO', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_METALERO': '/laboratories/lab_maquinas/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_METALERO.PDF'}]},
        {'toolName': 'MICRÓMETRO', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_MICRÓMETRO': '/laboratories/lab_maquinas/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_MICROMETRO.PDF'}]},
        {'toolName': 'TORNO DE PRECISIÓN', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_TORNO_DE_PRECISIÓN': '/laboratories/lab_maquinas/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_TORNO_DE_PRECISION.PDF'}]},
        {'toolName': 'ESCUADRAS UNIVERSALES', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LAS_ESCUADRAS_UNIVERSALES': '/laboratories/lab_maquinas/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LAS_ESCUADRAS_UNIVERSALES.PDF'}]},
        {'toolName': 'REGLAS DE ACERO', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LAS_REGLAS_DE_ACERO': '/laboratories/lab_maquinas/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LAS_REGLAS_DE_ACERO.PDF'}]},
        {'toolName': 'CORTADORA LASER', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_CORTADORA_LASER': '/laboratories/lab_maquinas/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_CORTADORA_LASER.PDF'}]},
        {'toolName': 'BLOQUES DE PATRÓN', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LOS_BLOQUES_DE_PATRÓN': '/laboratories/lab_maquinas/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LOS_BLOQUES_DE_PATRON.PDF'}]},
        {'toolName': 'CALIBRADORES TELESCÓPICOS', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LOS_CALIBRADORES_TELESCÓPICOS': '/laboratories/lab_maquinas/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LOS_CALIBRADORES_TELESCOPICOS.PDF'}]},
        {'toolName': 'VERNIER DE ALTURAS', 'manuals': [{'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LOS_VERNIER_DE_ALTURAS': '/laboratories/lab_maquinas/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LOS_VERNIER_DE_ALTURAS.PDF'}]},
        
      ]
    },
  },
  {
    'Topografía': {
      description: [

        'El Laboratorio de Topografía desempeña un papel crucial al apoyar las prácticas de topografía 1 y 2, proporcionando equipos esenciales como tripié, estadal, balizas, brújulas, tránsitos digitales y niveles automáticos. Además, dispone de un espacio tipo almacén para almacenar todo el equipo.',

        'Los estudiantes adquieren habilidades en mediciones angulares horizontales y verticales, así como mediciones inclinadas y horizontales con cinta. Estas mediciones se plasman en un plano y pueden realizarse en diversos tipos de terrenos o construcciones. El laboratorio brinda apoyo a carreras como Civil, Sistemas Topográficos, Geología, Minas y la Maestría en Vías Terrestres.',
        
        'Además, el laboratorio colabora con maestrías como Vías Terrestres y Hidrología Superficial, proporcionando equipos avanzados como GPS, Dron y estaciones totales para proyectos de investigación y tesis. Los estudiantes solicitan el equipo mediante un resguardo, dejando su credencial universitaria como garantía. Al devolver el equipo, se verifica su buen funcionamiento antes de devolver la credencial al alumno.',
        
      ],
      supervisor: 'Ing. Reynaldo Martínez Armenta',
      arrayImages: ['/laboratories/lab_topografia/images/IMG_LAB_TOPOGRAFIA_1.JPG', '/laboratories/lab_topografia/images/IMG_LAB_TOPOGRAFIA_2.JPG', '/laboratories/lab_topografia/images/IMG_LAB_TOPOGRAFIA_7.JPEG'],
      services: [
        ''
      ],
      files: [
        { 'MANUAL_DE_PRÁCTICAS_DE_GEODESIA_1': '/laboratories/lab_topografia/pdf/MANUAL_DE_PRACTICAS_DE_GEODESIA_1.PDF' },
        { 'MANUAL_DE_PRÁCTICAS_DE_GEODESIA_2': '/laboratories/lab_topografia/pdf/MANUAL_DE_PRACTICAS_DE_GEODESIA_2.PDF' },
        { 'MANUAL_DE_PRÁCTICAS_DE_TOPOGRAFÍA_1': '/laboratories/lab_topografia/pdf/MANUAL_DE_PRACTICAS_DE_TOPOGRAFIA_1.PDF' },
        { 'MANUAL_DE_PRÁCTICAS_DE_TOPOGRAFÍA_2': '/laboratories/lab_topografia/pdf/MANUAL_DE_PRACTICAS_DE_TOPOGRAFIA_2.PDF' },
        { 'MANUAL_DE_PRÁCTICAS_DE_TOPOGRAFÍA_APLICADA': '/laboratories/lab_topografia/pdf/MANUAL_DE_PRACTICAS_DE_TOPOGRAFIA_APLICADA.PDF' },
        { 'MANUAL_DE_PRÁCTICAS_DE_TOPOGRAFÍA_AVANZADA': '/laboratories/lab_topografia/pdf/MANUAL_DE_PRACTICAS_DE_TOPOGRAFIA_AVANZADA.PDF' },
        { 'MANUAL_DE_PRÁCTICAS_DE_TOPOGRAFÍA_SUBTERRÁNEA': '/laboratories/lab_topografia/pdf/MANUAL_DE_PRACTICAS_DE_TOPOGRAFIA_SUBTERRANEA.PDF' },
      ],
      toolsGuide: [
        {
          toolName: 'CASCO DE SEGURIDAD',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_CASCO_DE_SEGURIDAD': '/laboratories/lab_topografia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_CASCO_DE_SEGURIDAD.PDF'},
          ]
        },
        {
          toolName: 'MANEJO DEL CLISIMETRO',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_CLISIMETRO': '/laboratories/lab_topografia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_CLISIMETRO.PDF'},
          ]
        },
        {
          toolName: 'ESTADAL DE ALUMINIO DE 4M',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_ESTADAL_DE_ALUMINIO_DE_4M': '/laboratories/lab_topografia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_ESTADAL_DE_ALUMINIO_DE_4M.PDF'},
          ]
        },
        {
          toolName: 'ESTADAL DE ALUMINIO DE 5M',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_ESTADAL_DE_ALUMINIO_DE_4M': '/laboratories/lab_topografia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_ESTADAL_DE_ALUMINIO_DE_4M.PDF'},
          ]
        },
        {
          toolName: 'GPS NAVEGADOR',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_GPS_NAVEGADOR': '/laboratories/lab_topografia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_GPS_NAVEGADOR.PDF'},
          ]
        },
        {
          toolName: 'TEODOLITO ELECTRÓNICO',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_TEODOLITO_ELECTRÓNICO': '/laboratories/lab_topografia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_TEODOLITO_ELECTRONICO.PDF'},
          ]
        },
        {
          toolName: 'TRIPIE',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL_TRIPIE': '/laboratories/lab_topografia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL_TRIPIE.PDF'},
          ]
        },
        {
          toolName: 'NIVEL AUTOMÁTICO',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DEL__NIVEL_AUTOMÁTICO': '/laboratories/lab_topografia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DEL__NIVEL_AUTOMATICO.PDF'},
          ]
        },
        {
          toolName: 'BALIZA DE MADERA',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_BALIZA_DE_MADERA': '/laboratories/lab_topografia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_BALIZA_DE_MADERA.PDF'},
          ]
        },
        {
          toolName: 'BRÚJULA DE BOLSILLO TIPO BRUNTON',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_LA_BRÚJULA_DE_BOLSILLO_TIPO_BRUNTON': '/laboratories/lab_topografia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_LA_BRUJULA_DE_BOLSILLO_TIPO_BRUNTON.PDF'},
          ]
        },
        {
          toolName: 'MANEJO DE PLOMADAS',
          manuals: [
            {'GUÍA_PRÁCTICA_PARA_EL_USO_Y_MANEJO_DE_PLOMADAS': '/laboratories/lab_topografia/tools_guides_pdf/GUIA_PRACTICA_PARA_EL_USO_Y_MANEJO_DE_PLOMADAS.PDF'},
          ]
        },
      ]
    },
  },

];

export default data_laboratories_large_array





// {
//   '': {
//     description: [
     
//     ],
//     supervisor: '',
//     arrayImages: [

//     ],
//     services: [
      
//     ],
//     files: [
     
//     ],
//     toolsGuide: [
//       {
//         toolName: '',
//         manuals: [
//           { '': '' },
//         ]
//       },
      
//     ]
//   },
// },