import React from "react";

const Table = ({ currency, mode, country }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 mt-6">
        <div className="py-0 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="w-full border-separate [border-spacing:1px] table-auto md:table-fixed">
              <thead>
                <tr>
                  <th></th>
                  <th>
                    <div className="flex flex-col items-center justify-start border-l border-light-green">
                      <button
                        className="bg-gradient-to-b from-bg-green1 to-bg-green3 uppercase text-light-white font-bold rounded-full py-1 lg:py-1 px-3 lg:px-4 text-xs md:text-sm xl:text-base flex flex-row items-center"
                        data-aos="fade-right"
                        data-aos-duration="3000"
                        data-aos-once="true"
                      >
                        <div className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] border border-2 border-dark-green rounded-full px-2 py-2 border-r-white"></div>
                        <span className="ml-1 md:ml-2">step 1</span>
                      </button>
                      <p
                        className="text-bg-green3 mt-2 uppercase font-bold text-lg lg:text-xl xl:text-xl"
                        data-aos="fade-left"
                        data-aos-duration="3000"
                        data-aos-once="true"
                      >
                        SFT challenge
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="flex flex-col items-center justify-start border-l border-light-green">
                      <button
                        className="bg-gradient-to-b from-bg-green1 to-bg-green3 uppercase text-light-white font-bold rounded-full py-1 lg:py-1 px-3 lg:px-4 text-xs md:text-sm xl:text-base flex flex-row items-center"
                        data-aos="fade-right"
                        data-aos-duration="3000"
                        data-aos-once="true"
                      >
                        <div className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] border border-2 border-dark-green rounded-full px-2 py-2 border-r-white border-b-white"></div>
                        <span className="ml-1 md:ml-2">step 2</span>
                      </button>
                      <p
                        className="text-bg-green3 mt-2 uppercase font-bold text-lg lg:text-xl xl:text-xl"
                        data-aos="fade-left"
                        data-aos-duration="3000"
                        data-aos-once="true"
                      >
                        Sft Verification
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="flex flex-col items-center justify-start border-l border-light-green">
                      <button
                        className="bg-gradient-to-b from-bg-green1 to-bg-green3 uppercase text-light-white font-bold rounded-full py-1 lg:py-1 px-3 lg:px-4 text-xs md:text-sm xl:text-base flex flex-row items-center"
                        data-aos="fade-right"
                        data-aos-duration="3000"
                        data-aos-once="true"
                      >
                        <div className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] border border-2 border-dark-green rounded-full px-2 py-2 border-r-white border-b-white border-l-white border-t-white"></div>
                        <span className="ml-1 md:ml-2">step 3</span>
                      </button>
                      <p
                        className="text-bg-green3 mt-2 uppercase font-bold text-lg lg:text-xl xl:text-xl"
                        data-aos="fade-left"
                        data-aos-duration="3000"
                        data-aos-once="true"
                      >
                        SFT trader
                      </p>
                    </div>
                  </th>
                </tr>
                <tr className="h-[10px]">
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="uppercase text-lighter-black">
                <tr>
                  <td
                    className="text-[13px] font-bold px-8 py-3 whitespace-nowrap bg-gradient-to-b from-bg-gray1 to-bg-gray2"
                    data-aos="fade-down"
                    data-aos-duration="3000"
                    data-aos-once="true"
                  >
                    Trading period
                  </td>
                  <td className="text-[13px] font-light px-16 lg:px-0 py-3 whitespace-nowrap bg-bg-green1 text-center">
                    35 days
                  </td>
                  <td className="text-[13px]  font-light px-16 lg:px-0 py-3 whitespace-nowrap bg-bg-green2 text-center">
                    70 days
                  </td>
                  <td className="text-[13px]  font-light px-16 lg:px-0 py-3 whitespace-nowrap bg-bg-green3 text-center"></td>
                </tr>
                <tr>
                  <td
                    className="text-[13px]  font-bold px-8 py-3 whitespace-nowrap bg-gradient-to-b from-bg-gray1 to-bg-gray2"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-once="true"
                  >
                    Min. Trading Days
                  </td>
                  <td className="text-[13px]  font-light px-16 lg:px-0 py-3 whitespace-nowrap bg-bg-green1 text-center">
                    5 days
                  </td>
                  <td className="text-[13px]  font-light px-16 lg:px-0 py-3 whitespace-nowrap bg-bg-green2 text-center">
                    5 days
                  </td>
                  <td className="text-[13px]  font-light px-16 lg:px-0 py-3 whitespace-nowrap bg-bg-green3 text-center"></td>
                </tr>
                <tr>
                  <td
                    className="text-[13px]  font-bold px-8 py-3 whitespace-nowrap bg-gradient-to-b from-bg-gray1 to-bg-gray2"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-once="true"
                  >
                    Max. daily loss
                  </td>
                  <td className="text-[13px]  font-light px-16 lg:px-0 py-3 whitespace-nowrap bg-bg-green1 text-center">
                    {(() => {
                      if (currency === "10k") {
                        if (mode === "aggressive") {
                          return "$1000";
                        }
                        return "$500";
                      } else if (currency === "25k") {
                        if (mode === "aggressive") {
                          return "$2500";
                        }
                        return "$1250";
                      } else if (currency === "50k") {
                        if (mode === "aggressive") {
                          return "$5k";
                        }
                        return "$2500";
                      } else if (currency === "100k") {
                        if (mode === "aggressive") {
                          return "$10k";
                        }
                        return "$5k";
                      } else if (currency === "200k") {
                        if (mode === "aggressive") {
                          return "$20k";
                        }
                        return "$10k";
                      } else if (currency === "500k") {
                        if (mode === "aggressive") {
                          return "$50k";
                        }
                        return "$25k";
                      } else {
                        return "$500";
                      }
                    })()}
                  </td>
                  <td className="text-[13px] font-light px-16 lg:px-0 py-3 whitespace-nowrap bg-bg-green2 text-center">
                    {(() => {
                      if (currency === "10k") {
                        if (mode === "aggressive") {
                          return "$1000";
                        }
                        return "$500";
                      } else if (currency === "25k") {
                        if (mode === "aggressive") {
                          return "$2500";
                        }
                        return "$1250";
                      } else if (currency === "50k") {
                        if (mode === "aggressive") {
                          return "$5k";
                        }
                        return "$2500";
                      } else if (currency === "100k") {
                        if (mode === "aggressive") {
                          return "$10k";
                        }
                        return "$5k";
                      } else if (currency === "200k") {
                        if (mode === "aggressive") {
                          return "$20k";
                        }
                        return "$10k";
                      } else if (currency === "500k") {
                        if (mode === "aggressive") {
                          return "$50k";
                        }
                        return "$25k";
                      } else {
                        return "$500";
                      }
                    })()}
                  </td>
                  <td className="text-[13px]  font-light px-16 lg:px-0 py-3 whitespace-nowrap bg-bg-green3 text-center">
                    {(() => {
                      if (currency === "10k") {
                        if (mode === "aggressive") {
                          return "$1000";
                        }
                        return "$500";
                      } else if (currency === "25k") {
                        if (mode === "aggressive") {
                          return "$2500";
                        }
                        return "$1250";
                      } else if (currency === "50k") {
                        if (mode === "aggressive") {
                          return "$5k";
                        }
                        return "$2500";
                      } else if (currency === "100k") {
                        if (mode === "aggressive") {
                          return "$10k";
                        }
                        return "$5k";
                      } else if (currency === "200k") {
                        if (mode === "aggressive") {
                          return "$20k";
                        }
                        return "$10k";
                      } else if (currency === "500k") {
                        if (mode === "aggressive") {
                          return "$50k";
                        }
                        return "$25k";
                      } else {
                        return "$500";
                      }
                    })()}
                  </td>
                </tr>
                <tr>
                  <td
                    className="text-[13px]  font-bold px-8 whitespace-nowrap bg-gradient-to-b from-bg-gray1 to-bg-gray2"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-once="true"
                  >
                    Max. loss
                  </td>
                  <td className="text-[13px]  font-light px-16 lg:px-0  py-3 whitespace-nowrap bg-bg-green1 text-center">
                    {(() => {
                      if (currency === "10k") {
                        if (mode === "aggressive") {
                          return "$2000";
                        }
                        return "$1000";
                      } else if (currency === "25k") {
                        if (mode === "aggressive") {
                          return "$5k";
                        }
                        return "$2500";
                      } else if (currency === "50k") {
                        if (mode === "aggressive") {
                          return "$10k";
                        }
                        return "$5k";
                      } else if (currency === "100k") {
                        if (mode === "aggressive") {
                          return "$20k";
                        }
                        return "$10k";
                      } else if (currency === "200k") {
                        if (mode === "aggressive") {
                          return "$40k";
                        }
                        return "$20k";
                      } else if (currency === "500k") {
                        if (mode === "aggressive") {
                          return "$100k";
                        }
                        return "$50k";
                      } else {
                        return "$1000";
                      }
                    })()}
                  </td>
                  <td className="text-[13px]  font-light px-16 lg:px-0 py-3 whitespace-nowrap bg-bg-green2 text-center">
                    {(() => {
                      if (currency === "10k") {
                        if (mode === "aggressive") {
                          return "$2000";
                        }
                        return "$1000";
                      } else if (currency === "25k") {
                        if (mode === "aggressive") {
                          return "$5k";
                        }
                        return "$2500";
                      } else if (currency === "50k") {
                        if (mode === "aggressive") {
                          return "$10k";
                        }
                        return "$5k";
                      } else if (currency === "100k") {
                        if (mode === "aggressive") {
                          return "$20k";
                        }
                        return "$10k";
                      } else if (currency === "200k") {
                        if (mode === "aggressive") {
                          return "$40k";
                        }
                        return "$20k";
                      } else if (currency === "500k") {
                        if (mode === "aggressive") {
                          return "$100k";
                        }
                        return "$50k";
                      } else {
                        return "$1000";
                      }
                    })()}
                  </td>
                  <td className="text-[13px]  font-light px-16 lg:px-0 py-3 whitespace-nowrap bg-bg-green3 text-center">
                    {(() => {
                      if (currency === "10k") {
                        if (mode === "aggressive") {
                          return "$2000";
                        }
                        return "$1000";
                      } else if (currency === "25k") {
                        if (mode === "aggressive") {
                          return "$5k";
                        }
                        return "$2500";
                      } else if (currency === "50k") {
                        if (mode === "aggressive") {
                          return "$10k";
                        }
                        return "$5k";
                      } else if (currency === "100k") {
                        if (mode === "aggressive") {
                          return "$20k";
                        }
                        return "$10k";
                      } else if (currency === "200k") {
                        if (mode === "aggressive") {
                          return "$40k";
                        }
                        return "$20k";
                      } else if (currency === "500k") {
                        if (mode === "aggressive") {
                          return "$100k";
                        }
                        return "$50k";
                      } else {
                        return "$1000";
                      }
                    })()}
                  </td>
                </tr>
                <tr>
                  <td
                    className="text-[13px]  font-bold px-8 whitespace-nowrap bg-gradient-to-b from-bg-gray1 to-bg-gray2"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-once="true"
                  >
                    profit target
                  </td>
                  <td className="text-[13px]  font-light px-16 lg:px-0 py-3 whitespace-nowrap bg-bg-green1 text-center">
                    {(() => {
                      if (currency === "10k") {
                        if (mode === "aggressive") {
                          return "$1400";
                        }
                        return "$700";
                      } else if (currency === "25k") {
                        if (mode === "aggressive") {
                          return "$3500";
                        }
                        return "$1750";
                      } else if (currency === "50k") {
                        if (mode === "aggressive") {
                          return "$7k";
                        }
                        return "$3500";
                      } else if (currency === "100k") {
                        if (mode === "aggressive") {
                          return "$14k";
                        }
                        return "$7k";
                      } else if (currency === "200k") {
                        if (mode === "aggressive") {
                          return "$28k";
                        }
                        return "$14k";
                      } else if (currency === "500k") {
                        if (mode === "aggressive") {
                          return "$70k";
                        }
                        return "$35k";
                      } else {
                        return "$700";
                      }
                    })()}
                  </td>
                  <td className="text-[13px]  font-light px-16 lg:px-0 py-3 whitespace-nowrap bg-bg-green2 text-center">
                    {(() => {
                      if (currency === "10k") {
                        if (mode === "aggressive") {
                          return "$1000";
                        }
                        return "$500";
                      } else if (currency === "25k") {
                        if (mode === "aggressive") {
                          return "$2500";
                        }
                        return "$1250";
                      } else if (currency === "50k") {
                        if (mode === "aggressive") {
                          return "$5k";
                        }
                        return "$2500";
                      } else if (currency === "100k") {
                        if (mode === "aggressive") {
                          return "$10k";
                        }
                        return "$5k";
                      } else if (currency === "200k") {
                        if (mode === "aggressive") {
                          return "$20k";
                        }
                        return "$10k";
                      } else if (currency === "500k") {
                        if (mode === "aggressive") {
                          return "$50k";
                        }
                        return "$25k";
                      } else {
                        return "$500";
                      }
                    })()}
                  </td>
                  <td className="text-[13px]  font-light px-16 lg:px-0 py-3 whitespace-nowrap bg-bg-green3 text-center"></td>
                </tr>
                <tr>
                  <td
                    className="text-[13px]  font-bold px-8 whitespace-nowrap bg-gradient-to-b from-bg-gray1 to-bg-gray2"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-once="true"
                  >
                    free repeat
                  </td>
                  <td className="text-[13px]  font-light px-16 lg:px-0 py-3 whitespace-nowrap bg-bg-green1 text-center">
                    yes
                  </td>
                  <td className="text-[13px]  font-light px-16 lg:px-0 py-3 whitespace-nowrap bg-bg-green2 text-center">
                    yes
                  </td>
                  <td className="text-[13px]  font-light px-16 lg:px-0 py-3 whitespace-nowrap bg-bg-green3 text-center"></td>
                </tr>
                <tr>
                  <td
                    className="text-[13px]  font-bold px-8 whitespace-nowrap bg-gradient-to-b from-bg-gray1 to-bg-gray2"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-once="true"
                  >
                    refundable fee
                  </td>
                  <td className="text-[13px]  font-light px-16 lg:px-0 py-3 whitespace-nowrap bg-bg-green1 text-center">
                    yes
                  </td>
                  <td className="text-[13px]  font-light px-16 lg:px-0 py-3 whitespace-nowrap bg-bg-green2 text-center">
                    no
                  </td>
                  <td className="text-[13px]  font-light px-16 lg:px-0 py-3 whitespace-nowrap bg-bg-green3 text-center"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
