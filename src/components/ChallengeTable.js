import React from "react";

const Table = ({ balance, mode, currency }) => {
  const arrData = [
    {
      aggressive: [
        {
          maxDailyLoss: {
            "10k": [
              {
                usd: [1000, 1000, 1000],
                eur: [914, 914, 914],
                gbp: [803, 803, 803],
                cad: [1365, 1365, 1365],
                aud: [1506, 1506, 1506],
                chf: [898, 898, 898],
              },
            ],
            "25k": [
              {
                usd: [2500, 2500, 2500],
                eur: [2285, 2285, 2285],
                gbp: [2008, 2008, 2008],
                cad: [3414, 3414, 3414],
                aud: [3765, 3765, 3765],
                chf: [2246, 2246, 2246],
              },
            ],
            "50k": [
              {
                usd: [5000, 5000, 5000],
                eur: [4570, 4570, 4570],
                gbp: [4016, 4016, 4016],
                cad: [6828, 6828, 6828],
                aud: [7530, 7530, 7530],
                chf: [4493, 4493, 4493],
              },
            ],
            "100k": [
              {
                usd: [10000, 10000, 10000],
                eur: [9141, 9141, 9141],
                gbp: [8033, 8033, 8033],
                cad: [13656, 13656, 13656],
                aud: [15060, 15060, 15060],
                chf: [8986, 8986, 8986],
              },
            ],
            "200k": [
              {
                usd: [20000, 20000, 20000],
                eur: [18282, 18282, 18282],
                gbp: [16066, 16066, 16066],
                cad: [27313, 27313, 27313],
                aud: [30121, 30121, 30121],
                chf: [17973, 17973, 17973],
              },
            ],
            "500k": [
              {
                usd: [50000, 50000, 50000],
                eur: [45705, 45705, 45705],
                gbp: [40167, 40167, 40167],
                cad: [68282, 68282, 68282],
                aud: [75302, 75302, 75302],
                chf: [44934, 44934, 44934],
              },
            ],
          },
          maxLoss: {
            "10k": [
              {
                usd: [2000, 2000, 2000],
                eur: [1828, 1828, 1828],
                gbp: [1606, 1606, 1606],
                cad: [2731, 2731, 2731],
                aud: [3012, 3012, 3012],
                chf: [1797, 1797, 1797],
              },
            ],
            "25k": [
              {
                usd: [5000, 5000, 5000],
                eur: [4570, 4570, 4570],
                gbp: [4016, 4016, 4016],
                cad: [6828, 6828, 6828],
                aud: [7530, 7530, 7530],
                chf: [2246, 2246, 2246],
              },
            ],
            "50k": [
              {
                usd: [10000, 10000, 10000],
                eur: [9141, 9141, 9141],
                gbp: [8033, 8033, 8033],
                cad: [13656, 13656, 13656],
                aud: [15060, 15060, 15060],
                chf: [8986, 8986, 8986],
              },
            ],
            "100k": [
              {
                usd: [20000, 20000, 20000],
                eur: [18282, 18282, 18282],
                gbp: [16066, 16066, 16066],
                cad: [27313, 27313, 27313],
                aud: [30121, 30121, 30121],
                chf: [17973, 17973, 17973],
              },
            ],
            "200k": [
              {
                usd: [40000, 40000, 40000],
                eur: [36564, 36564, 36564],
                gbp: [32133, 32133, 32133],
                cad: [54626, 54626, 54626],
                aud: [60242, 60242, 60242],
                chf: [35947, 35947, 35947],
              },
            ],
            "500k": [
              {
                usd: [100000, 100000, 100000],
                eur: [91410, 91410, 91410],
                gbp: [80334, 80334, 80334],
                cad: [136565, 136565, 136565],
                aud: [150605, 150605, 150605],
                chf: [89869, 89869, 89869],
              },
            ],
          },
          profitTarget: {
            "10k": [
              {
                usd: [1400, 1000],
                eur: [1279, 914],
                gbp: [1124, 803],
                cad: [1911, 1365],
                aud: [2108, 1506],
                chf: [1258, 898],
              },
            ],
            "25k": [
              {
                usd: [3500, 2500],
                eur: [3199, 2285],
                gbp: [2811, 2008],
                cad: [4779, 3414],
                aud: [5271, 3765],
                chf: [3145, 2246],
              },
            ],
            "50k": [
              {
                usd: [7000, 5000],
                eur: [6398, 4570],
                gbp: [5623, 4016],
                cad: [9559, 6828],
                aud: [10542, 7530],
                chf: [6290, 4493],
              },
            ],
            "100k": [
              {
                usd: [14000, 10000],
                eur: [12797, 9141],
                gbp: [11246, 8033],
                cad: [19119, 13656],
                aud: [21084, 15060],
                chf: [12581, 8986],
              },
            ],
            "200k": [
              {
                usd: [28000, 20000],
                eur: [25594, 18282],
                gbp: [22493, 16066],
                cad: [38238, 27313],
                aud: [42169, 30121],
                chf: [25163, 17973],
              },
            ],
            "500k": [
              {
                usd: [70000, 50000],
                eur: [63987, 45705],
                gbp: [56233, 40167],
                cad: [95595, 68282],
                aud: [105423, 75302],
                chf: [62908, 62908],
              },
            ],
          },
        },
      ],
      normal: [
        {
          maxDailyLoss: {
            "10k": [
              {
                usd: [500, 500, 500],
                eur: [457, 457, 457],
                gbp: [401, 401, 401],
                cad: [682, 682, 682],
                aud: [753, 753, 753],
                chf: [449, 449, 449],
              },
            ],
            "25k": [
              {
                usd: [1250, 1250, 1250],
                eur: [1142, 1142, 1142],
                gbp: [1004, 1004, 1004],
                cad: [1707, 1707, 1707],
                aud: [1882, 1882, 1882],
                chf: [1250, 1250, 1250],
              },
            ],

            "50k": [
              {
                usd: [2500, 2500, 2500],
                eur: [2285, 2285, 2285],
                gbp: [2008, 2008, 2008],
                cad: [3414, 3414, 3414],
                aud: [3765, 3765, 3765],
                chf: [2246, 2246, 2246],
              },
            ],
            "100k": [
              {
                usd: [5000, 5000, 5000],
                eur: [4570, 4570, 4570],
                gbp: [4016, 4016, 4016],
                cad: [6828, 6828, 6828],
                aud: [7530, 7530, 7530],
                chf: [2246, 2246, 2246],
              },
            ],
            "200k": [
              {
                usd: [10000, 10000, 10000],
                eur: [9141, 9141, 9141],
                gbp: [8033, 8033, 8033],
                cad: [13656, 13656, 13656],
                aud: [15060, 15060, 15060],
                chf: [8986, 8986, 8986],
              },
            ],
            "500k": [
              {
                usd: [25000, 25000, 25000],
                eur: [22852, 22852, 22852],
                gbp: [20083, 20083, 20083],
                cad: [34141, 34141, 34141],
                aud: [37651, 37651, 37651],
                chf: [22467, 22467, 22467],
              },
            ],
          },
          maxLoss: {
            "10k": [
              {
                usd: [1000, 1000, 1000],
                eur: [914, 914, 914],
                gbp: [803, 803, 803],
                cad: [1365, 1365, 1365],
                aud: [1506, 1506, 1506],
                chf: [898, 898, 898],
              },
            ],
            "25k": [
              {
                usd: [2500, 2500, 2500],
                eur: [2285, 2285, 2285],
                gbp: [2008, 2008, 2008],
                cad: [3414, 3414, 3414],
                aud: [3765, 3765, 3765],
                chf: [2246, 2246, 2246],
              },
            ],
            "50k": [
              {
                usd: [5000, 5000, 5000],
                eur: [4570, 4570, 4570],
                gbp: [4016, 4016, 4016],
                cad: [6828, 6828, 6828],
                aud: [7530, 7530, 7530],
                chf: [2246, 2246, 2246],
              },
            ],
            "100k": [
              {
                usd: [10000, 10000, 10000],
                eur: [9141, 9141, 9141],
                gbp: [8033, 8033, 8033],
                cad: [500, 500, 500],
                aud: [15060, 15060, 15060],
                chf: [8986, 8986, 8986],
              },
            ],
            "200k": [
              {
                usd: [20000, 20000, 20000],
                eur: [18282, 18282, 18282],
                gbp: [16066, 16066, 16066],
                cad: [13656, 13656, 13656],
                aud: [30121, 30121, 30121],
                chf: [17973, 17973, 17973],
              },
            ],
            "500k": [
              {
                usd: [50000, 50000, 50000],
                eur: [45705, 45705, 45705],
                gbp: [40167, 40167, 40167],
                cad: [68282, 68282, 68282],
                aud: [75302, 75302, 75302],
                chf: [44934, 44934, 44934],
              },
            ],
          },
          profitTarget: {
            "10k": [
              {
                usd: [700, 500],
                eur: [639, 457],
                gbp: [562, 401],
                cad: [955, 682],
                aud: [1054, 753],
                chf: [629, 449],
              },
            ],
            "25k": [
              {
                usd: [1750, 1250],
                eur: [1599, 1142],
                gbp: [1405, 1004],
                cad: [2389, 1707],
                aud: [2635, 1882],
                chf: [1572, 1123],
              },
            ],
            "50k": [
              {
                usd: [3500, 2500],
                eur: [3199, 2285],
                gbp: [2811, 2008],
                cad: [4779, 3414],
                aud: [5271, 3765],
                chf: [3145, 2246],
              },
            ],
            "100k": [
              {
                usd: [7000, 5000],
                eur: [6398, 4570],
                gbp: [5623, 4016],
                cad: [9559, 6828],
                aud: [10542, 7530],
                chf: [6290, 4493],
              },
            ],
            "200k": [
              {
                usd: [14000, 10000],
                eur: [12797, 9141],
                gbp: [11246, 8033],
                cad: [19119, 13656],
                aud: [21084, 15060],
                chf: [12581, 8986],
              },
            ],
            "500k": [
              {
                usd: [35000, 25000],
                eur: [31993, 22852],
                gbp: [28116, 20083],
                cad: [47797, 34141],
                aud: [52711, 37651],
                chf: [31454, 22467],
              },
            ],
          },
        },
      ],
    },
  ];

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
                  {arrData[0][mode][0].maxDailyLoss[balance][0][currency].map(
                    (value, index) => {
                      return (
                        <td
                          className={`text-[13px] font-light px-16 lg:px-0 py-3 whitespace-nowrap text-center ${(() => {
                            if (index === 0) {
                              return "bg-bg-green1";
                            } else if (index === 1) {
                              return "bg-bg-green2";
                            } else {
                              return "bg-bg-green3";
                            }
                          })()}
                        }`}
                        >
                          <span>
                            {(() => {
                              if (currency === "usd") {
                                return "$";
                              } else if (currency === "eur") {
                                return "€";
                              } else if (currency === "gbp") {
                                return "£";
                              } else if (currency === "cad") {
                                return "CA$";
                              } else if (currency === "aud") {
                                return "A$";
                              } else if (currency === "chf") {
                                return "₣";
                              } else {
                                return "$";
                              }
                            })()}
                          </span>{" "}
                          {value}
                        </td>
                      );
                    }
                  )}
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
                  {arrData[0][mode][0].maxLoss[balance][0][currency].map(
                    (value, index) => {
                      return (
                        <td
                          className={`text-[13px] font-light px-16 lg:px-0 py-3 whitespace-nowrap text-center ${(() => {
                            if (index === 0) {
                              return "bg-bg-green1";
                            } else if (index === 1) {
                              return "bg-bg-green2";
                            } else {
                              return "bg-bg-green3";
                            }
                          })()}
                        }`}
                        >
                          <span>
                            {(() => {
                              if (currency === "usd") {
                                return "$";
                              } else if (currency === "eur") {
                                return "€";
                              } else if (currency === "gbp") {
                                return "£";
                              } else if (currency === "cad") {
                                return "CA$";
                              } else if (currency === "aud") {
                                return "A$";
                              } else if (currency === "chf") {
                                return "₣";
                              } else {
                                return "$";
                              }
                            })()}
                          </span>{" "}
                          {value}
                        </td>
                      );
                    }
                  )}
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
                  {arrData[0][mode][0].profitTarget[balance][0][currency].map(
                    (value, index) => {
                      return (
                        <td
                          className={`text-[13px] font-light px-16 lg:px-0 py-3 whitespace-nowrap text-center ${
                            index === 0 ? "bg-bg-green1" : "bg-bg-green2"
                          }`}
                        >
                          <span>
                            {(() => {
                              if (currency === "usd") {
                                return "$";
                              } else if (currency === "eur") {
                                return "€";
                              } else if (currency === "gbp") {
                                return "£";
                              } else if (currency === "cad") {
                                return "CA$";
                              } else if (currency === "aud") {
                                return "A$";
                              } else if (currency === "chf") {
                                return "₣";
                              } else {
                                return "$";
                              }
                            })()}
                          </span>{" "}
                          {value}
                        </td>
                      );
                    }
                  )}
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
                  <td className="text-[13px]  font-bold px-8 whitespace-nowrap bg-gradient-to-b from-bg-gray1 to-bg-gray2">
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
                <tr>
                  <td className="text-[13px] font-bold px-8 whitespace-nowrap bg-gradient-to-b from-bg-gray1 to-bg-gray2">
                    price
                  </td>
                  <td
                    colSpan="3"
                    className="text-[13px]  font-light px-16 lg:px-0 py-3 whitespace-nowrap bg-bg-green1 text-center"
                  >
                    {(() => {
                      if (balance === "10k") {
                        return "X$";
                      } else if (balance === "25k") {
                        return "X$ ($)";
                      } else if (balance === "50k") {
                        return "X$";
                      } else if (balance === "100k") {
                        return "X$";
                      } else if (balance === "200k") {
                        return "$X";
                      } else if (balance === "500k") {
                        return "X$";
                      } else {
                        return "X$";
                      }
                    })()}
                  </td>
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
