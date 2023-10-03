import { Button, Checkbox, Label } from 'flowbite-react'
import React from 'react'

const SharedInformation = () => {
    return (
        <div className="sharedInformation rounded-md p-2 shadow-xl flex flex-col gap-4 w-1/2">
            <h3 className='scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0'>Informations partagées</h3>
            <div className="flex max-w-md flex-col gap-4" id="checkbox">
              <div className="flex items-center gap-2">
                <Checkbox id="accept" />
                <Label className="flex" htmlFor="agree">
                  <p>
                    Adresse maison
                  </p>
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="accept"/>
                <Label className="flex" htmlFor="agree">
                  <p>
                    0606060606
                  </p>
                </Label>
              </div>
            </div>
            <Button type="submit" className='mt-3 w-3/12'>
              Modifier
            </Button>
            </div>
  )
}

export default SharedInformation