import SparkleLink from './sparkle-link'

const PrimaryLinks = () => {
  return (
    <div className='mb-6 flex items-center justify-center gap-6'>
      <SparkleLink href='https://afaqulislam.vercel.app' target='_blank'>
        Portfolio
      </SparkleLink>
      <SparkleLink href='mailto:afaqulislam707@gmail.com'>Email</SparkleLink>
    </div>
  )
}

export default PrimaryLinks
