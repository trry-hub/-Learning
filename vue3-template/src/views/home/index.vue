<template>
  <div>
    <page-main>
      <div class="statistics">
        <div class="left">
          <p class="title">账户余额</p>
          <p class="count-value">41190</p>
          <div class="card-info">
            <span>提现卡：招商银行</span>
            <div class="card-num">5655***********8110</div>
          </div>
        </div>
        <ul class="right">
          <li>
            <p class="title">累计收入(元)</p>
            <p class="number">48500</p>
          </li>
          <li>
            <p class="title">平台采购(元)</p>
            <p class="number">47000</p>
          </li>
          <li>
            <p class="title">课程销售(元)</p>
            <p class="number">7570</p>
          </li>
          <li>
            <p class="title">累计售出(次)</p>
            <p class="number">46140</p>
          </li>
          <li>
            <p class="title">当月累计收入(元)</p>
            <p class="number">4745</p>
          </li>
          <li>
            <p class="title">当月平台采购(元)</p>
            <p class="number">5400</p>
          </li>
          <li>
            <p class="title">当月课程销售(元)</p>
            <p class="number">4700</p>
          </li>
          <li>
            <p class="title">当月累计售出(次)</p>
            <p class="number">46</p>
          </li>
        </ul>
      </div>
    </page-main>

    <page-main>
      <payment-details />
    </page-main>
  </div>
</template>

<script setup>
import PaymentDetails from './components/payment_details.vue'
</script>

<style lang="scss" scoped>
.statistics {
  display: grid;
  grid-template-columns: 1fr 5fr;
  background-color: #fff;
  margin-bottom: 15px;
  box-sizing: border-box;
  .left {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .title {
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #0f0f0f;
      line-height: 12px;
    }
    .count-value {
      width: 80%;
      text-align: center;
      font-size: 30px;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      color: #0f0f0f;
      line-height: 30px;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .card-info {
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #969696;
      line-height: 18px;
      text-align: center;
      margin-top: 12px;
    }
    &::after {
      content: '';
      width: 1px;
      height: 47px;
      background-color: #eee;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .right {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    li {
      list-style: none;
      text-align: center;
      overflow: hidden;
      .number {
        font-size: 30px;
        font-family: DINAlternate-Bold, DINAlternate;
        font-weight: bold;
        color: #0f0f0f;
        line-height: 30px;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .title {
        margin: 0 0 10px 0;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #0f0f0f;
        line-height: 12px;
      }
    }
  }
}
</style>
