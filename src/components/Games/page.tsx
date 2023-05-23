"use client";
import React, { useState } from "react";
import TitleHeader from "../Title/page";
import AppleIcon from "../Icons/AppleIcon";
import AndroidIcon from "../Icons/AndroidIcon";
import BrowserIcon from "../Icons/BrowserIcon";
import WindowIcon from "../Icons/WindowIcon";
import MobileIcon from "../Icons/MobileIcon";
import Pagination from "../Pagination/page";
import SingSelect from "../Dropdown/SingSelect";
import { blockChainOpt, defaultGame } from "@/constant/constant";
import { BCOption, dataType } from "@/constant/interface";
import EditIcon from "../Icons/EditIcon";
import EditForm from "../Model/EditForm";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const GamePage = () => {
  const [selectedBC, setSelectedBC] = useState<BCOption | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const {items} = useSelector((state : RootState) => state.gameList);
  const [game, setGame] = useState<dataType>(defaultGame)
  
  const handleEdit = (item : dataType ) => {
    setGame({
      Name: item.Name,
      Code: item.Code,
      ImageUrl: item.ImageUrl,
      Symbol: item.Symbol,
      Price: item.Price,
      BlockChains: item.BlockChains,
      Genres: item.Genres,
      Platforms: item.Platforms,
    });
    setOpenModal(true)
    };

    const filter = items.map(item => {
      if(item.BlockChains.find(x => x.Name === selectedBC?.Name) !== undefined)
      return item
    })
    
    const result = filter.filter(item => item !== undefined)
    const filterItems = selectedBC?.Name == undefined ? items : result

  return (
    <div className="mt-8 mb-28">
      {openModal && (
        <EditForm isVisible={openModal} onClose={() => setOpenModal(false)} data={game}/>
      )}
      <TitleHeader />
      <p className="mt-8 font-medium text-[32px]">
        Best Free P2E NFT Games in 2022
      </p>
      <p className="mt-1.5 text-base">
        Are you looking for Games that Free-to-play? Here are the best F2P NFT
        games available.
      </p>
      <SingSelect
        defaultOpt="All BlockChain"
        options={blockChainOpt}
        selected={selectedBC}
        onChange={(selection: BCOption) => setSelectedBC(selection)}
      />
      <div className="relative overflow-y-scroll max-h-[1100px] px-5 ">
        <table className="w-full text-xs text-left ">
          {/* I find some issue to border table , so i cant use `border-b border-tk-gray` */}
          <thead
            className="uppercase "
            style={{ borderBottom: "1px solid #64748B" }}
          >
            <tr className="h-[76px]">
              <th className="w-[4%] text-center py-3">#</th>
              <th className="w-[50%] text-start py-3">Name</th>
              <th className="text-start py-3">Genre</th>
              <th className="text-end py-3">Platform</th>
              <th className="w-[5%] text-end py-3" />
            </tr>
          </thead>
          <tbody>
            {filterItems.map((item, index) => {
              return (
                <tr style={{ borderBottom: "1px solid #EDF2F7" }} key={index}>
                  <td className="w-[4%] text-center py-4 ">{index + 1}</td>
                  <td className="w-[50%] text-start py-4">
                    <div className="flex">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={item.ImageUrl}
                        alt="not-found"
                      />
                      <div className="ml-4 text-15">
                        <p>
                          {item.Name}
                          <span className="uppercase ml-1 text-tk-gray">
                            {item.Symbol}
                          </span>
                        </p>
                        <div className="flex gap-2">
                          {item.BlockChains.length > 0 &&
                            item.BlockChains.map((bc, index) => {
                              return (
                                <div
                                  className="mt-1 flex items-center"
                                  key={index}
                                >
                                  <img
                                    className="w-5 h-5 rounded-full"
                                    src={
                                      bc.ExtendValue !== null
                                        ? bc.ExtendValue
                                        : ""
                                    }
                                    alt="not-found"
                                  />
                                  <p className="text-xs text-tk-gray ml-1">
                                    {bc.Name}
                                  </p>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 tracking-wide">
                    <div className="flex gap-2">
                      {item.Genres.length > 0 &&
                        item.Genres.map((genres, index) => {
                          return <p key={index}>{genres.Name}</p>;
                        })}
                    </div>
                  </td>
                  <td className="py-4 flex justify-end ">
                    <div className="flex gap-3">
                      {item.Platforms.length > 0 &&
                        item.Platforms.map((platform) => {
                          switch (platform.Name) {
                            case "Browser":
                              return <BrowserIcon key={platform.Code} />;
                            case "Windows":
                              return <WindowIcon key={platform.Code} />;
                            case "Android":
                              return <AndroidIcon key={platform.Code} />;
                            case "iOS":
                              return <AppleIcon key={platform.Code} />;
                            case "Mobile":
                              return <MobileIcon key={platform.Code} />;
                            case "Mac":
                              return <AppleIcon key={platform.Code} />;
                            case "PC":
                              return <WindowIcon key={platform.Code} />;
                            default:
                          }
                        })}
                    </div>
                  </td>
                  <td className="w-[5%] text-end py-4 ">
                    <div
                      onClick={() => handleEdit(item)}
                      className="flex justify-end items-center -mt-4"
                    >
                      <EditIcon />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default GamePage;
