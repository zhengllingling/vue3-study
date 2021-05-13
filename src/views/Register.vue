<template>
    <div class="Register">
        <el-form>
            <el-form-item label="用户名">
                <el-input v-model="account.userName" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="account.password" placeholder="审批人"></el-input>
            </el-form-item>
             <el-form-item>
                <el-button type="primary" @click="onSubmit()">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang="ts">
import { Account } from "../model/account";
import { defineComponent, reactive } from 'vue';
export default defineComponent({
    name: "Login",
    setup() { 
        const { account, onSubmit } = registerAccount();
        
        return { account, onSubmit }
    }
})

function registerAccount() {
    const account:Account = reactive({
        userName: "",
        password: ""
    })
    const accountList: Account[] = [];
    function onSubmit() {
        accountList.push(account);
    }
    return { account, onSubmit }
}
</script>