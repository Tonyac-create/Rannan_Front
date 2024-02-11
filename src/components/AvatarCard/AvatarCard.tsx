import { useEffect, useState } from "react"


export default function AvatarCard(props: any) {

  const { cardFor, userProfile } = props
  const [user, setUser] = useState<{ nickname: string | null, avatar_id: string | null }>({ nickname: null, avatar_id: null })

  useEffect(() => {
    const getUserProfile = async () => {
      if (cardFor === "sidebar") {
        return setUser({ nickname: localStorage.getItem("user.nickname"), avatar_id: localStorage.getItem("user.avatar") })
      } else if (cardFor === "profile") {
        return setUser(userProfile)
      }
    }
    getUserProfile()
  }, [userProfile])

  return (
    <>
      <div className="flex flex-col items-center h-40">
        <img
          alt="User Avatar"
          className="rounded-full h-2/3"
          src={`/src/asset/avatars/${user.avatar_id}.svg`}
        />
        <h5 className="mt-4 text-lg font-base text-gray-900 dark:text-white whitespace-pre">
          {user.nickname}
        </h5>
      </div>
    </>
  )
}