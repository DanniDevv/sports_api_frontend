export default function Card({ name, imgurl }) {
  return (
    <div className='transition duration-500 ease-in-out transform hover:scale-105'>
      <div className='flex justify-center'>
        <img
          src={imgurl}
          alt={name}
          className='h-52 w-full object-cover rounded-lg' // Tamaño fijo con objeto-cover para recortar la imagen
        />
      </div>
      <h1 className='font-bold text-center text-2xl'>{name}</h1>
    </div>
  )
}
