<template>
    <div>
        <van-image
                round
                width="10rem"
                height="10rem"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <van-row class="user-links">
            <van-col span="6">
                <van-icon name="pending-payment"/>
                待付款
            </van-col>
            <van-col span="6">
                <van-icon name="records"/>
                待接单
            </van-col>
            <van-col span="6">
                <van-icon name="tosend"/>
                待发货
            </van-col>
            <van-col span="6">
                <van-icon name="logistics"/>
                已发货
            </van-col>
        </van-row>
        <van-cell-group>
            <van-cell value="收货地址" icon="location-o" is-link to="/addressList"/>
            <van-cell value="单元格" icon="location-o" is-link/>
            <van-cell value="单元格" icon="location-o" is-link/>
        </van-cell-group>
    </div>
</template>
<script>
    import {Cell, CellGroup, Col, Image, Row} from 'vant';

    export default {
        data() {
            return {
                aboutMsg: '我的'
            }
        },
        components: {
            [Row.name]: Row,
            [Col.name]: Col,
            [Image.name]: Image,
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup
        }
    }
</script>