import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

type SubmitButtonProps = {
  isLoading?: boolean
  className?: string
  children?: React.ReactNode
}

const SubmitButton = ({ isLoading, className, children }: SubmitButtonProps) => {
  return (
    <Button disabled={isLoading} className={className ?? 'shad-primary-btn w-full'} type="submit">
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
            className="animate-spin" />
          <span>Loading...</span>
        </div>

      ) : children}
    </Button>
  )
}

export default SubmitButton
