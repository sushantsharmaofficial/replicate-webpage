import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import logo from "./logo.png";
import logo2 from "./logo2.png";
import "./Navbar.css";
import { ImCross } from "react-icons/im";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
	const [navElem, setNavElem] = useState([
		{
			id: 1,
			name: "브랜드 이야기",
			active: false,
			sub: [
				{
					id: 4,
					subname: "THE CLIP 소개",
				},
			],
		},
		{
			id: 2,
			name: "교육프로그램",
			active: false,
			sub: [
				{
					id: 5,
					subname: "학습 프로세스",
				},
				{
					id: 6,
					subname: "코스 및 레벨",
				},
				{
					id: 7,
					subname: "강의 지원 시스템",
				},
				{
					id: 8,
					subname: "온라인 학습",
				},
				{
					id: 9,
					subname: "테스트 센터",
				},
			],
		},
		{
			id: 3,
			name: "THE CLIP 소식",
			active: false,
			sub: [
				{
					id: 10,
					subname: "공지사항",
				},
			],
		},
		{
			id: 4,
			name: "고객센터",
			ative: false,
			sub: [
				{
					id: 11,
					subname: "FAQ",
				},
				{
					id: 12,
					subname: "샘플 교재 신청",
				},
				{
					id: 13,
					subname: "상담 신청",
				},
			],
		},
	]);
	const [open, setOpen] = React.useState(false);

	const toggleOpenMenu = () => {
		setOpen(true);
	};

	const toggleCloseMenu = () => {
		setOpen(false);
	};

	// animation of toggle menu

	const items = {
		exit: {
			opacity: 0,
			height: 0,
			transition: {
				ease: "easeInOut",
				duration: 0.8,
				delay: 0.9,
			},
		},
	};

	return (
		<nav className='main-nav   flex relative  hover:bg-white hover:text-black h-10 lg:h-[11vh] px-5 py-7 border-b-[1px] z-0 justify-between items-center text-white '>
			<div className='logo relative '>
				<img src={logo} className='white-logo   h-7 lg:h-10 ' alt='logo' />
				<img src={logo2} className='black-logo   h-7 lg:h-10 ' alt='logo' />

				{/* hover logo */}
			</div>
			<div className='menu '>
				<ul className='main-menu flex gap-32 '>
					{navElem.map((element) => (
						<li
							className='nav hidden relative font-Inter lg:block text-[20px] font-semibold group '
							key={element}
							onMouseOver={() => {
								setNavElem((prev) =>
									prev.map((item) =>
										item.id === element.id
											? { ...item, active: true }
											: { ...item, active: false }
									)
								);
							}}
							onMouseOut={() => {
								setNavElem((prev) =>
									prev.map((item) => ({ ...item, active: false }))
								);
							}}
						>
							<a href='#'>{element.name}</a>

							{element.sub && element.active && (
								<div className='z-50'>
									<div className='max-w-[100%]'>
										<div className='   '>
											<div className=' absolute font-Inter  justify-start  items-center w-[90vh] h-[10vh] p-5.5 lg:flex gap-10'>
												{element.sub.map((sub) => (
													<a
														className=' text-black text-[16px]'
														href='#'
														key={sub.id}
													>
														{sub.subname}
													</a>
												))}
											</div>
										</div>
									</div>
								</div>
							)}
						</li>
					))}
				</ul>
			</div>
			{/* toggle menu */}
			<AnimatePresence>
				{open && (
					<motion.div
						variants={items}
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "100vh", opacity: 1 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						exit={{ opacity: 0, height: 0 }}
						className='bg-white  z-20  py-5 absolute w-full overflow-hidden h-[98vh] top-0 left-0 bottom-0 '
					>
						<div className=' flex justify-between px-5 mt-3 mb-36 items-center px-2'>
							<div className='logo'>
								<img src={logo2} className='h-7 lg:h-10' alt='logo' />
							</div>
							<div onClick={toggleCloseMenu}>
								<ImCross className=' text-3xl text-black cursor-pointer' />
							</div>
						</div>
						<ul className=' md:flex md:justify-between md:px-28  ml-8  h-screen w-full  gap-5'>
							{NavElement.map((element) => (
								<li
									className='mb-10 leading-[40px] font-Inter lg:block text-[20px] font-light   '
									key={element.id}
								>
									<a
										className='text-2xl mb- font-Inter relative font-semibold text-black '
										href='#'
									>
										{element.name}
									</a>
									<div className=' w-36 h-[5px] -mt-2 bg-[#37fcf2]'></div>
									<ul>
										{element.sub.map((sub) => (
											<li className='  font-Inter text-black' key={sub.id}>
												<a
													className=' hover:text-blue-700 hover:text-[21px] hover:underline underline-offset-4'
													href='#'
												>
													{sub.subname}
												</a>
											</li>
										))}
									</ul>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>

			{/* toggle menu */}

			<div onClick={toggleOpenMenu}>
				<FiMenu className='text-4xl cursor-pointer' />
			</div>
		</nav>
	);
};
