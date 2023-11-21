import { Button, Checkbox, Label } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SharedInformation = ({ informationsShare }: any) => {
  return (
    <div className="sharedInformation rounded-md p-2 shadow-xl flex flex-col gap-4 sm:w-1/2">
      <h3 className='scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0'>Informations partagées</h3>
      {informationsShare && informationsShare.length > 0 ?
        informationsShare.map((data: any) => {
          return (
            <div className="flex items-center gap-2">
              <Label
                className="flex grow"
                htmlFor="agree"
              >
                <p>
                  {data.value}
                </p>
              </Label>
            </div>
          )
        }) : <p>Pas d'informations partagées</p>
      }
      <div className="flex items-center gap-2">
        <Link to="/shares">
          <Button>Modifier mes partages</Button>
        </Link>
      </div>
    </div>
  )
}

export default SharedInformation