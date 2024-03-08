<template>
  <nut-searchbar v-model="query_content">
    <template #rightin>
      <Voice />
    </template>
    <template #rightout>
      <Search2 />
    </template>
  </nut-searchbar>

  <nut-config-provider :theme-vars="themeVars">
    <nut-cell style="background: #f8fbf7">
      <nut-popover v-model:visible="typeShow" location="right">
        <template #reference>
          <nut-button type="primary" shape="square"> 种类筛选 </nut-button>
        </template>

        <template #content>
          <nut-checkbox-group ref="group" v-model="state.checkboxgroup3" @change="changeBox4">
            <nut-checkbox v-for="item in state.checkboxsource" :key="item.label" :label="item.label">{{
              item.value
            }}</nut-checkbox>
          </nut-checkbox-group>
        </template>
      </nut-popover>
    </nut-cell>



    <nut-row :gutter="5" v-for="commodity in commodityData" :key="commodity.id1">
      <nut-col :span="12">
        <nut-cell style="background: #e5f1e3;height:165px" @click="showDetail(commodity.id1,commodity.position1,commodity.distance1,commodity.price1,commodity.name1)">
          <div>
            <div>
              <nut-image style="margin-bottom: 5px;" :round="true" :radius="8" src="https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg" width="100%" height="100px" :fit="contain" />
              <nut-ellipsis style="font-family: Source Han Sans SC;
                font-size: 14px;
                font-weight: 400;
                line-height: 16px;
                letter-spacing: 1px;
                text-align: left;
                color:#131212;
                margin-left: 15px;
                width:120px"
                :content="commodity.name1"
                ></nut-ellipsis> 
              <span style="margin-left: 15px">
                {{ "￥"+commodity.price1 }}
              </span>
              <!-- {{commodity.name1}}</span> -->
              <!-- <nut-ellipsis direction="start" :content="content" style="width:10px"></nut-ellipsis> -->
              <span style="
                font-family: Source Han Sans SC;
                font-size: 10px;
                font-weight: 400;
                line-height: 16px;
                letter-spacing: 0px;
                text-align: left;
                margin-left: 10px;
                ">
              {{ commodity.distance1 }}</span>
              <span style="
                margin-left: 20px;
                font-family: Source Han Sans SC;
                font-size: 10px;
                font-weight: 700;
                line-height: 13px;
                letter-spacing: 0px;
                text-align: left;
                ">
              {{ "剩余"+commodity.left1+"份" }}</span>
            </div>
            
            <span style="
              font-family: Source Han Sans SC;
              font-size: 10px;
              font-weight: 400;
              line-height: 16px;
              letter-spacing: 0px;
              text-align: left;
              margin-left: 15px;
              ">
            {{ commodity.position1 }}  </span>
            <nut-tag color="#8BA789" plain style="font-family: Source Han Sans SC;
              font-size: 11px;
              font-weight: 500;
              line-height: 13px;
              letter-spacing: 0px;
              text-align: left;
              margin-left: 10px;
              "> 
            {{ commodity.rating1 }} </nut-tag>
          </div>
          
        </nut-cell>
      </nut-col>

      <nut-col :span="12" v-if="commodity.id2!=-1">
        <nut-cell style="background: #e5f1e3;height:165px" @click="showDetail(commodity.id2,commodity.position2,commodity.distance2,commodity.price2,commodity.name2)">
          <div>
            <div>
              <nut-image style="margin-bottom: 5px;" :round="true" :radius="8" src="https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg" width="100%" height="100px" :fit="contain" />
              <nut-ellipsis style="font-family: Source Han Sans SC;
                font-size: 14px;
                font-weight: 400;
                line-height: 16px;
                letter-spacing: 1px;
                text-align: left;
                color:#131212;
                margin-left: 15px;
                width:120px"
                :content="commodity.name2"
                ></nut-ellipsis> 
              <!-- {{commodity.name1}}</span> -->
              <!-- <nut-ellipsis direction="start" :content="content" style="width:10px"></nut-ellipsis> -->

              <span style="margin-left: 15px">
                {{ "￥"+commodity.price1 }}
              </span>

              <span style="
                font-family: Source Han Sans SC;
                font-size: 10px;
                font-weight: 400;
                line-height: 16px;
                letter-spacing: 0px;
                text-align: left;
                margin-left: 10px;
                ">
              {{ commodity.distance2 }}</span>
              <span style="
                margin-left: 10px;
                font-family: Source Han Sans SC;
                font-size: 10px;
                font-weight: 700;
                line-height: 13px;
                letter-spacing: 0px;
                text-align: left;
                ">
              {{ "剩余"+commodity.left2+"份" }}</span>
            </div>
            
            <span style="
              font-family: Source Han Sans SC;
              font-size: 10px;
              font-weight: 400;
              line-height: 16px;
              letter-spacing: 0px;
              text-align: left;
              margin-left: 15px;
              ">
            {{ commodity.position2 }}  </span>
            <nut-tag color="#8BA789" plain style="font-family: Source Han Sans SC;
              font-size: 11px;
              font-weight: 500;
              line-height: 13px;
              letter-spacing: 0px;
              text-align: left;
              margin-left: 10px;
              "> 
            {{ commodity.rating2 }} </nut-tag>
          </div>
          
        </nut-cell>
      </nut-col>
    </nut-row>
  </nut-config-provider>
