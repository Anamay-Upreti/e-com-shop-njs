"use client"
import Dropzone, {FileRejection} from "react-dropzone"
import { cn } from "@/lib/utils"
import { useState, useTransition } from "react"
import { Image, Loader2, MousePointerSquareDashedIcon } from "lucide-react"

const Page = () => {

   const [isDragOver, setIsDragOver] = useState<boolean>(false)

  const onDropRejected = () =>{
         
  }
  const onDropAccepted = () =>{
   console.log("accepted")
  }

  const isUploading = false
  const isPending = useTransition()
 
  return (
    <div className={cn("relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",{
        "ring-blue-900/25 bg-blue-900/10": isDragOver,

    }
    
    
    )}>
      <div  className="relative flex flex-1 flex-col items-center justify-center w-full">
        <Dropzone onDropRejected={onDropRejected} onDropAccepted={onDropAccepted} accept={{
          "image/png": [".png"],
          "image/jpeg": [".jpeg"],
          "image/jpg": [".jpg"],
        }} 
        onDragEnter={() => setIsDragOver(true)}
        onDragLeave={() => setIsDragOver(false)}
        >
         {({getRootProps, getInputProps}) =>(
              <div className="h-full w-full flex-1 flex flex-col items-center justify-center" {...getRootProps()}> 
               <input {...getInputProps()} />
               {isDragOver ? <MousePointerSquareDashedIcon className="h-6 w-6 bg-zinc-500 mb-2"/> : isUploading ? <Loader2 className="animate-spin h-6 w-6 bg-zinc-500 mb-2"/> : <Image className="h-6 w-6 text-zinc-500 mb-2"/> }
              </div>
         )}
          
         
        </Dropzone>
      </div>
    </div>
  )
}

export default Page