import "../scripts/embr";
import React, { MutableRefObject, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { FaAtom, FaDiceSix, FaExchangeAlt, FaGithub, FaImages, FaMoneyBill, FaTelegramPlane, FaWallet, FaMedium } from "react-icons/fa";
import { FiYoutube, FiTwitter, FiLinkedin, FiMenu, FiX, FiMonitor, FiLink2, FiInstagram } from "react-icons/fi";
import _ from "lodash";
import { useThemeContext } from "../context/themes";
import ThemeSwitch from "../components/Switch/ThemeSwitch";
import partners from "../assets/partners.json";
import team from "../assets/team.json";

type IHeaderProps = {
  homeRef: MutableRefObject<HTMLElement>;
  partnersRef: MutableRefObject<HTMLElement>;
  teamRef: MutableRefObject<HTMLElement>;
  productsRef: MutableRefObject<HTMLElement>;
};

const Header = ({ homeRef, partnersRef, teamRef, productsRef }: IHeaderProps) => {
  const { theme } = useThemeContext();
  return (
    <div className="flex justify-between gap-6 items-center px-3 py-4">
      <div className="hidden md:flex justify-between items-center gap-7 text-[14px] font-poppins">
        <button onClick={() => homeRef.current?.scrollIntoView({ behavior: "smooth" })} className="link link-hover text-white">
          Home
        </button>
        <button onClick={() => partnersRef.current?.scrollIntoView({ behavior: "smooth" })} className="link link-hover text-white">
          Partners
        </button>
        <button onClick={() => productsRef.current?.scrollIntoView({ behavior: "smooth" })} className="link link-hover text-white">
          Products
        </button>
        <button onClick={() => teamRef.current?.scrollIntoView({ behavior: "smooth" })} className="link link-hover text-white">
          Team
        </button>
      </div>
      <Image src="/header.svg" alt="logo" width={100} height={100} />
      <div className="hidden md:flex justify-center gap-10 items-center">
        <a href="https://t.me/VefDefi" rel="noreferrer" target="_blank">
          <button className="bg-[linear-gradient(180deg,_#d6d6d6_0%,_#fff_100%)] text-[#105dcf] font-[700] rounded-[30px] px-2 py-2 font-poppins shadow-[7.551e-16px_12.3333px_24.6667px_rgba(51,51,51,0.24),_inset_-2.34951e-16px_-3.83704px_3.83704px_#cccccc,_inset_2.34951e-16px_3.83704px_3.83704px_#fff] text-[13px]">
            Join our community
          </button>
        </a>
        <ThemeSwitch />
      </div>
      <label htmlFor="menu-modal" className="btn btn-ghost text-[20px] text-white md:hidden">
        <FiMenu />
      </label>
      <input type="checkbox" id="menu-modal" className="modal-toggle md:hidden" />
      <div className="modal modal-bottom md:hidden font-poppins">
        <div className={`modal-box relative ${theme === "light" ? "bg-[#fff]" : "bg-[#000]"} flex justify-center flex-col items-center`}>
          <label htmlFor="menu-modal" className="btn btn-sm btn-ghost absolute right-2 top-2">
            <FiX />
          </label>
          <ul className={`menu p-2 ${theme === "light" ? "bg-[#fff] text-[#000]" : "bg-[#000]/[0.6] text-white"} rounded-box w-full`}>
            <li onClick={() => homeRef.current?.scrollIntoView({ behavior: "smooth" })}>
              <label className="link link-hover w-full btn btn-ghost">Home</label>
            </li>
            <li onClick={() => partnersRef.current?.scrollIntoView({ behavior: "smooth" })}>
              <label className="link link-hover w-full btn btn-ghost">Partners</label>
            </li>
            <li onClick={() => productsRef.current?.scrollIntoView({ behavior: "smooth" })}>
              <label className="link link-hover w-full btn btn-ghost">Products</label>
            </li>
            <li onClick={() => teamRef.current?.scrollIntoView({ behavior: "smooth" })}>
              <label className="link link-hover w-full btn btn-ghost">Team</label>
            </li>
          </ul>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <div className="flex flex-col justify-center items-center overflow-auto w-full gap-6">
    <div className="flex justify-between items-center gap-6 uppercase text-white font-poppins font-[500] overflow-auto w-full">
      <a href="https://x.com/vefdefi?t=tJZF3rr5Btl_gZrWRnNB2g&s=09" rel="noreferrer" target="_blank">
        Twitter
      </a>
      <a href="https://t.me/VefDefi" rel="noreferrer" target="_blank">
        Telegram
      </a>
      {/* <a href="https://www.youtube.com/channel/UCXMsXe5AvNSPL32Yna8MKdQ" rel="noreferrer" target="_blank">
        YouTube
      </a> */}
      <a href="https://instagram.com/vefi.official" rel="noreferrer" target="_blank">
        Instagram
      </a>
    </div>
    <span className="font-poppins font-[400] text-[20px] uppercase text-white">Copyright {(new Date()).getFullYear()} VefDefi Ecosystem</span>
  </div>
);

const Hero = () => (
  <div className="flex flex-col w-full justify-center gap-4 pt-3">
    <div className="flex flex-col justify-center items-center w-full">
      <span className="font-poppins font-[700] text-[30px] md:text-[97px] text-white">Welcome to the</span>
      <span className="font-poppins font-[700] text-[30px] md:text-[97px] bg-[linear-gradient(180deg,_#fff_0%,_#abacae_49.48%,_#6fdfee_100%)] bg-clip-text text-transparent">
        Ecosystem
      </span>
    </div>
    <div className="flex flex-col md:flex-row justify-between items-center gap-5 w-full px-3">
      <div className="flex flex-row md:flex-col justify-center items-center gap-2">
        {/* <a href="https://www.youtube.com/channel/UCXMsXe5AvNSPL32Yna8MKdQ" rel="noreferrer" target="_blank">
          <button className="flex justify-center bg-[#f5f5f5] rounded-[100%] items-center w-[40px] h-[40px] px-1 py-1 text-[20px]">
            <FiYoutube />
          </button>
        </a> */}
        <a href="https://x.com/vefdefi?t=tJZF3rr5Btl_gZrWRnNB2g&s=09" rel="noreferrer" target="_blank">
          <button className="flex justify-center bg-[#f5f5f5] rounded-[100%] items-center w-[40px] h-[40px] px-1 py-1 text-[20px]">
            <FiTwitter />
          </button>
        </a>
        <a href="https://t.me/VefDefi" rel="noreferrer" target="_blank">
          <button className="flex justify-center bg-[#f5f5f5] rounded-[100%] items-center w-[40px] h-[40px] px-1 py-1 text-[20px]">
            <FaTelegramPlane />
          </button>
        </a>
        <a href="https://medium.com/@VefDefi/vefi-is-re-inventing-itself-d4f5bb1f3d06" rel="noreferrer" target="_blank">
          <button className="flex justify-center bg-[#f5f5f5] rounded-[100%] items-center w-[40px] h-[40px] px-1 py-1 text-[20px]">
            <FaMedium />
          </button>
        </a>
        <a href="https://instagram.com/vefi.official" rel="noreferrer" target="_blank">
          <button className="flex justify-center bg-[#f5f5f5] rounded-[100%] items-center w-[40px] h-[40px] px-1 py-1 text-[20px]">
            <FiInstagram />
          </button>
        </a>
      </div>
      <div className="flex flex-col justify-between items-center flex-1 gap-10">
        <span className="font-poppins text-center text-[24px] text-white leading-[36px] tracking-[-1.5%] w-full md:w-[951px]">
          Ours is an ecosystem of blockchain-intrinsic products and services with the sole aim of permeating all areas of the globe with its influence
          in the blockchain ecosystem.
        </span>
        <a href="https://x.com/vefdefi?t=tJZF3rr5Btl_gZrWRnNB2g&s=09" rel="noreferrer" target="_blank">
          <button className="bg-[linear-gradient(180deg,_#d6d6d6_0%,_#fff_100%)] text-[#105dcf] font-[700] rounded-[30px] px-2 py-2 font-poppins shadow-[7.551e-16px_12.3333px_24.6667px_rgba(51,51,51,0.24),_inset_-2.34951e-16px_-3.83704px_3.83704px_#cccccc,_inset_2.34951e-16px_3.83704px_3.83704px_#fff] text-[13px]">
            Explore Ecosystem
          </button>
        </a>
        <div className="bg-[#d9d9d9]/10 shadow-[inset_31.5px_-31.5px_31.5px_rgba(165,165,165,0.1),_inset_-31.5px_31.5px_31.5px_rgba(255,255,255,0.1)] backdrop-blur-[31.5px]">
          <img src="/images/scout.svg" alt="scout" className="relative top-[-20px] w-[300px] h-full" />
        </div>
      </div>
    </div>
  </div>
);

const Section1 = () => {
  const { theme } = useThemeContext();
  return (
    <div
      className={`flex justify-center flex-col md:flex-row w-full items-center gap-3 ${theme === "light" ? "bg-white" : "bg-[#000]/75"} py-10 px-10`}
    >
      <div className="md:w-1/2 w-full flex justify-center items-center">
        <img src="/images/frame_1.svg" alt="frame_1" className="h-full" />
      </div>
      <div className={`flex flex-col justify-start items-start gap-3 w-full md:w-1/2 ${theme === "light" ? "text-[#000]" : "text-[#fff]"}`}>
        <h3 className="font-poppins capitalize font-[700] w-full text-[28px] md:text-[40px]">
          We are building one of the largest blockchain infrastructure and solution company
        </h3>
        <p className="font-poppins font-[400] text-[18px] md:text-[24px]">
          Our mission is to improve the freedom of money globally through the integration of institutions, people, groups and businesses into the
          blockchain economy.
        </p>
      </div>
    </div>
  );
};

const Section2 = () => {
  const { theme } = useThemeContext();
  return (
    <div
      className={`flex flex-col md:flex-row-reverse justify-center w-full items-center gap-3 ${theme === "light" ? "bg-[#1A0E27]" : "bg-[#1A0E27]/30"
        } py-10 px-10`}
    >
      <div className="md:w-1/2 w-full flex justify-center items-center">
        <img src="/images/frame_2.svg" alt="frame_1" className="h-full" />
      </div>
      <div className={`flex flex-col justify-start items-start gap-3 w-full md:w-1/2 text-[#fff]`}>
        <h3 className="font-poppins capitalize font-[700] w-full text-[28px] md:text-[40px]">
          Addressing this problem is the core ideology behind the emergence of VefDefi Ecosystem
        </h3>
        <p className="font-poppins font-[400] text-[18px] md:text-[24px]">
          VefDefi is a comprehensive decentralized finance (DeFi) ecosystem designed to revolutionize the way users interact with blockchain-based financial services. It encompasses a range of innovative features, each contributing to a holistic DeFi experience.
        </p>
      </div>
    </div>
  );
};

const Section3 = () => {
  const { theme } = useThemeContext();
  return (
    <div
      className={`flex flex-col md:flex-row justify-center w-full items-center gap-3 ${theme === "light" ? "bg-white" : "bg-[#000]/75"} py-10 px-10`}
    >
      <div className="md:w-1/2 w-full flex justify-center items-center">
        <img src="/images/frame_3.svg" alt="frame_1" className="h-full" />
      </div>
      <div className={`flex flex-col justify-start items-start gap-3 w-full md:w-1/2 ${theme === "light" ? "text-[#000]" : "text-[#fff]"}`}>
        <h3 className="font-poppins capitalize font-[700] w-full text-[28px] md:text-[40px]">
          revolutionizing innovation in the blockchain ecosphere
        </h3>
        <p className="font-poppins font-[400] text-[18px] md:text-[24px]">
          We aim to become the global leader for the institutional and widespread adoption of decentralized paradigms by providing blockchain
          infrastructure and solutions.
        </p>
      </div>
    </div>
  );
};

const Section4 = () => {
  const { theme } = useThemeContext();
  return (
    <div
      className={`flex flex-col md:flex-row-reverse justify-center w-full items-center gap-3 ${theme === "light" ? "bg-[#1A0E27]" : "bg-[#1A0E27]/30"
        } py-10 px-10`}
    >
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img src="/images/frame_4.svg" alt="frame_1" className="h-full" />
      </div>
      <div className={`flex flex-col justify-start items-start gap-3 w-full md:w-1/2 text-[#fff]`}>
        <h3 className="font-poppins capitalize font-[700] w-full text-[28px] md:text-[40px]">Rewriting the future through blockchain innovations</h3>
        <p className="font-poppins font-[400] text-[18px] md:text-[24px]">
          The future is decentralized. The blockchain technology is the ultimate frontier. We want to make this the case by creating and shipping for
          consumption, innovative blockchain ideas and products.
        </p>
      </div>
    </div>
  );
};

const Partners = () => {
  const { theme } = useThemeContext();
  return (
    <div className={`flex flex-col justify-center gap-4 items-center w-full ${theme === "light" ? "bg-[#dcdcdc]/60" : "bg-[#000]/75"} py-10 px-10`}>
      <h3 className="font-poppins uppercase font-[700] text-[#1A0E27] text-[28px] md:text-[40px]">Our Partners</h3>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {_.map(partners, (partner, index) => (
          <div key={index}>
            <a href={partner.url} target="_blank" rel="noreferrer">
              <Image src={partner.logo} alt={partner.name} width={150} height={150} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const Products = () => {
  enum PRODUCTS {
    DEX,
    MULTI_SIG,
    STAKE,
    CEX
  }

  const { theme } = useThemeContext();
  const [selectedProduct, setSelectedProduct] = useState<PRODUCTS>(PRODUCTS.DEX);

  const DEX = () => (
    <div className="flex justify-center items-center gap-10 w-full flex-col md:flex-row">
      <div className="avatar">
        <div className="w-[100px] md:w-[300px] rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
          <img src="/images/dex_shot.png" alt="Dex_View" />
        </div>
      </div>
      <div className="flex justify-center md:justify-start items-center md:items-start flex-col text-white gap-4 max-sm:w-full">
        <h3 className="text-[28px] md:text-[50px] font-poppins font-[700]">Decentralized Exchange</h3>
        <p className="font-[400] font-poppins text-justify max-w-[598px]">
          Our decentralized exchange is a multi-chain DApp that gives users the ability to create liquidity pools and earn LP tokens which can be
          utilized on our yield farming platform.
        </p>
        <a href="https://vefdefidapps.netlify.app/dex" target="_blank" rel="noreferrer">
          <button className="bg-[linear-gradient(180deg,_#d6d6d6_0%,_#fff_100%)] text-[#105dcf] font-[700] rounded-[30px] px-8 py-2 font-poppins shadow-[7.551e-16px_12.3333px_24.6667px_rgba(51,51,51,0.24),_inset_-2.34951e-16px_-3.83704px_3.83704px_#cccccc,_inset_2.34951e-16px_3.83704px_3.83704px_#fff] text-[13px]">
            Enter App
          </button>
        </a>
      </div>
    </div>
  );

  const CEX = () => (
    <div className="flex justify-center items-center gap-10 w-full flex-col md:flex-row">
      <div className="avatar">
        <div className="w-[100px] md:w-[300px] rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
          <img src="/images/cex_shot.png" alt="Cex_View" />
        </div>
      </div>
      <div className="flex justify-center md:justify-start items-center md:items-start flex-col text-white gap-4 max-sm:w-full">
        <h3 className="text-[28px] md:text-[50px] font-poppins font-[700]">Centralized Exchange</h3>
        <p className="font-[400] font-poppins text-justify max-w-[598px]">
          Trade tokens easily on our centralized exchange in the traditional p2p manner but with the merit of quick transaction executions.
        </p>
        <a href="https://vefi-network.netlify.app/" target="_blank" rel="noreferrer">
          <button className="bg-[linear-gradient(180deg,_#d6d6d6_0%,_#fff_100%)] text-[#105dcf] font-[700] rounded-[30px] px-8 py-2 font-poppins shadow-[7.551e-16px_12.3333px_24.6667px_rgba(51,51,51,0.24),_inset_-2.34951e-16px_-3.83704px_3.83704px_#cccccc,_inset_2.34951e-16px_3.83704px_3.83704px_#fff] text-[13px]">
            Enter App
          </button>
        </a>
      </div>
    </div>
  );

  const MultiSig = () => (
    <div className="flex justify-center items-center gap-10 w-full flex-col md:flex-row">
      <div className="avatar">
        <div className="w-[100px] md:w-[300px] rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
          <img src="/images/multisig_shot.png" alt="Multisig_View" />
        </div>
      </div>
      <div className="flex justify-center md:justify-start items-center md:items-start flex-col text-white gap-4 max-sm:w-full">
        <h3 className="text-[28px] md:text-[50px] font-poppins font-[700]">Multisig Wallet</h3>
        <p className="font-[400] font-poppins text-justify max-w-[598px]">
          Suited for companies that have embraced decentralization and need to own asset vaults managed by various signatories.
        </p>
        <a href="https://dapps.vefinetwork.org/multisig" target="_blank" rel="noreferrer">
          <button className="bg-[linear-gradient(180deg,_#d6d6d6_0%,_#fff_100%)] text-[#105dcf] font-[700] rounded-[30px] px-8 py-2 font-poppins shadow-[7.551e-16px_12.3333px_24.6667px_rgba(51,51,51,0.24),_inset_-2.34951e-16px_-3.83704px_3.83704px_#cccccc,_inset_2.34951e-16px_3.83704px_3.83704px_#fff] text-[13px]">
            Enter App
          </button>
        </a>
      </div>
    </div>
  );

  const Staking = () => (
    <div className="flex justify-center items-center gap-10 w-full flex-col md:flex-row">
      <div className="avatar">
        <div className="w-[100px] md:w-[300px] rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
          <img src="/images/staking_shot.png" alt="Staking_View" />
        </div>
      </div>
      <div className="flex justify-start items-start flex-col text-white gap-4">
        <h3 className="text-[28px] md:text-[50px] font-poppins font-[700]">Staking Platform</h3>
        <p className="font-[400] font-poppins text-justify max-w-[598px]">
          Our staking platform gives users the leverage of creating two-way staking pools and earning profits according to determined APYs.
        </p>
        <a href="https://dapps.vefinetwork.org/staking" target="_blank" rel="noreferrer">
          <button className="bg-[linear-gradient(180deg,_#d6d6d6_0%,_#fff_100%)] text-[#105dcf] font-[700] rounded-[30px] px-8 py-2 font-poppins shadow-[7.551e-16px_12.3333px_24.6667px_rgba(51,51,51,0.24),_inset_-2.34951e-16px_-3.83704px_3.83704px_#cccccc,_inset_2.34951e-16px_3.83704px_3.83704px_#fff] text-[13px]">
            Enter App
          </button>
        </a>
      </div>
    </div>
  );

  return (
    <div className={`flex flex-col justify-center w-full items-center gap-3 ${theme === "light" ? "bg-[#1A0E27]" : "bg-[#1A0E27]/30"} py-10 px-10`}>
      <h3 className="font-poppins capitalize font-[700] text-[30px] md:text-[62px] text-[#fff]">Get Familiar With Our Products</h3>
      <div className="flex justify-center items-center gap-3 w-full flex-wrap">
        <button
          onClick={() => setSelectedProduct(PRODUCTS.DEX)}
          className={`rounded-[5px] border border-[#fff] px-3 flex justify-center items-center font-poppins uppercase ${selectedProduct === PRODUCTS.DEX ? "bg-white text-[#1A0E27]" : "text-white bg-transparent"
            } gap-1 py-1`}
        >
          <FaExchangeAlt />
          <span>Dapps</span>
        </button>
      </div>
      <div className="flex justify-center items-center w-full py-6">
        {selectedProduct === PRODUCTS.DEX && <DEX />}
      </div>
    </div>
  );
};

const Team = () => {
  const { theme } = useThemeContext();
  return (
    <div className={`flex justify-center w-full items-center gap-3 ${theme === "light" ? "bg-white" : "bg-[#000]/75"} py-10 px-10 flex-col`}>
      <h3 className="font-poppins uppercase font-[700] text-[28px] md:text-[40px] text-[#1A0E27]">The Team</h3>
      <p
        className={`font-[400] text-[16px] md:text-[27px] text-center font-poppins ${theme === "light" ? "text-[#000]" : "text-[#fff]"} w-full md:max-w-[1146px]`}
      >
        Vefidefi team comprises of highly motivated and passionate team member members located around the globe. Our goal is to collaborate in building web3 solutions.
      </p>
      {/* <div
        className={`flex justify-center flex-col md:flex-row items-center gap-6 w-full ${theme === "light" ? "text-[#000]" : "text-[#fff]"
          } overflow-auto`}
      >
        {_.map(team, (member, index) => (
          <div key={index} className="flex flex-col justify-center items-center gap-2 h-full px-2 py-2">
            <div className="avatar">
              <div className="w-24 md:w-[200px] rounded-full shadow-[2.49012e-15px_40.6667px_81.333px_rgba(43,_43,_43,_0.366),_inset_-9.73912e-16px_-15.9052px_15.9052px_#9a9a9a,_inset_9.73912e-16px_15.9052px_15.9052px_#fff]">
                <img src={member.image} alt={member.name} />
              </div>
            </div>
            <h4 className="font-poppins font-[700] text-[16px] md:text-[28px]">{member.name}</h4>
            <span className="font-poppins font-[400] text-[10px] md:text-[20px]">{member.position}</span>
            {member.socials && (
              <div className="flex justify-center items-center gap-1">
                {member.socials.github && (
                  <a href={member.socials.github} target="_blank">
                    <FaGithub />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a href={member.socials.linkedin} target="_blank">
                    <FiLinkedin />
                  </a>
                )}
                {member.socials.twitter && (
                  <a href={member.socials.twitter} target="_blank">
                    <FiTwitter />
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default function IndexPage() {
  const { theme } = useThemeContext();

  const homeRef = useRef({} as any);
  const partnersRef = useRef({} as any);
  const teamRef = useRef({} as any);
  const productsRef = useRef({} as any);
  const buyTokensRef = useRef({} as any);

  return (
    <>
      <Head>
        <title>VefDefi | Welcome to the Ecosystem</title>
      </Head>
      <div className={`flex flex-col justify-start items-center w-screen h-screen overflow-auto ${theme === "light" ? "bg-[#fff]" : "bg-[#000]"}`}>
        <div className={`${theme === "light" ? "bg-[#1A0E27]" : "bg-[#1A0E27]/30"} flex flex-col w-full px-4 justify-between gap-12`}>
          <Header homeRef={homeRef} partnersRef={partnersRef} teamRef={teamRef} productsRef={productsRef} />
          <div ref={homeRef} className="w-full">
            <Hero />
          </div>
        </div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <div ref={partnersRef} className="w-full">
          <Partners />
        </div>
        <div ref={teamRef} className="w-full">
          <Team />
        </div>
        <div ref={productsRef} className="w-full">
          <Products />
        </div>
        <div
          className={`${theme === "light" ? "bg-[#1A0E27]" : "bg-[#1A0E27]/30"} flex flex-col w-full px-4 justify-center items-center gap-12`}
        >
          {/* <h3 className="font-poppins font-[700] text-[30px] md:text-[48px] text-[#fff]">Buy VEF Tokens</h3>
          <p className="font-[400] text-[16px] md:text-[27px] font-poppins text-[#fff] w-full md:max-w-[1146px]">
            The Vefi Ecosystem Token (VEF) powers the ecosystem and admits utility in a range of products shipped by us. You can purchase this
            ubiquitous token directly on our website using your wallet.
          </p>
          <div id="checkout"></div>
          <a href="https://vefinew.netlify.app/" target="_blank">
            <button className="bg-[linear-gradient(180deg,_#d6d6d6_0%,_#fff_100%)] text-[#105dcf] font-[700] rounded-[30px] px-2 py-2 font-poppins shadow-[7.551e-16px_12.3333px_24.6667px_rgba(51,51,51,0.24),_inset_-2.34951e-16px_-3.83704px_3.83704px_#cccccc,_inset_2.34951e-16px_3.83704px_3.83704px_#fff] text-[13px]">
              View Token Information
            </button>
          </a> */}
          <div className="overflow-auto my-5">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
