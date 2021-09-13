import EditButton from './components/EditButton';

const TitleArea = ({ data }) => {
  return (
    <div className="p-4 m-auto text-4xl tracking-widest text-center border-b border-black w-176">
      {data}
    </div>
  );
};
const AdjustMemberData = () => {
  return (
    <div className="flex-col bg-yellow-light">
      <div className="text-center h-28">header</div>
      <div className="flex-col h-auto">
        <TitleArea data="修改資料"></TitleArea>
        <div className="flex flex-wrap m-auto my-12 w-192">
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
export default AdjustMemberData;
