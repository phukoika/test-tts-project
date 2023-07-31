import React from "react";

const MenuModal = () => {
  return (
    <div className="text-white w-screen fixed right-0 left-0 bottom-0 top-[134px] h-screen bg-gradient-to-t from-[#4CA757] to-[#16A571] menu-modal hidden">
      <div className="px-[70px] mb-[309px] w-[300px] mt-[67px] ">
        <h3 className="pb-[27px] text-lg menu-link  menu-secondary relative">
          Introduce
          <div className="absolute left-[500px] hidden items-center gap-x-10 modal-secondary">
            <div className="w-[342px] h-[391px] mb-[219px]">
              <img
                src="./bg-4.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[427px] mb-[332px]">
              <h1 className="text-[39px]">Introduce</h1>
              <p className="text-base font-normal mt-6 mb-8">
                The Company comprises dynamic qualified personnel, experienced
                in the field of offshore transportation and installation
              </p>
              <h5 className="text-base font-normal">Seemore +</h5>
            </div>
          </div>
        </h3>
        <h3 className="py-[27px] text-lg menu-link  menu-secondary relative">
          Our People
          <div className="absolute left-[500px] top-[-20px] hidden items-center gap-x-10 modal-secondary">
            <div className="w-[342px] h-[391px] mb-[219px]">
              <img
                src="./bg-4.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[427px] mb-[332px]">
              <h1 className="text-[39px]">Introduce</h1>
              <p className="text-base font-normal mt-6 mb-8">
                The Company comprises dynamic qualified personnel, experienced
                in the field of offshore transportation and installation
              </p>
              <h5 className="text-base font-normal">Seemore +</h5>
            </div>
          </div>
        </h3>
        <h3 className="py-[27px] text-lg menu-link  menu-secondary relative">
          QHSE
          <div className="absolute left-[500px] top-[-90px] hidden items-center gap-x-10 modal-secondary">
            <div className="w-[342px] h-[391px] mb-[219px]">
              <img
                src="./bg-4.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[427px] mb-[332px]">
              <h1 className="text-[39px]">Introduce</h1>
              <p className="text-base font-normal mt-6 mb-8">
                The Company comprises dynamic qualified personnel, experienced
                in the field of offshore transportation and installation
              </p>
              <h5 className="text-base font-normal">Seemore +</h5>
            </div>
          </div>
        </h3>
        <h3 className="py-[27px] text-lg menu-link  menu-secondary relative">
          Asset And facility
          <div className="absolute left-[500px] top-[-160px] hidden items-center gap-x-10 modal-secondary">
            <div className="w-[342px] h-[391px] mb-[219px]">
              <img
                src="./bg-4.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[427px] mb-[332px]">
              <h1 className="text-[39px]">Introduce</h1>
              <p className="text-base font-normal mt-6 mb-8">
                The Company comprises dynamic qualified personnel, experienced
                in the field of offshore transportation and installation
              </p>
              <h5 className="text-base font-normal">Seemore +</h5>
            </div>
          </div>
        </h3>
      </div>
    </div>
  );
};

export default MenuModal;
