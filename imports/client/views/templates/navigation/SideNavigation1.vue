<template>
    <side-navigation v-depth="2" v-if="loginUser">
        <div slot="header">
            <side-navigation-profile-1 :text2="loginUser.profile.userType" :text1="loginUser.fullname"></side-navigation-profile-1>
        </div>
        <stockist-admin v-if="loginUser.profile.userType === 'Stockist Owner'"></stockist-admin>
        <super-admin v-if="loginUser.profile.userType === 'Super Admin'"></super-admin>
        
        <divider></divider>
        <nav-list @click="signOut" class="nav-item">
            <icon name="paper-cut-vertical"></icon> Sign Out
        </nav-list>
    </side-navigation>
</template>

<script>
import { User } from '/imports/model/User';
import StockistAdmin from './StockistAdminSideNavigation';
import SuperAdmin from './SuperAdminSideNavigation';
export default {
    methods: {
        signOut() {
            let self = this;
            Meteor.logout(function(err) {
                if(err) {
                    Snackbar.run("Failed to Sign out", function(){
                        self.signOut();
                    }, "RETRY", 'error');
                }
                self.$router.push("/");
            })
        }
    },
    components: {
        StockistAdmin,
        SuperAdmin,
    },
    meteor: {
        subscribe: {
            loginUser: [],
        },
        loginUser() {
            return User.findOne(Meteor.userId());
        }
    }
}
</script>
