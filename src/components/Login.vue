<template>
    <div id="login">
        <br/>
        <br/>
        <br/>
        <br/>
        <van-row type="flex" justify="center">
            <van-col span="2"></van-col>
            <van-col span="20">
                <van-tabs v-model="active" color="#07c160" @change="change">
                    <van-tab title="短信登陆">
                        <van-cell-group>
                            <van-field
                                    v-model="phone"
                                    maxlength="11"
                                    placeholder="请输入手机号"

                            />
                            <van-field
                                    v-model="code"
                                    center
                                    maxlength="6"
                                    placeholder="请输入短信验证码"
                            >
                                <van-button slot="button" v-bind:disabled="!checkPhone" size="small" type="primary"
                                            @click="sendSms">发送验证码
                                </van-button>
                            </van-field>
                        </van-cell-group>
                        <van-button type="primary" size="large" @click="login">登录</van-button>
                    </van-tab>
                    <van-tab title="密码登陆">
                        <van-cell-group>
                            <van-field
                                    v-model="phone"
                                    maxlength="11"
                                    placeholder="请输入手机号"
                            />
                            <van-field v-model="password" type="password" maxlength="6" placeholder="请输入密码">
                                <van-button slot="button" size="small" type="primary" @click="forgetPassword">忘记密码?
                                </van-button>
                            </van-field>
                        </van-cell-group>
                        <van-button type="primary" size="large" @click="login">登录</van-button>
                    </van-tab>
                </van-tabs>
            </van-col>
            <van-col span="2"></van-col>
        </van-row>
        <br/>
        <van-row type="flex" justify="center">
            <van-col span="4"></van-col>
            <van-col span="16">
                <van-divider>温馨提示：未注册的手机号，登录时将自动注册,且代表已同意<a href="#">《用户协议和隐私政策》</a></van-divider>
            </van-col>
            <van-col span="4"></van-col>
        </van-row>
    </div>
</template>

<script>
    import {Button, Col, Field, Row, Tab, Tabs, Toast} from 'vant';
    import {login} from "../api/member";

    export default {
        name: 'login',
        data() {
            return {
                loginType: "sms",//登陆类型：sms短信登陆，password密码登陆
                phone: "",//手机号
                code: "",//验证码
                password: "",//密码
                disabled: true,//是否禁用发送验证码按钮
            }
        },
        computed: {
            checkPhone() {
                return /^1\d{10}$/.test(this.phone)
            }
        },
        methods: {
            login() {
                if (!this.checkPhone) {
                    Toast("手机号不正确")
                } else {
                    if (this.loginType === "sms") {
                        if (!this.code) {
                            Toast("短信验证码不能为空")
                        } else {
                            login({phone: this.phone, code: this.code}).then(response => {
                                let result = response.data;
                                this.$store.dispatch('saveMember', result)
                                this.$router.push('/my')
                            });
                        }
                    } else {
                        if (!this.password) {
                            Toast("密码不能为空")
                        }
                    }
                }
            },
            sendSms() {
                Toast("发送成功")
            },
            forgetPassword() {
                Toast("忘记密码")
            },
            change(name) {
                if (name === 0) {
                    this.loginType = "sms"
                } else {
                    this.loginType = "password"
                }
            }
        },
        components: {
            [Row.name]: Row,
            [Col.name]: Col,
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
            [Field.name]: Field,
            [Button.name]: Button,
            [Toast.name]: Toast,
        }
    }
</script>

