

export default function AvatarCard() {
  return (
    <>
      <div className="flex flex-col items-center h-40">
        <img
          alt=".."
          className="rounded-full shadow-lg h-full"
          src="/src/asset/user_Test.svg"
          />
        <h5 className="mt-4 text-lg font-base text-gray-900 dark:text-white whitespace-pre">
          User Nickname
        </h5>
      </div>
    </>
  )
  }