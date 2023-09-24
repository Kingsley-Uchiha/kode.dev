export default function Tooltip({ children, open }) {
  const followCur = (e) => {
    return {
      top: e.pageY,
      left: e.pageX
    }
  }

  return (
    <div className={
      `rounded-md bg-black border-white border-1 font-code px-3 py-2 inline fixed z-10 font-light follow-cursor
      ${open ? "" : "hidden"}`
    }>
      {children}
    </div>
  )
}