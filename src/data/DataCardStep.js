import { BsBoxSeam, BsType, BsCheckLg } from "react-icons/bs";
import { TbPaint } from "react-icons/tb";
let style = "text-4xl border-blue-600 rounded-full border-[1px] p-2 text-[#1D40B0]"
const boxIcon = <BsBoxSeam className={style} />;
const typeIcon = <BsType className={style} />;
const paintIcon = <TbPaint className={style} />;
const checkIcon = <BsCheckLg className=" text-3xl text-white bg-blue-500  border-blue-600 rounded-full border-[1px]" />;

export const dataStep = [
    {
        image:  boxIcon ,
        step: "Step 1:",
        title: "Download",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagitis, quam nec venenatis lobortis, misirus tempus nulla, sed portittior est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula.",
    },
    {
        image: typeIcon ,
        step: "Step 2:",
        title: "Add content",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagitis, quam nec venenatis lobortis, misirus tempus nulla, sed portittior est nibh at nulla.",
    },
    {
        image:  paintIcon ,
        step: "Step 3:",
        title: "Customize styles",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagitis, quam nec venenatis lobortis, misirus tempus nulla, sed portittior est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.",
    },
    { image:  checkIcon , step: "Ready!" },
];