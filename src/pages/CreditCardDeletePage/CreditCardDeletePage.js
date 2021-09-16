import TitleArea from '../../components/TitleArea';
import SmallButton from '../../components/SmallButton';

const CreditCardDeletePage = () => {
  return (
    <div className="flex-col bg-yellow-light">
      <div className="text-center h-28">header</div>
      <div className="flex-col w-64 p-2 m-auto bg-white rounded-md lg:bg-yellow-light lg:w-176 ">
        <TitleArea data="已綁定信用卡"></TitleArea>
        <div className="flex flex-col-reverse w-40 h-20 m-auto text-left rounded-md lg:h-36 lg:w-72 bg-gray-default bg-opacity-60 my-11">
          <span className="pb-2 pl-4 text-sm">XXXX-XXXX-XXXX-XXXX</span>
        </div>
        <div className="flex justify-center w-40 m-auto lg:w-128 ">
          <SmallButton data="- 刪除"></SmallButton>
        </div>
      </div>
      <div className="text-center h-28">footer</div>
    </div>
  );
};
export default CreditCardDeletePage;
