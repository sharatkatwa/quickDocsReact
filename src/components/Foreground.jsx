import { useRef } from "react"
import Card from "./Card"

function Foreground() {
  const ref = useRef(null)

  const data = [
    {
      desc: "this is dynamic rendring from react hehehe",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "this is dynamic rendring 2 from react hehehe",
      filesize: "2.9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "this is dynamic rendring 3 from react hehehe",
      filesize: ".4mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ]
  return (
    <div
      ref={ref}
      className="fixed z-[3] top-0 left-0 w-full h-screen flex gap-5 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card reference={ref} key={index} data={item} />
      ))}
    </div>
  )
}

export default Foreground
