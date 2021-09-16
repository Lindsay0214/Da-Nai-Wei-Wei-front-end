import TitleArea from '../../components/TitleArea';
import EditButton from '../../components/EditButton';

const CreditCardStartPage = () => {
  return (
    <div className="flex-col bg-yellow-light">
      <div className="text-center h-28">header</div>
      <div className="flex-col w-64 p-2 m-auto bg-white rounded-md lg:bg-yellow-light lg:w-176 ">
        <TitleArea data="信用卡"></TitleArea>
        <div className="flex-col m-auto text-sm leading-7 tracking-normal text-center rounded-md lg:leading-10 lg:text-2xl lg:tracking-widest lg:w-144 my-11">
          <div>歡迎使用信用卡支付</div>
          <div>您可以設定信用卡或 Debit 金融卡</div>
          <div>立即設定並體驗安全便利的付款流程！</div>
          <div className="flex m-auto">
            <div className="m-auto ">
              <EditButton data="＋ 新增卡片"></EditButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreditCardStartPage;
