<template>
    <div class="appbar-padding" v-wheight>
        <div style="height:100%">
            <tab id="tab" v-depth="1">
                <tab-item v-ripple>View</tab-item>
                <tab-item v-ripple>Code</tab-item>
            </tab>
            <tab-content element="#tab" :size="2">
                <tab-content-item>
                    <clearfix>
                        <checkbox name="checkboxTest" v-model="checkboxData"></checkbox>
                        <checkbox name="checkboxTest" v-model="checkboxDataFalse" class="accent"></checkbox>
                        <checkbox name="checkboxTest" v-model="checkboxData" class="green"></checkbox>
                        <checkbox name="checkboxTest" v-model="checkboxData" class="red"></checkbox>
                        <checkbox name="checkboxTest" v-model="checkboxData" class="pink"></checkbox>
                        <checkbox name="checkboxTest" v-model="checkboxData" class="blue"></checkbox>
                        <checkbox name="checkboxTest" v-model="checkboxData" class="indigo"></checkbox>
                        <checkbox name="checkboxTest" v-model="checkboxData" class="teal"></checkbox>
                        <checkbox name="checkboxTest" v-model="checkboxData" class="amber"></checkbox>
                        <checkbox name="checkboxTest" v-model="checkboxData" class="orange"></checkbox>
                        <checkbox name="checkboxTest" v-model="checkboxData" class="deep-orange"></checkbox>
                        <checkbox name="checkboxTest" v-model="checkboxData" class="deep-purple"></checkbox>
                        <checkbox name="checkboxTest" v-model="checkboxData" class="light-blue"></checkbox>
                        <checkbox name="checkboxTest" v-model="checkboxData" class="cyan"></checkbox>
                        <checkbox name="checkboxTest" v-model="checkboxData" class="light-green"></checkbox>
                        <checkbox name="checkboxTest" v-model="checkboxData" class="lime"></checkbox>
                        <checkbox name="checkboxTest" v-model="checkboxData" class="yellow"></checkbox>
                        <checkbox name="checkboxTest" v-model="checkboxData" class="brown"></checkbox>
                        <checkbox name="checkboxTest" v-model="checkboxData" class="blue-grey"></checkbox>
                        <checkbox name="checkboxTest" v-model="checkboxData" disabled></checkbox>
                    </clearfix>
                    <clearfix>
                        <radio name="radioTest" v-model="radioData"></radio>
                        <radio name="radioTest" v-model="radioData" class="accent"></radio>
                        <radio name="radioTest" v-model="radioData" class="green"></radio>
                        <radio name="radioTest" v-model="radioData" class="red"></radio>
                        <radio name="radioTest" v-model="radioData" class="pink"></radio>
                        <radio name="radioTest" v-model="radioData" class="blue"></radio>
                        <radio name="radioTest" v-model="radioData" class="indigo"></radio>
                        <radio name="radioTest" v-model="radioData" class="teal"></radio>
                        <radio name="radioTest" v-model="radioData" class="amber"></radio>
                        <radio name="radioTest" v-model="radioData" class="orange"></radio>
                        <radio name="radioTest" v-model="radioData" class="deep-orange"></radio>
                        <radio name="radioTest" v-model="radioData" class="deep-purple"></radio>
                        <radio name="radioTest" v-model="radioData" class="light-blue"></radio>
                        <radio name="radioTest" v-model="radioData" class="cyan"></radio>
                        <radio name="radioTest" v-model="radioData" class="light-green"></radio>
                        <radio name="radioTest" v-model="radioData" class="lime"></radio>
                        <radio name="radioTest" v-model="radioData" class="yellow"></radio>
                        <radio name="radioTest" v-model="radioData" class="brown"></radio>
                        <radio name="radioTest" v-model="radioData" class="blue-grey"></radio>
                        <radio name="radioTest" v-model="radioData" disabled></radio>
                    </clearfix>
                    <clearfix>
                        <switches name="switchTest" v-model="switchData"></switches>
                        <switches name="switchTest" v-model="switchData" class="accent"></switches>
                        <switches name="switchTest" v-model="switchData" class="green"></switches>
                        <switches name="switchTest" v-model="switchData" class="red"></switches>
                        <switches name="switchTest" v-model="switchData" class="pink"></switches>
                        <switches name="switchTest" v-model="switchData" class="blue"></switches>
                        <switches name="switchTest" v-model="switchData" class="indigo"></switches>
                        <switches name="switchTest" v-model="switchData" class="teal"></switches>
                        <switches name="switchTest" v-model="switchData" class="amber"></switches>
                        <switches name="switchTest" v-model="switchData" class="orange"></switches>
                        <switches name="switchTest" v-model="switchData" class="deep-orange"></switches>
                        <switches name="switchTest" v-model="switchData" class="deep-purple"></switches>
                        <switches name="switchTest" v-model="switchData" class="light-blue"></switches>
                        <switches name="switchTest" v-model="switchData" class="cyan"></switches>
                        <switches name="switchTest" v-model="switchData" class="light-green"></switches>
                        <switches name="switchTest" v-model="switchData" class="lime"></switches>
                        <switches name="switchTest" v-model="switchData" class="yellow"></switches>
                        <switches name="switchTest" v-model="switchData" class="brown"></switches>
                        <switches name="switchTest" v-model="switchData" class="blue-grey"></switches>
                        <switches name="switchTest" v-model="switchData" disabled></switches>
                    </clearfix>
                </tab-content-item>
                <tab-content-item>
                    <div style="padding: 16px;">
                        <clearfix>
                            <div class="font-title">Example #1</div>
                            <highlight-code lang="html">{{code1}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Example #2</div>
                            <highlight-code lang="html">{{code2}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Example #3</div>
                            <highlight-code lang="html">{{code3}}</highlight-code>
                        </clearfix>
                    </div>
                </tab-content-item>
            </tab-content>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checkboxData: true,
                checkboxDataFalse: false,
                switchData: "",
                radioData: "",
                code1: ``,
                code2: ``,
                code3: ``,
            }
        }
    }
</script>