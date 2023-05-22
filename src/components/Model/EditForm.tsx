import React, { FunctionComponent, useEffect, useState } from "react";
import Modal from "./page";
import MultiSelect from "../Dropdown/MultiSelect";
import { blockChainOpt,  defaultGame, genresOpt, platformOpt } from "@/constant/constant";
import { BCOption, GenresOption, PlatformsOption, dataType } from "@/constant/interface";
import { useDispatch } from "react-redux";
import { updateItem } from "@/redux/gameListSlice";

interface ModalEditProps {
  onClose: () => void;
  isVisible?: boolean;
  data : dataType
}

const EditForm: FunctionComponent<ModalEditProps> = ({
  onClose,
  isVisible,
  data
}) => {
  const [formState, setFormState] = useState(defaultGame);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateItem(formState));
    onClose();
  }

  useEffect(() => {
    setFormState({ ...data });
  }, [data]);

  const handleChangeBlockChains = (selection: BCOption[]) => {
    setFormState({...formState, BlockChains : selection})
  } 

  const handleChangeGenres = (selection: GenresOption[]) => {
    setFormState({...formState, Genres : selection})
  } 

  const handleChangePlatforms = (selection: PlatformsOption[]) => {
    setFormState({...formState, Platforms : selection})
  }

  return (
    <Modal isVisible={isVisible} onClose={onClose} >
      <form className="text-xl font-medium h-[400px] p-10" onSubmit={handleSubmit} >
        <div className="text-center text-2xl">Edit Data</div>
        <div className="flex justify-center">
          <div>
            {/* Becase I don't have enough time so I can't make the multiple select in time, it will develop in the future */}
            <MultiSelect
              defaultOpt="Change BlockChain"
              options={blockChainOpt}
              selected={formState.BlockChains}
              onChange={handleChangeBlockChains}
            />
            <MultiSelect
              defaultOpt="Change Genres"
              options={genresOpt}
              selected={formState.Genres}
              onChange={handleChangeGenres}
            />
            <MultiSelect
              defaultOpt="Change Platforms"
              options={platformOpt}
              selected={formState.Platforms}
              onChange={handleChangePlatforms}
            />
          </div>
        </div>
        <div>
        <div className='flex items-center justify-center mt-10 text-xl font-medium'>
            <button type="submit" className='text-white bg-gradient-to-r from-red-btn to-orange-btn w-32 h-12 rounded-full '>Save</button>
            <button onClick={() => onClose()} className='w-32 h-12 rounded-full ml-6'>Cancel</button>
        </div>
        </div>
      </form>
    </Modal>
  );
};

export default EditForm;
