<template>
    <div class="container newsl_container">
        <h2>Join to our newsletter</h2>
        <div class="form">
            <input type="text" v-model="email"/>
            <button @click="submitHandler">Subscribe</button>
        </div>
        <div class="error_label">
            <div>{{ error }}</div>
        </div>
        <div class="success_label">
            <div>{{ success }}</div>
        </div>
        <div class="small">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
</template>


<script lang="ts">
    import {Component,Vue} from "vue-property-decorator";

    type validate = {
        valid: boolean;
        msg: string;
    }

    @Component
    export default class Newsletter extends Vue {
        private email: string = '';
        private error: string = '';
        private success: string = '';

        public submitHandler(): void {
            let valid:validate = this.validate(this.email);
            if(valid.valid){
                this.error = '';
                this.addEmail(this.email);
            } else {
                this.error = valid.msg
            }
        }

        public validate(email:string):validate{
            let valid:validate = {
                valid:true,
                msg:''
            }
            if(!email){
                valid.valid = false;
                valid.msg = 'Its Empty';
            }

            if(!/\S+@\S+\.\S+/.test(email)){
                valid.valid = false;
                valid.msg = 'Enter a valid email';
            }

            return valid
        }

        public addEmail(email:string):void {
            this.$http.get(`users.json?orderBy=\"email\"&&equalTo=\"${email}\"`)
                .then( response => {
                    if(Object.getOwnPropertyNames(response.data).length === 0){
                        this.$http.post('users.json',{email: this.email})
                            .then( response => {
                                this.success = 'Thank you'
                            });
                    } else {
                        this.success = 'Already on the list'
                    }
                });
            this.clearSuccess()
        }

        public clearSuccess():void{
            setTimeout(()=>{
                this.email = '';
                this.success = '';
            },3000)
        }

    }
</script>
