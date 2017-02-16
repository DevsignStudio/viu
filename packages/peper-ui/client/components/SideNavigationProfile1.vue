<template>
    <div class="peper-side-navigation-profile" :style="{
        'background-image': backImgUrl,
    }">
        <div class="overlay"></div>
        <router-link :to="{path: imgLink}">
            <avatar :text="text1" style="float:left;margin-right: 24px;"><img :src="profileImg" /></avatar>
        </router-link>
        <div class="profile-details">
            <router-link :to="{path: textLink}"><strong>{{text1}}</strong></router-link>
            <span style="line-height: 20px;">{{text2}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['text1', 'text2', 'profileImg', 'backImg', 'textLink', 'imgLink'],
    props: {
        text1: {
            type: String,
            default: "",
        },
        text2: {
            type: String,
            default: "",
        },
        profileImg: {
            type: String,
            default: "/packages/skynightz93_peper-ui/client/img/profile.png",
        },
        backImg: {
            type: String,
            default: "/packages/skynightz93_peper-ui/client/img/back.jpg",
        },
        textLink: {
            type: String,
            default: "",
        },
        imgLink: {
            type: String,
            default: "",
        }
    },
    computed: {
        backImgUrl() {
            return 'url(' + this.backImg + ')';
        }
    },
};
</script>
