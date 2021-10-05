# 大奶微微 Da-Nai-Wei-Wei
#### 大奶微微，你訂飲料の大平台。

↳ [專案連結點這](https://test.d3v2d5gigfl1ab.amplifyapp.com/)

## 專案簡介

#### 線上訂飲料的平台，依據當前位置搜尋附近店家，讓消費者可以選擇喜好的口味與尺寸線上訂購想喝的飲料，幫消費者省去現場等待的時間。

此為前端原始碼，採用 React 框架開發。

## 專案目標

Clone [你訂](https://order.nidin.shop/)部份功能的線上訂購飲料平台。

### 功能

- 前台功能

  - 使用者 (consumer)
    - 依當前位置查詢附近飲料店
    - 選擇尺寸、冰塊與糖度後加入購物車，最後透過綠界支付
    - 修改、刪除當前購買產品項目
    - 查看當前訂購項目與訂單記錄
    - 更改用戶資料

- 後台功能

  - 店家 (shop)
    - 上傳店家品牌封面照
    - 新增、修改與刪除產品資訊
  - 最高管理者 (admin)
    - 管理所有店家
    - 修改與刪除店家資訊

## 使用技術
- React Hooks
- Tailwind CSS
- 套件
  - React Router
  - Redux Toolkit
  - React Query
  - @brainhubeu/react-carousel
- API
  - Google API（Place & Distance）
  - Imgur
  - 綠界


## 如何本地端執行
0. 本地端要有 node.js、Git、SQL 環境
1. 在此頁面下載壓縮檔或 clone 到本地（連同[後端](https://github.com/Lindsay0214/Da-Nai-Wei-Wei)專案）
2. `npm install` 安裝專案所需套件
3. 由於專案使用到 Google、imgur API，所以要到 Google、imgur 申請對應的代碼（Key），申請完本地建立 `.env` 檔案將 key 存至變數，由於使用 react 框架，請命名依規範 `REACT_APP_XXX_KEY`
5. `npm start` 執行專案（連同後端專案一併操作）
以下提供測試用的帳號密碼：

| Name     | email           | password | 權限      |
| -------- | --------------- | -------- | -------- |
| Admin    | admin@gmail.com | Admin000 | 最高權限  |
| 迷客夏     | 1002@gmail.com  | 0        | 店家     |
| Lindsay | 00@gmail.com    | Aa000000 | 使用者   |

## 專案展示

###### 權限

![](https://i.imgur.com/cGwSG7o.gif)

###### 登入

![](https://i.imgur.com/ZCOIIEM.gif)

###### [使用者] 購買、編輯商品

![](https://i.imgur.com/k7QABkC.gif)

###### [使用者] 修改會員資料

![](https://i.imgur.com/AYon1Kd.gif)

###### [使用者] 查看歷史訂單

![](https://i.imgur.com/kNX2OTh.gif)

###### [使用者] 查詢店家

![](https://i.imgur.com/wux8oPM.gif)

###### [管理員] 管理店家

![](https://i.imgur.com/GIGjLre.gif)

###### [店家] 修改商品

![](https://i.imgur.com/xSmrMLC.gif)

###### [店家] 上傳店家形象照

![](https://i.imgur.com/TuYLZ5H.gif)

## 專案後端

大奶微微訂購飲料平台後端，採用 Express 和 Sequelize 進行開發。

↳ [後端專案連結點這](https://github.com/Lindsay0214/Da-Nai-Wei-Wei)
