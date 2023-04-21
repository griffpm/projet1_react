import {
	BsXDiamondFill,
	BsArrowLeftRight,
	BsBoxSeam,
	BsArrowDownRight,
} from "react-icons/bs";
import { VscChecklist } from "react-icons/vsc";
import { IoIosRocket } from "react-icons/io";
import { HiOutlineLightBulb } from "react-icons/hi";
import { SiTailwindcss } from "react-icons/si";

export const dataCards = [
	{
		titre: "Astro + Tailwind",
		texte:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error id dignissimos'",
		image: (
			<SiTailwindcss className='text-4xl text-white bg-blue-800 rounded-full p-2' />
		),
	},
	{
		titre: "Excellent page speed",
		texte:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error id dignissimos'",
		image: (
			<IoIosRocket className='text-4xl text-white bg-blue-800 rounded-full p-2' />
		),
	},
	{
		titre: "Composant prêt à être utiliser",
		texte:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error id dignissimos'",
		image: (
			<BsXDiamondFill className='text-4xl text-white bg-blue-800 rounded-full p-2' />
		),
	},
	{
		titre: "SEO",
		texte:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error id dignissimos'",
		image: (
			<BsArrowLeftRight className='text-4xl text-white bg-blue-800 rounded-full p-2' />
		),
	},
	{
		titre: "Open to new idea and contributions",
		texte:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error id dignissimos'",
		image: (
			<HiOutlineLightBulb className='text-4xl text-white bg-blue-800 rounded-full p-2' />
		),
	},
	{
		titre: "Bonne pratice",
		texte:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error id dignissimos'",
		image: (
			<VscChecklist className='text-4xl text-white bg-blue-800 rounded-full p-2' />
		),
	},
];