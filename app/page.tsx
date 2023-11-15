import { Login } from './components/authentication'

export default function Home() {
  return (
    <section
      id='login'
      className='mt-2 lg:mt-8 mx-auto max-w-screen-2xl h-[735px] px-4 py-2 lg:px-8 lg:py-4 bg-green-200 flex justify-center items-center '
      style={{
        backgroundImage: `url(${'/hero.jpg'})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: 'auto',
        height: '735px',
      }}
    >
      <Login />
    </section>
  )
}
