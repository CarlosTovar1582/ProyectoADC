import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ReactPlayer from 'react-player'
//import foto from "../images/imagen1900-920.jpg"

const posts = [
  {
    id: 1,
    title: 'Tablero Abierto',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://i.postimg.cc/JhQNSwBJ/tabs1.png',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://i.postimg.cc/JhQNSwBJ/tabs1.png',
    },
  },
  {
    id: 2,
    title: 'Tablero tapa delantera',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://i.postimg.cc/wM1Dt74c/tabs2.png',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://i.postimg.cc/wM1Dt74c/tabs2.png',
    },
  },
  {
    id: 3,
    title: 'Tablero tapa',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://i.postimg.cc/dVYnfjSb/tabs3.png',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://i.postimg.cc/dVYnfjSb/tabs3.png',
    },
  },
  
  // More posts...
]
const postsMas = [
  {
    id: 1,
    title: 'Tablero Abierto',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://i.postimg.cc/zVJQFj06/empresa1.jpg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://i.postimg.cc/JhQNSwBJ/tabs1.png',
    },
  },
  {
    id: 2,
    title: 'Tablero tapa delantera',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://i.postimg.cc/14S7yBhX/empresa10.jpg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://i.postimg.cc/wM1Dt74c/tabs2.png',
    },
  },
  {
    id: 3,
    title: 'Tablero tapa',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://i.postimg.cc/ykYfZNNz/empresa11.jpg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://i.postimg.cc/dVYnfjSb/tabs3.png',
    },
  },
  {
    id: 4,
    title: 'Tablero Abierto',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://i.postimg.cc/tYSBtH1n/empresa12.jpg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://postimg.cc/tYSBtH1n][img]https://i.postimg.cc/tYSBtH1n/empresa12.jpg',
    },
  },
  {
    id: 5,
    title: 'Tablero tapa delantera',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://i.postimg.cc/rDDQfYWn/empresa13.jpg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://i.postimg.cc/rDDQfYWn/empresa13.jpg',
    },
  },
  {
    id: 6,
    title: 'Tablero tapa',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://i.postimg.cc/Bt5yFyc2/empresa2.jpg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://i.postimg.cc/Bt5yFyc2/empresa2.jpg',
    },
  },
  {
    id: 7,
    title: 'Tablero Abierto',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://i.postimg.cc/dh3Sz0M9/empresa3.jpg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://i.postimg.cc/dh3Sz0M9/empresa3.jpg',
    },
  },
  {
    id: 8,
    title: 'Tablero tapa delantera',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://i.postimg.cc/dL4xHyf1/empresa4.jpg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://i.postimg.cc/dL4xHyf1/empresa4.jpg',
    },
  },
  {
    id: 9,
    title: 'Tablero tapa',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://i.postimg.cc/pmS1xtRM/empresa5.jpg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://i.postimg.cc/pmS1xtRM/empresa5.jpg',
    },
  },
  // More posts...
]

export default function News() {


  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-cabecera">TABLEROS</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 font-cabecera">
          Tablero de distribución con llaves Schneider.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        
        {posts.map((post) => (
            <article
            key={post.id}
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-100 px-48 pb-8 pt-80 sm:pt-80 md:pt-80 lg:pt-80"
          >
            <img src={post.imageUrl} alt="" className="absolute inset-10 h-72 w-72" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          
              <div className="-ml-4 flex items-center gap-x-4">
                <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                  <circle cx={1} cy={1} r={1} />
                </svg>
              
              </div>
            </div>
            
          </article>
            ))}
        
        </div>
      </div>
      {/* DIVISION DE CONTENIDOS  */}
      <br />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-cabecera">MAS TABLEROS</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 font-cabecera">
          Tableros realizados con distinta distribucion.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        
        {postsMas.map((post) => (
            <article
            key={post.id}
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-800 px-48 pb-8 pt-80 sm:pt-80 md:pt-80 lg:pt-80"
          >
            <img src={post.imageUrl} alt="" className="absolute inset-16 w-60 h-60" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          
              <div className="-ml-4 flex items-center gap-x-4">
                <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                  <circle cx={1} cy={1} r={1} />
                </svg>
              
              </div>
            </div>
            
          </article>
            ))}
        
        </div>
      </div>
      {/* Content section Videos */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
            <div className="w-full lg:max-w-lg lg:flex-auto">
              <h2 className="text-3xl font-bold tracking-tight font-cabecera bg-clip-text   sm:text-4xl text-black">
                TABLERO PARA MAQUINA DE HORNO.
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-600 font-cabecera">
                Tablero para maquina horno con tiempo de trabajo de resistencia de calor
              </p>
                <div className='mx-auto bg-black h-96 w-96 items-center justify-center rounded-3xl'> 
                 {/*  <ReactPlayer
                  url={require('../videos/tablero.mp4')}
                  width='100%'
                  height='100%'
                  controls
                  playing
                  muted               
                      
                  />
                   */ }
                  </div>
                </div>
            <div className="w-full lg:max-w-xl lg:flex-auto">
            <div className="w-full lg:max-w-lg lg:flex-auto">
              <h2 className="text-3xl font-bold tracking-tight  bg-clip-text text-black font-cabecera  sm:text-4xl">
              CONTROL DE SIRENAS X WEB
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-600 font-cabecera">
                Este video muestra como se controla por web nuestros procesos de sirena.
              </p>
              <div className='mx-auto bg-black h-96 w-96 items-center justify-center rounded-3xl'> 
                {/* <ReactPlayer
                  url={require('../videos/pantalla_tablero.mp4')}
                  width='100%'
                  height='100%'
                  controls
                  playing
                  muted               
                      
                  />
               */ }
                  </div>
            </div>
           
            </div>
          </div>
        </div> 
    </div>
  )
}
