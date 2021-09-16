import EditButton from '../../components/EditButton';
import TitleArea from '../../components/TitleArea';

const AdjustMemberDataPage = () => {
  return (
    <div className="flex-col bg-yellow-light">
      <div className="text-center h-28">header</div>
      <div className="flex-col w-64 p-2 m-auto bg-white rounded-md lg:bg-yellow-light lg:w-176 ">
        <TitleArea data="修改資料"></TitleArea>
        <div className="flex flex-wrap w-48 pb-10 m-auto justify-evenly lg:w-176">
          <EditButton data="修改姓名"></EditButton>
          <EditButton data="修改密碼"></EditButton>
          <EditButton data="修改信箱"></EditButton>
          <EditButton data="修改信用卡"></EditButton>
        </div>
      </div>
      <div className="text-center h-28">footer</div>
    </div>
  );
};
export default AdjustMemberDataPage;
