import React from "react";
import { Pagination } from "antd";

const LeaderboardTable = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 mt-12">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="w-full table-auto border-separate [border-spacing:1px]">
              <thead>
                <tr>
                  <th>
                    <div className="pb-2">
                      <p className="text-bg-green3 mt-2 uppercase font-semibold text-base text-left pl-6">
                        #
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="border-l border-light-green pb-2">
                      <p className="text-bg-green3 mt-2 uppercase font-semibold text-base text-left pl-6">
                        name
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="border-l border-light-green pb-2">
                      <p className="text-bg-green3 mt-2 uppercase font-semibold text-base text-left pl-6">
                        profit
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="border-l border-light-green pb-2">
                      <p className="text-bg-green3 mt-2 uppercase font-semibold text-base text-left pl-6">
                        Equity
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="border-l border-light-green pb-2">
                      <p className="text-bg-green3 mt-2 uppercase font-semibold text-base text-left pl-6">
                        Account size
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="border-l border-light-green pb-2">
                      <p className="text-bg-green3 mt-2 uppercase font-semibold text-base text-left pl-6">
                        gain %
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="border-l border-light-green pb-2">
                      <p className="text-bg-green3 mt-2 uppercase font-semibold text-base text-left pl-6">
                        country
                      </p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="uppercase text-lighter-black">
                <tr>
                  <td className="text-md font-semibold px-6 py-4 bg-gradient-to-b from-bg-gray1 to-bg-gray2 w-[2%]">
                    01
                  </td>
                  <td className="text-sm font-semibold px-6 py-4 whitespace-nowrap bg-gradient-to-b from-bg-gray1 to-bg-gray2 w-[15%]">
                    Keenan M.
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6  py-4 whitespace-nowrap bg-leaderboard-table-bg1 w-[15%]">
                    $21,239.69
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg2 w-[15%]">
                    $221,239.69
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg3 w-[15%]">
                    $200,000.00
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg4 w-[15%]">
                    11%
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg5 w-[15%]">
                    South Africa
                  </td>
                </tr>
                <tr>
                  <td className="text-md font-semibold px-6 py-4 bg-gradient-to-b from-bg-gray1 to-bg-gray2 w-[2%]">
                    02
                  </td>
                  <td className="text-sm font-semibold px-6 py-4 whitespace-nowrap bg-gradient-to-b from-bg-gray1 to-bg-gray2 w-[15%]">
                    shrikantagoud M.
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6  py-4 whitespace-nowrap bg-leaderboard-table-bg1 w-[15%]">
                    $21,135.28
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg2 w-[15%]">
                    $120,070.62
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg3 w-[15%]">
                    $100,000.00
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg4 w-[15%]">
                    21%
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg5 w-[15%]">
                    India
                  </td>
                </tr>
                <tr>
                  <td className="text-md font-semibold px-6 py-4 bg-gradient-to-b from-bg-gray1 to-bg-gray2 w-[2%]">
                    03
                  </td>
                  <td className="text-sm font-semibold px-6 py-4 whitespace-nowrap bg-gradient-to-b from-bg-gray1 to-bg-gray2 w-[15%]">
                    MD MASUD R.
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6  py-4 whitespace-nowrap bg-leaderboard-table-bg1 w-[15%]">
                    $18,887.41
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg2 w-[15%]">
                    $116,990.25
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg3 w-[15%]">
                    $100,000.00
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg4 w-[15%]">
                    19%
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg5 w-[15%]">
                    United Kingdom
                  </td>
                </tr>
                <tr>
                  <td className="text-md font-semibold px-6 py-4 bg-gradient-to-b from-bg-gray1 to-bg-gray2 w-[2%]">
                    04
                  </td>
                  <td className="text-sm font-semibold px-6 py-4 whitespace-nowrap bg-gradient-to-b from-bg-gray1 to-bg-gray2 w-[15%]">
                    steven C.
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6  py-4 whitespace-nowrap bg-leaderboard-table-bg1 w-[15%]">
                    $18,441.42
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg2 w-[15%]">
                    $118,441.42
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg3 w-[15%]">
                    $100,000.00
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg4 w-[15%]">
                    18%
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg5 w-[15%]">
                    Netherlands
                  </td>
                </tr>

                <tr>
                  <td className="text-md font-semibold px-6 py-4 bg-gradient-to-b from-bg-gray1 to-bg-gray2 w-[2%]">
                    05
                  </td>
                  <td className="text-sm font-semibold px-6 py-4 whitespace-nowrap bg-gradient-to-b from-bg-gray1 to-bg-gray2 w-[15%]">
                    Kevin K.
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6  py-4 whitespace-nowrap bg-leaderboard-table-bg1 w-[15%]">
                    $17,513.85
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg2 w-[15%]">
                    $218,713.85
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg3 w-[15%]">
                    $200,000.00
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg4 w-[15%]">
                    9%
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg5 w-[15%]">
                    USA
                  </td>
                </tr>
                <tr>
                  <td className="text-md font-semibold px-6 py-4 bg-gradient-to-b from-bg-gray1 to-bg-gray2 w-[2%]">
                    06
                  </td>
                  <td className="text-sm font-semibold px-6 py-4 whitespace-nowrap bg-gradient-to-b from-bg-gray1 to-bg-gray2 w-[15%]">
                    Kevin K.
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6  py-4 whitespace-nowrap bg-leaderboard-table-bg1 w-[15%]">
                    $17,509.94
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg2 w-[15%]">
                    $218,709.94
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg3 w-[15%]">
                    $200,000.00
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg4 w-[15%]">
                    9%
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg5 w-[15%]">
                    USA
                  </td>
                </tr>
                <tr>
                  <td className="text-md font-semibold px-6 py-4 bg-gradient-to-b from-bg-gray1 to-bg-gray2 w-[2%]">
                    07
                  </td>
                  <td className="text-sm font-semibold px-6 py-4 whitespace-nowrap bg-gradient-to-b from-bg-gray1 to-bg-gray2 w-[15%]">
                    Johannes V.
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6  py-4 whitespace-nowrap bg-leaderboard-table-bg1 w-[15%]">
                    $17,279.35
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg2 w-[15%]">
                    $217,279.35
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg3 w-[15%]">
                    $200,000.00
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg4 w-[15%]">
                    9%
                  </td>
                  <td className="text-sm font-semibold px-6 lg:px-6 py-4 whitespace-nowrap bg-leaderboard-table-bg5 w-[15%]">
                    Netherlands
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Pagination size="small" total={50} current={2} responsive />
        </div>
      </div>
    </div>
  );
};

export default LeaderboardTable;
