import { FaRegFileAlt } from "react-icons/fa"
import { LuDownload } from "react-icons/lu"
import { IoClose } from "react-icons/io5"
import { motion } from "framer-motion"

function Card({ data, reference }) {
  // console.log(data.tag.tagColor)
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      className="relative w-64 h-80 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden flex-shrink-0"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-medium">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0  ">
        <div className="flex items-center justify-between py-3 px-8 mb-3">
          <h5>{data.filesize}</h5>
          <span className="bg-zinc-600 rounded-full w-7 h-7 flex items-center justify-center">
            {data.close ? (
              <IoClose size=".8em" color="#fff" />
            ) : (
              <LuDownload size=".8em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Card
