<template>
    <div v-wheight class="appbar-padding">
        <div style="padding-top: 20px; padding-left: 16px; padding-right: 16px;">
            <textarea name="name" rows="8" style="width: 100%;" v-model="data">

            </textarea>
            <clearfix>
                <raised-button class="primary" v-ripple="" @click="runCode"><icon name="plus"></icon> Get Flow</raised-button>
            </clearfix>
            <clearfix v-if="hasResult">
                <div><b>Start State:</b> {{firstStateName}}</div>
                <div><b>End State:</b> {{lastStateName}}</div>
                <div><b>Number of State:</b> {{numState}}</div>
                <div><b>Number of State:</b> {{numState}}</div>
                <div><b>Flow:</b></div>
                <ul >
                    <li v-for="f in flow">
                        <span v-for="s in f"><b>{{s.name}}</b> - </span>
                    </li>
                </ul>
            </clearfix>
        </div>

    </div>
</template>

<script>
import * as xml2js from "xml2js";
// import * as fs from "fs";
export default {
    name: 'app',
    data () {
        return {
            data: "",
            firstState: undefined,
            lastState: undefined,
            stateTransition: [],
            flow: [],
        }
    },
    computed: {
        hasResult() {
            if (this.stateTransition.length === 0 || this.flow.length === 0) {
                return false;
            }
            return true;
        },
        firstStateName() {
            if (this.firstState) {
                return this.firstState.name;
            }
            return "undefined";
        },
        lastStateName() {
            if (this.lastState) {
                return this.lastState.name;
            }
            return "undefined";
        },
        numState() {
            return this.stateTransition.length
        }
    },
    methods: {
        nextAction() {
            this.$snackbar.run("You can redirect to other page here");
        }
    },
    methods: {
        runCode() {
            let self= this;
            let parseString = xml2js.parseString;
            let xml = this.data;
            self.stateTransition = [];
            parseString(xml, function (err, result) {
                self.getChildKeys(result);
            });
        },
        getChildKeys($object) {
            let self = this;
            let result = Object.keys($object);
            if (result.length) {
                result.forEach((key)=> {
                    if(typeof $object[key] === "object") {
                        if(key === "UML:StateMachine") {
                            console.log("Detect UML State Machine");
                            self.detectStateMachine($object[key]);
                        } else {
                            self.getChildKeys($object[key]);
                        }
                    }
                })
            }
        },
        detectStateMachine(object) {
            let self = this;
            let result = Object.keys(object);

            result.forEach((key)=> {
                if(typeof object[key] === "object") {
                    if(key === "UML:StateMachine.top") {
                        console.log("Detect UML State Machine Top");
                        self.detectStateMachineTop(object[key]);
                    } else if(key === "UML:StateMachine.transitions") {
                        console.log("Detect UML State Machine Transition");
                        self.detectStateMachineTransition(object[key]);
                    } else {
                        self.detectStateMachine(object[key]);
                    }
                }
            })
        },
        detectStateMachineTop(object) {
            let self = this;
            let result = Object.keys(object);
            result.forEach((key)=> {
                if(typeof object[key] === "object") {
                    if(key === "UML:Pseudostate") {
                        console.log("Detect UML Pseudo state");
                        self.detectPseudoState(object[key]);
                    } if(key === "UML:SimpleState") {
                        console.log("Detect UML Simple State");
                        self.detectSimpleState(object[key]);
                    } else {
                        self.detectStateMachineTop(object[key]);
                    }
                }
            })
        },
        detectStateMachineTransition(object) {

        },
        detectPseudoState(object) {
            let self = this;
            object.forEach((item) => {
                self.pushTransitionState(item);
            })
        },
        detectSimpleState(object) {
            let self = this;
            object.forEach((item) => {
                self.pushTransitionState(item);
            })
            self.getFirstState();
            self.getLastState();
            self.counting =0;
            self.getFlow(self.firstState);
            console.log(self.flow);
        },
        pushTransitionState(item) {
            let self = this;
            let obj = {
                name: item.$.name,
                id: item.$["xmi.id"],
                incoming: self.getIncomingRef(item),
                outgoing: self.getOutgoingRef(item),
            }
            self.stateTransition.push(obj);
        },
        getIncomingRef(object) {
            let items = object["UML:StateVertex.incoming"];
            let result = [];
            if(items) {

                items.forEach((item)=> {
                    let transitions = item["UML:Transition"];
                    transitions.forEach((t)=> {
                        result.push(t.$['xmi.idref']);
                    })
                })
            }
            return result;
        },
        getOutgoingRef(object) {
            let items = object["UML:StateVertex.outgoing"];
            let result = [];
            if(items) {
                items.forEach((item)=> {
                    let transitions = item["UML:Transition"];
                    transitions.forEach((t)=> {
                        result.push(t.$['xmi.idref']);
                    })
                })
            }
            return result;
        },
        getFlow(state, currentRoute = [], transitions = [], myIncomingId = undefined, take = false) {
            let self = this;
            self.counting += 1;
            currentRoute.push(state);
            if (take) {
                self.flow.push(currentRoute);
            }
            if (myIncomingId) {
                transitions.push(myIncomingId);
            }
            if (state.outgoing.length > 0) {
                state.outgoing.forEach(t => {
                    let nextTransitions = transitions.slice();
                    let nextRoute = currentRoute.slice();
                    let nextState = this.getStateFromOutgoingId(t, nextTransitions);

                    if(nextState) {
                        self.getFlow(nextState, nextRoute, nextTransitions, t, true);
                    }
                })
            }

        },
        getFirstState() {
            let self = this;
            self.stateTransition.forEach((t)=> {
                if (t.incoming.length === 0) {
                    self.firstState = t;
                }
            });
        },
        getLastState() {
            let self = this;
            self.stateTransition.forEach((t)=> {
                if (t.outgoing.length === 0) {
                    self.lastState = t;
                }
            });
        },
        getStateFromOutgoingId(incomingId, transitions) {
            let self = this;
            let result = undefined;
            let hasTransition = transitions.find(t=> {
                return t === incomingId;
            })
            if (!hasTransition) {
                self.stateTransition.forEach(item => {
                    let currentState = item.incoming.find(t => {
                        return t === incomingId;
                    });
                    if(currentState) {
                        result = item;
                    }
                })
            }
            return result;
        },
    }
}
</script>
