import Image from 'next/image'

export default function MyProfilePic() {
  return (
    <section>
      <Image
      className='border-4 border-black dark:border-slate-500
        drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
        src="/images/thomas shelby.jpg"
        width={200}
        height={200}
        alt='Roshaan Siddiqui'
        priority={true}
      />
    </section>
  )
}
