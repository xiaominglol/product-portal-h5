<template>
    <div>
        <van-swipe-cell :on-close="onClose">
            <template slot="left">
                <van-button square type="primary" text="选择"/>
            </template>

            <van-cell :border="false" title="单元格" value="内容"/>

            <template slot="right">
                <van-button square type="danger" text="删除"/>
            </template>
        </van-swipe-cell>
    </div>
</template>
<script>
    import {Dialog, SwipeCell} from 'vant';

    export default {
        data() {
            return {
                aboutMsg: '我的'
            }
        },
        methods: {
            // clickPosition 表示关闭时点击的位置
            onClose(clickPosition, instance) {
                switch (clickPosition) {
                    case 'left':
                    case 'cell':
                    case 'outside':
                        instance.close();
                        break;
                    case 'right':
                        Dialog.confirm({
                            message: '确定删除吗？'
                        }).then(() => {
                            instance.close();
                        });
                        break;
                }
            }
        },
        components: {
            [SwipeCell.name]: SwipeCell,
            [Dialog.Component.name]: Dialog.Component
        }
    }
</script>