</template>



<script setup>
import { reactive,ref } from "vue";
import {
  Search2,
  Voice,
} from "@nutui/icons-vue";
import { useRouter } from "vue-router";

const state = reactive({
  checkboxgroup3: ['2'],
  checkboxsource: [
    { label: '1', value: 'A' },
    { label: '2', value: 'B' },
    { label: '3', value: 'C' },
    { label: '4', value: 'D' },
    { label: '5', value: 'E' },
    { label: '6', value: 'F' },
    { label: '7', value: 'G' },
    { label: '8', value: 'H' }
  ]
});

const group = ref(null);
const changeBox4 = (label) => {
  console.log(`${label.length === state.checkboxsource.length ? '全选' : '取消全选'}`);
};

// const route=useRoute();
const router=useRouter();

const themeVars = ref({
  cellPadding:"0px 0px",
  primaryColor: "#acc2a9",
  primaryColorEnd: "#acc2a9",
});
const typeShow=ref(false);
const query_content = ref("");

const commodityData=ref([
    {
      id1:"1",
      name1:"蓝莓燕麦曲奇",
      position1:"苹果花园鞍山新村二店",
      distance1:"2.2km",
      rating1:"4.9",
      price1:"5.2",
      left1:"2",
      id2:"2",
      name2:"蓝莓燕麦曲奇1",
      position2:"苹果花园鞍山新村二店1",
      distance2:"2.2km1",
      rating2:"4.91",
      price2:"5.21",
      left2:"21"
    },
    {
      id1:"3",
      name1:"蓝莓燕麦曲奇",
      position1:"苹果花园鞍山新村二店",
      distance1:"2.2km",
      rating1:"4.9",
      price1:"5.2",
      left1:"2",
      id2:"4",
      name2:"蓝莓燕麦曲奇1",
      position2:"苹果花园鞍山新村二店1",
      distance2:"2.2km1",
      rating2:"4.91",
      price2:"5.21",
      left2:"21"
    },
    {
      id1:"5",
      name1:"蓝莓燕麦曲奇",
      position1:"苹果花园鞍山新村二店",
      distance1:"2.2km",
      rating1:"4.9",
      price1:"5.2",
      left1:"2",
      id2:"6",
      name2:"蓝莓燕麦曲奇1",
      position2:"苹果花园鞍山新村二店1",
      distance2:"2.2km1",
      rating2:"4.91",
      price2:"5.21",
      left2:"21"
    }
])

const showDetail=(id,position,distance,price,name)=>{
  console.log(name)
  router.push({
    path:'/commodityDetail',
    query:{
      id:id,
      position:position,
      distance:distance,
      price:price,
      name:name
    }
  })
}
</script>

<style scoped>
</style>