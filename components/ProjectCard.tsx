import Image from "next/image"
interface Props {
    title:string,
    link:string,
    img:string,
    paragraph:string
}

const ProjectCard = ({title, img, link, paragraph}: Props) => {
  return (
    <div>
        <a href={link} target='blank'>
            <div className='relative w-full h-80 border-[1px] border-indigo-700 rounded-lg group'>
                <Image 
                    className='h-full w-full hover:cursor-pointer'
                    width={350}
                    height={350} 
                    src={img} 
                    alt='JetPackGuy' />
                <p className='absolute hidden group-hover:inline-block bottom-0 w-full py-1 bg-indigo-700 text-white text-center font-semibold'>{title}</p>
            </div>
            <p className="py-4 text-md md:text-lg">{paragraph}</p>
        </a>
    </div>
  )
}

export default ProjectCard