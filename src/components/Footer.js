/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const FooterInfo = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <span>
        <button
          className="mt-2 text-black transition-all duration-150 ease-linear hover:text-yellow-deepYellow"
          type="button"
          onClick={() => setShowModal(true)}
        >
          {data.name}
        </button>
      </span>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              {/* content */}
              <div className="relative flex flex-col w-10/12 m-auto bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                  <h3 className="text-2xl font-semibold">{data.name}</h3>
                  <button
                    className="float-right p-1 ml-auto text-xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/* body */}
                <div className="relative flex-auto p-6">
                  <p className="my-4 text-lg leading-relaxed text-blueGray-500">
                    {data.content}
                  </p>
                </div>
                {/* footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
                  <button
                    className="px-6 py-2 mb-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

const Footer = () => {
  const data1 = {
    name: '意見回饋',
    content:
      '歡迎你加入成為大奶微微會員(以下稱會員服務)，本會員服務係由大奶微微股份有限公司(以下稱本服務)建置提供，所有申請使用會員服務之使用者(以下稱會員)，都應該詳細閱讀下列使用條款，這些使用條款訂立的目的，是為了保護會員服務的提供者以及所有使用者的利益，並構成使用者與會員服務提供者之間的契約，使用者完成註冊手續、或開始使用本會員服務時，即視為已知悉、並完全同意本使用條款的所有約定：本服務重視每位使用者的隱私權，將依本條款及個人資料保護法規定，蒐集、利用、處理與保護您的個人資料，希望您在使用本服務前，能夠詳細閱讀隱私權保護條款。'
  };
  const data2 = {
    name: '官方客服',
    content:
      '手機登入LINE，點選「加入好友」> 掃描上方行動條碼或輸入ID「@danaiweiwei」>  將 Danaiweiwei 加入好友獲得更即時的服務 > 週一至週五 9:30-12:00、13:30-18:30'
  };
  const data3 = {
    name: '使用者條款',
    content:
      '歡迎你加入成為大奶微微會員(以下稱會員服務)，本會員服務係由大奶微微股份有限公司(以下稱本服務)建置提供，所有申請使用會員服務之使用者(以下稱會員)，都應該詳細閱讀下列使用條款，這些使用條款訂立的目的，是為了保護會員服務的提供者以及所有使用者的利益，並構成使用者與會員服務提供者之間的契約，使用者完成註冊手續、或開始使用本會員服務時，即視為已知悉、並完全同意本使用條款的所有約定：本服務重視每位使用者的隱私權，將依本條款及個人資料保護法規定，蒐集、利用、處理與保護您的個人資料，希望您在使用本服務前，能夠詳細閱讀隱私權保護條款。'
  };
  const data4 = {
    name: '隱私權條款',
    content:
      '感謝您使用「大奶微微訂餐服務平台」，訂餐服務平台包括但不限於Web或手機App介面(以下簡稱本平台)，請詳閱本隱私權條款並於使用服務前確定了解本條款內容。當您瀏覽或使用提供之服務，即表示您同意蒐集、使用與轉載您提供的個人資訊。'
  };
  const data5 = {
    name: '信用卡條款',
    content:
      '歡迎您使用大奶微微股份有限公司(以下簡稱本公司)所提供之「大奶微微信用卡支付」服務(以下簡稱本服務)。請注意，當您勾選下列同意事項時，即視為您已充分審閱、瞭解及同意本服務條款，並同意遵守本服務條款之約定。'
  };
  return (
    <div className="w-full h-full p-20 bg-yellow-lightYellow">
      <footer className="pt-1 border-t border-white bg-yellow-lightYellow">
        <div className="container px-6 mx-auto">
          <div className="sm:flex sm:mt-8">
            <div className="flex flex-col justify-around mt-8 sm:mt-0 sm:w-full sm:px-8 md:flex-row">
              <div className="flex flex-col">
                <span className="mb-2 text-xl font-bold text-gray-700 uppercase">
                  大奶微微
                </span>
                <FooterInfo data={data1} />
                <FooterInfo data={data2} />
              </div>
              <div className="flex flex-col">
                <span className="mt-4 mb-2 text-xl font-bold text-gray-700 uppercase md:mt-0">
                  條款專區
                </span>
                <FooterInfo data={data3} />
                <FooterInfo data={data4} />
                <FooterInfo data={data5} />
              </div>
              <div className="flex">
                <a
                  href="https://docs.google.com/forms/d/1zsOLAtgRs2MwokC0RlCb0sVrgqygbXHECGH52tBNcvc/edit"
                  target="blank"
                  className="p-1 mt-10 text-3xl md:mt-0"
                >
                  <FaGoogle />
                </a>
                <a
                  href="https://github.com/Lindsay0214/Da-Nai-Wei-Wei-front-end"
                  target="blank"
                  className="p-1 mt-10 text-3xl md:mt-0"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center mt-6 ">
            <div className="pt-10 text-center sm:w-2/3">
              <p className="mb-2 text-sm text-black">
                © 2021 by Da Nei Wei Wei
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
