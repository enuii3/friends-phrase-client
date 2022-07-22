import Image from 'next/image'

const UserIcon: React.VFC<{ icon: string; iconSize: number }> = ({
  icon,
  iconSize,
}) => {
  return (
    <>
      <Image
        src={icon}
        className="rounded-full"
        alt="icon"
        width={iconSize}
        height={iconSize}
        objectFit="cover"
      />
    </>
  )
}

export default UserIcon
