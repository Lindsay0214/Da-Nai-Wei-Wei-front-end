import TitleArea from '../../components/TitleArea';
import EditButton from '../../components/EditButton';

const CreditCardUpdatePage = () => {
  return (
    <div className="flex-col bg-yellow-light">
      <div className="text-center h-28">header</div>
      <div className="flex-col w-64 p-2 m-auto bg-white rounded-md lg:bg-yellow-light lg:w-176 ">
        <TitleArea data="已綁定信用卡"></TitleArea>
        <div className="flex flex-col-reverse w-40 h-20 m-auto text-left rounded-md lg:h-36 lg:w-72 bg-gray-default bg-opacity-60 my-11">
          <span className="p-2">XXXX-XXXX-XXXX-XXXX</span>
        </div>
        <div className="flex m-auto lg:w-144">
          <div className="m-auto mb-10">
            {/* 這個 div 只是拿來左右置中用的 */}
            <EditButton data="修改卡片資訊"></EditButton>
          </div>
        </div>
      </div>
      <div className="text-center h-28">footer</div>
    </div>
  );
};
export default CreditCardUpdatePage;
