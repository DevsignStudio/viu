<template>
    <scroll-bar class="flex-fill-height">
        <router-link to="/" exact>
            <nav-list class="nav-item">
                <icon name="home"></icon> Viu Home
            </nav-list>
        </router-link>
        <nav-list class="nav-item" :sublist="true">
            <icon name="shape-plus"></icon> Components
            <span slot="sublist">
                <router-link to="/components/buttons" exact>
                    <nav-list class="nav-item">
                        <icon name="crop-landscape"></icon> Buttons
                    </nav-list>
                </router-link>
                <router-link to="/components/cards" exact>
                    <nav-list class="nav-item">
                        <icon name="cards"></icon> Cards
                    </nav-list>
                </router-link>
                <router-link to="/components/confirmation" exact>
                    <nav-list class="nav-item">
                        <icon name="alert-octagram"></icon> Confirmation Dialog
                    </nav-list>
                </router-link>
                <router-link to="/components/accordion" exact>
                    <nav-list class="nav-item">
                        <icon name="arrow-expand-all"></icon> Expansion Panel
                    </nav-list>
                </router-link>
                <router-link to="/components/lists" exact>
                    <nav-list class="nav-item">
                        <icon name="format-list-bulleted"></icon> Lists
                    </nav-list>
                </router-link>
                <router-link to="/components/load-img" exact>
                    <nav-list class="nav-item">
                        <icon name="image"></icon> Load Image
                    </nav-list>
                </router-link>
                <router-link to="/components/menu" exact>
                    <nav-list class="nav-item">
                        <icon name="image-filter-none"></icon> Menu
                    </nav-list>
                </router-link>
                <router-link to="/components/selection-control" exact>
                    <nav-list class="nav-item">
                        <icon name="toggle-switch"></icon> Selection Control
                    </nav-list>
                </router-link>
                <router-link to="/components/snackbar" exact>
                    <nav-list class="nav-item">
                        <icon name="message"></icon> Snackbar
                    </nav-list>
                </router-link>
                <router-link to="/components/slider" exact>
                    <nav-list class="nav-item">
                        <icon name="tooltip"></icon> Sliders
                    </nav-list>
                </router-link>
                <router-link to="/components/tooltips" exact>
                    <nav-list class="nav-item">
                        <icon name="tooltip"></icon> Tooltips
                    </nav-list>
                </router-link>
            </span>
        </nav-list>
        <nav-list class="nav-item" :sublist="true">
            <icon name="box-shadow"></icon> Layouts
            <span slot="sublist">
                <router-link to="/layouts/intro-sliders-1" exact>
                    <nav-list  class="nav-item">
                        <icon name="fullscreen"></icon> Introduction Slider
                    </nav-list>
                </router-link>
            </span>
        </nav-list>
        <nav-list class="nav-item" :sublist="true">
            <icon name="code-braces"></icon> Tools
            <span slot="sublist">
                <router-link to="/tools/xmi-parser" exact>
                    <nav-list  class="nav-item">
                        <icon name="fullscreen"></icon> XMI Parser
                    </nav-list>
                </router-link>
            </span>
        </nav-list>
    </scroll-bar>
</template>
