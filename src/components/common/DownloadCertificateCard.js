import React from "react";
import ButtonOutlined from "./ButttonOutlined";

const DownloadCertificateCard = ({ bgColor, textColor }) => {
  return (
    <div>
      <div className="border-2 border-dashed border-light-green mb-6 rounded-lg">
        <div className="bg-cerificate-bg min-h-[400px] rounded-lg m-2"></div>
      </div>
      <div className="flex justify-center">
        <ButtonOutlined
          textSize="text-xs"
          buttonText="DOWNLOAD CERTIFICATE"
          paddingY="py-4"
          paddingX="px-6 md:px-8 lg:px-10"
          bg={bgColor}
          textColor={textColor}
        />
      </div>
    </div>
  );
};

export default DownloadCertificateCard;
