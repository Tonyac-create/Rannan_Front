

export default function AvatarCard(props: any) {

  const { userProfile } = props

  return (
    <>
      <div className="flex flex-col items-center h-40">
        <img
          alt="User Avatar"
          className="rounded-full h-full"
          src={`/src/asset/avatars/${userProfile.avatar_id}.svg`}
          />
        <h5 className="mt-4 text-lg font-base text-gray-900 dark:text-white whitespace-pre">
          {userProfile.nickname}
        </h5>
      </div>
    </>
  )
}