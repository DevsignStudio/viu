<template>
    <scroll-bar class="flex-fill-height">
        <router-link to="/">
            <nav-list class="nav-item">
                <icon name="home"></icon> Viu Home
            </nav-list>
        </router-link>
        <nav-list class="nav-item" :sublist="true">
            <icon name="shape-plus"></icon> Components
            <span slot="sublist">
                <router-link to="/components/buttons">
                    <nav-list class="nav-item">
                        <icon name="crop-landscape"></icon> Buttons
                    </nav-list>
                </router-link>
                <router-link to="/components/cards">
                    <nav-list class="nav-item">
                        <icon name="cards"></icon> Cards
                    </nav-list>
                </router-link>
                <router-link to="/components/confirmation">
                    <nav-list class="nav-item">
                        <icon name="alert-octagram"></icon> Confirmation Dialog
                    </nav-list>
                </router-link>
                <router-link to="/components/accordion">
                    <nav-list class="nav-item">
                        <icon name="arrow-expand-all"></icon> Expansion Panel
                    </nav-list>
                </router-link>
                <router-link to="/components/lists">
                    <nav-list class="nav-item">
                        <icon name="format-list-bulleted"></icon> Lists
                    </nav-list>
                </router-link>
                <router-link to="/components/menu">
                    <nav-list class="nav-item">
                        <icon name="image-filter-none"></icon> Menu
                    </nav-list>
                </router-link>
                <router-link to="/components/selection-control">
                    <nav-list class="nav-item">
                        <icon name="toggle-switch"></icon> Selection Control
                    </nav-list>
                </router-link>
                <router-link to="/components/snackbar">
                    <nav-list class="nav-item">
                        <icon name="message"></icon> Snackbar
                    </nav-list>
                </router-link>
                <router-link to="/components/tooltips">
                    <nav-list class="nav-item">
                        <icon name="tooltip"></icon> Tooltips
                    </nav-list>
                </router-link>
            </span>
        </nav-list>
        <nav-list class="nav-item" :sublist="true">
            <icon name="box-shadow"></icon> Templates
            <span slot="sublist">
                <nav-list to="/templates/sliders" class="nav-item">
                    <icon name="fullscreen"></icon> Full Screen Slider
                </nav-list>
            </span>
        </nav-list>
    </scroll-bar>
</template>